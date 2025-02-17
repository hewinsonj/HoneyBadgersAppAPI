const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");

// pull in Mongoose model for activity
const Message = require("../models/message");

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require("../../lib/custom_errors");

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404;
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else

//const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require("../../lib/remove_blank_fields");
const { ObjectId } = require("mongodb");
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate("bearer", { session: false });

//custom functions
//function to count up completed activities of each type from a mongoose query giving an array of a user's activities

//const countFinished = require('../../lib/count_finished')

//function to assign badges

//const badges = require('../../lib/badges')

// instantiate a router (mini app that only handles routes)
const router = express.Router();

///////////////////
// INDEX
// GET (/activities)
//////////////////
router.get("/messages", (req, res, next) => {
  Message.find()
    .populate("owner", "email")
    .then((messages) => {
      return messages.map((message) => message);
    })
    .then((messages) => {
      res.status(200).json({ messages: messages });
    })
    .catch(next);
});

// router.get("/messages/between/:user1Id/:user2Id", requireToken, (req, res, next) => {
//   const { user1Id, user2Id } = req.params;

//   Message.find({
//     $or: [
//       { owner: user1Id, recipient: user2Id },
//       { owner: user2Id, recipient: user1Id },
//     ],
//   })
//     .sort({ createdAt: 1 }) // Sort by oldest to newest
//     .then((messages) => res.status(200).json({ messages }))
//     .catch(next);
// });


router.get("/messages/between/:user1Id/:user2Id", requireToken, (req, res, next) => {
  const { user1Id, user2Id } = req.params;

  // Log the intake request parameters
  console.log("Incoming request to /messages/between");
  console.log("User 1 ID:", user1Id);
  console.log("User 2 ID:", user2Id);

  // Define the query to find messages
  const query = {
    $or: [
      { owner: user1Id, recipient: user2Id },
      { owner: user2Id, recipient: user1Id },
    ],
  };

  // Log the query being used
  console.log("Query:", JSON.stringify(query, null, 2));

  Message.find(query)
    .sort({ createdAt: 1 }) // Sort by oldest to newest
    .then((messages) => {
      // Log the result of the query
      console.log("Messages retrieved:", messages);
      res.status(200).json({ messages });
    })
    .catch((error) => {
      // Log the error if something goes wrong
      console.error("Error retrieving messages:", error);
      next(error);
    });
});

///////////////////
// SHOW MINE
// GET (/activities/mine)
//////////////////
//show all from current user
router.get("/messages/mine", requireToken, (req, res, next) => {
  Message.find({ recipient: mongoose.Types.ObjectId(req.user.id) })
    .populate("owner")
    .then(handle404)
    .then((messages) => {
      res.status(200).json({ messages: messages });
    })
    .catch(next);
});

///////////////////
// SHOW User's
// GET (/activities/user/:userID
//////////////////
router.get("/messages/user/:userId", requireToken, (req, res, next) => {
  Message.find({ recipient: req.params.userId })
    .then(handle404)
    .then((messages) => {
      //return the public activities
      res.status(200).json({ messages: messages });
    })
    .catch(next);
});

///////////////////
// SHOW
// GET (/activities/:id)
//////////////////
router.get("/messages/:id", requireToken, (req, res, next) => {
  Message.findById(req.params.id)
    .populate("owner")
    .then(handle404)
    .then((message) => {
      message = message.map((message) => ({
        recipient: message.recipient,
      }));
      res.status(200).json({ message: message });
    })
    .catch(next);
});

///////////////////
// CREATE
// POST (/activities)
//////////////////
// router.post("/messages", requireToken, (req, res, next) => {
//   req.body.message.owner = req.user.id;
//   Message.create(req.body.message)
//     .then((message) => {
//       res.status(201).json({ message: message });
//     })
//     .catch(next);
// });

router.post("/messages", requireToken, (req, res, next) => {
  req.body.message.owner = req.user.id; // Automatically set owner to the logged-in user
  console.log("Creating message with data:", req.body.message);

  Message.create(req.body.message)
    .then((message) => {
      console.log("Message successfully created:", message);
      res.status(201).json({ message });
    })
    .catch((error) => {
      console.error("Error creating message:", error);
      next(error);
    });
});

///////////////////
// DESTROY
// DELETE (/activities/:id)
//////////////////
router.delete("/messages/:id", (req, res, next) => {
  Message.findById(req.params.id)
    .then(handle404)
    .then((message) => {
      message.deleteOne();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
