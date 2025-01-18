// const mongoose = require("mongoose");
// const Activity = require("./activity");
// const User = require("./user");
// const db = require("../../config/db");



// const startUsers = [
//      {  
//       username: "Guest",
//       email: "guest@gmails.com",
//       password: "pop",
//       password_confirmation: "pop",
//       createdDate: "2024-10-23",
//       avatar: "https://i.imgur.com/uEW4fPX.png",
//      },
//      {  
//       username: "GuestFriend",
//       email: "guestFriend@gmails.com",
//       password: "pop",
//       password_confirmation: "pop",
//       createdDate: "2024-10-23",
//       avatar: "https://i.imgur.com/uEW4fPX.png",
//      },
//      {  
//       username: "GuestOtherFriend",
//       email: "guestOtherFriend@gmails.com",
//       password: "pop",
//       password_confirmation: "pop",
//       createdDate: "2024-10-23",
//       avatar: "https://i.imgur.com/uEW4fPX.png",
//      },

// ];





// const startActivities = [
//   {
//     activity: "Take a bubble bath",
//     accessibility: 0.1,
//     type: "relaxation",
//     participants: 1,
//     price: 0.15,
//     progress: 100,
//   },
//   {
//     activity: "Clean out sock drawer",
//     accessibility: 0,
//     type: "busywork",
//     participants: 1,
//     price: 0,
//     progress: 50,
//   },
//   {
//     activity: "Host a board game night",
//     accessibility: 0.5,
//     type: "social",
//     participants: 4,
//     price: 0.1,
//     progress: 0,
//   },
// ];

// const types = [
//   "education",
//   "social",
//   "diy",
//   "charity",
//   "cooking",
//   "relaxation",
//   "music",
//   "busywork",
// ];
// const userIds = [
//   "635e77d57930a2cd84f10f72",
//   "635e89f983c3bac000a5b5ec",
//   "635fcd2e20335c848dc124e4",
//   "635fd912e374a9a5baf24cd7",
//   "63602f8a401750583009a2cd",
//   "6360320d401750583009a2d7",
// ];

// const activities = [];

// for (let i = 0; i < 7; i++) {
//   for (let a = 0; a < 19; a++) {
//       let type = types[i];
//       let user = userIds[0];
//       let activity = `SEED2-${type}-${i}-${a}`;
//       activities.push({
//         activity: activity,
//         accessibility: 1,
//         type: type,
//         participants: 1,
//         progress: 100,
//         owner: `671701284a2a7119d5b53bd0`,
//         price: 2,
//   });
//   }
// }

// for (let i = 0; i < 20; i++) {
//   let type = types[1];
//   let user = userIds[1];
//   let activity = `SEED2-${type}-${i}`;
//   activities.push({
//     activity: activity,
//     accessibility: 1,
//     type: type,
//     participants: 1,
//     progress: 100,
//     owner: `66f3713399eac3608b60e0b7`,
//     price: 1,
//   });
// }

// for (let i = 0; i < 6; i++) {
//   let type = types[2];
//   let user = userIds[1];
//   let activity = `SEED2-${type}-${i}`;
//   activities.push({
//     activity: activity,
//     accessibility: 1,
//     type: type,
//     participants: 1,
//     progress: 100,
//     owner: `66f3713399eac3608b60e0b7`,
//     price: 0,
//   });
// }

// for (let i = 0; i < 20; i++) {
//   let type = types[3];
//   let user = userIds[2];
//   let activity = `SEED2-${type}-${i}`;
//   activities.push({
//     activity: activity,
//     accessibility: 1,
//     type: type,
//     participants: 1,
//     progress: 100,
//     owner: `66f3713399eac3608b60e0b7`,
//     price: 1,
//   });
// }

// for (let i = 0; i < 20; i++) {
//   let type = types[4];
//   let user = userIds[2];
//   let activity = `SEED2-${type}-${i}`;
//   activities.push({
//     activity: activity,
//     accessibility: 1,
//     type: type,
//     participants: 1,
//     progress: 100,
//     owner: `66f3713399eac3608b60e0b7`,
//     price: 1,
//   });
// }

// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     Activity.create(activities)
//       .then((newActivities) => {
//         console.log("the new activities", newActivities);
//         mongoose.connection.close();
//       })
//       .catch((error) => {
//         console.log(error);
//         mongoose.connection.close();
//       })

//       .catch((error) => {
//         console.log(error);
//         mongoose.connection.close();
//       });
//   })
//   .then(() => {
//     User.create(startUsers)
//       .then((newActivities) => {
//         console.log("the new activities", newActivities);
//         mongoose.connection.close();
//       })
//       .catch((error) => {
//         console.log(error);
//         mongoose.connection.close();
//       })

//       .catch((error) => {
//         console.log(error);
//         mongoose.connection.close();
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//     mongoose.connection.close();
//   });



// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const Activity = require("./activity");
// const User = require("./user");
// const db = require("../../config/db");

// // Define seed data
// const startUsers = [
//   {
//     username: "Guest",
//     email: "guest@gmails.com",
//     password: "pop",
//     createdDate: "2024-10-23",
//     avatar: "https://i.imgur.com/uEW4fPX.png",
//   },
//   {
//     username: "GuestFriend",
//     email: "guestFriend@gmails.com",
//     password: "pop",
//     createdDate: "2024-10-23",
//     avatar: "https://i.imgur.com/uEW4fPX.png",
//   },
//   {
//     username: "GuestOtherFriend",
//     email: "guestOtherFriend@gmails.com",
//     password: "pop",
//     createdDate: "2024-10-23",
//     avatar: "https://i.imgur.com/uEW4fPX.png",
//   },
// ];

// const startActivities = [
//   {
//     activity: "Take a bubble bath",
//     accessibility: 0.1,
//     type: "relaxation",
//     participants: 1,
//     price: 0.15,
//     progress: 100,
//   },
//   {
//     activity: "Clean out sock drawer",
//     accessibility: 0,
//     type: "busywork",
//     participants: 1,
//     price: 0,
//     progress: 50,
//   },
//   {
//     activity: "Host a board game night",
//     accessibility: 0.5,
//     type: "social",
//     participants: 4,
//     price: 0.1,
//     progress: 0,
//   },
// ];

// // Function to hash user passwords
// const hashPasswords = async (users) => {
//   return Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return { ...user, hashedPassword, password: undefined }; // Remove plaintext password
//     })
//   );
// };

// const seedDatabase = async () => {
//   try {
//     await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log("Connected to the database!");

//     // Clear existing data
//     await Activity.deleteMany({});
//     await User.deleteMany({});
//     console.log("Cleared old data!");

//     // Hash passwords and seed users
//     const usersWithHashedPasswords = await hashPasswords(startUsers);
//     const createdUsers = await User.insertMany(usersWithHashedPasswords);
//     console.log("Seeded users:", createdUsers);

//     // Seed activities and assign to first user
//     const activitiesWithOwner = startActivities.map((activity) => ({
//       ...activity,
//       owner: createdUsers[0]._id, // Assign first user as owner
//     }));
//     const createdActivities = await Activity.insertMany(activitiesWithOwner);
//     console.log("Seeded activities:", createdActivities);

//     // Close the connection
//     mongoose.connection.close();
//     console.log("Database seeding complete. Connection closed.");
//   } catch (error) {
//     console.error("Error during seeding:", error);
//     mongoose.connection.close();
//   }
// };

// seedDatabase();


const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Activity = require("./activity");
const User = require("./user");
const db = require("../../config/db");

const badgeCriteria = {
  novice: 1,
  junior: 3,
  master: 5,
  expert: 10,
};

const harryPotterActivities = [
    // Education
    { activity: "Attend a Potions class", type: "education", price: 0.1, participants: 1, accessibility: 0.3, progress: 100 },
    { activity: "Learn Transfiguration spells", type: "education", price: 0.2, participants: 1, accessibility: 0.4, progress: 100 },
    { activity: "Study Herbology in the greenhouse", type: "education", price: 0.1, participants: 1, accessibility: 0.2, progress: 100 },
    { activity: "Take a Defense Against the Dark Arts exam", type: "education", price: 0.15, participants: 1, accessibility: 0.5, progress: 100 },
    { activity: "Master Advanced Spell Casting Techniques", type: "education", price: 0.25, participants: 1, accessibility: 0.6, progress: 100 },
  
    // Recreational
    { activity: "Play a Quidditch match", type: "recreational", price: 0.3, participants: 6, accessibility: 0.7, progress: 100 },
    { activity: "Explore the Forbidden Forest", type: "recreational", price: 0.4, participants: 2, accessibility: 0.6, progress: 100 },
    { activity: "Have a snowball fight at Hogwarts", type: "recreational", price: 0.2, participants: 4, accessibility: 0.3, progress: 100 },
    { activity: "Fly on a broomstick over the Quidditch pitch", type: "recreational", price: 0.25, participants: 1, accessibility: 0.5, progress: 100 },
    { activity: "Play Exploding Snap in the common room", type: "recreational", price: 0.1, participants: 2, accessibility: 0.3, progress: 100 },
  
    // Social
    { activity: "Join a Dumbledore's Army meeting", type: "social", price: 0.2, participants: 5, accessibility: 0.5, progress: 100 },
    { activity: "Attend a Gryffindor common room party", type: "social", price: 0.15, participants: 4, accessibility: 0.4, progress: 100 },
    { activity: "Go on a group trip to Hogsmeade", type: "social", price: 0.3, participants: 3, accessibility: 0.6, progress: 100 },
    { activity: "Share Butterbeer at The Three Broomsticks", type: "social", price: 0.2, participants: 2, accessibility: 0.2, progress: 100 },
    { activity: "Host a magical trivia night", type: "social", price: 0.2, participants: 4, accessibility: 0.4, progress: 100 },
  
    // DIY
    { activity: "Build your own wand", type: "diy", price: 0.15, participants: 1, accessibility: 0.4, progress: 100 },
    { activity: "Craft a magical potion", type: "diy", price: 0.2, participants: 1, accessibility: 0.3, progress: 100 },
    { activity: "Sew a house-elf sock", type: "diy", price: 0.1, participants: 1, accessibility: 0.2, progress: 100 },
    { activity: "Create a Marauder's Map replica", type: "diy", price: 0.25, participants: 1, accessibility: 0.5, progress: 100 },
    { activity: "Design a custom Hogwarts crest", type: "diy", price: 0.2, participants: 1, accessibility: 0.3, progress: 100 },
  
    // Charity
    { activity: "Donate galleons to Gringotts charity fund", type: "charity", price: 0.5, participants: 1, accessibility: 0.2, progress: 100 },
    { activity: "Help a friend repair their broomstick", type: "charity", price: 0.3, participants: 1, accessibility: 0.3, progress: 100 },
    { activity: "Organize a book drive for Hogwarts library", type: "charity", price: 0.4, participants: 3, accessibility: 0.4, progress: 100 },
    { activity: "Volunteer to clean the Gryffindor dormitory", type: "charity", price: 0.2, participants: 2, accessibility: 0.1, progress: 100 },
    { activity: "Help Madam Pomfrey with hospital wing duties", type: "charity", price: 0.35, participants: 1, accessibility: 0.3, progress: 100 },
  
    // Cooking
    { activity: "Bake pumpkin pasties", type: "cooking", price: 0.2, participants: 2, accessibility: 0.3, progress: 100 },
    { activity: "Prepare cauldron cakes", type: "cooking", price: 0.25, participants: 2, accessibility: 0.4, progress: 100 },
    { activity: "Brew a batch of Butterbeer", type: "cooking", price: 0.3, participants: 3, accessibility: 0.5, progress: 100 },
    { activity: "Make treacle tart for dessert", type: "cooking", price: 0.2, participants: 2, accessibility: 0.3, progress: 100 },
    { activity: "Cook a traditional wizarding feast", type: "cooking", price: 0.5, participants: 4, accessibility: 0.4, progress: 100 },
  
    // Relaxation
    { activity: "Relax by the Black Lake", type: "relaxation", price: 0.05, participants: 1, accessibility: 0.1, progress: 100 },
    { activity: "Take a nap in the Gryffindor dormitory", type: "relaxation", price: 0.1, participants: 1, accessibility: 0.2, progress: 100 },
    { activity: "Enjoy a quiet moment in the Hogwarts library", type: "relaxation", price: 0.15, participants: 1, accessibility: 0.3, progress: 100 },
    { activity: "Sit by the fireplace in the common room", type: "relaxation", price: 0.1, participants: 1, accessibility: 0.2, progress: 100 },
    { activity: "Listen to the Whomping Willow's rustling leaves", type: "relaxation", price: 0.1, participants: 1, accessibility: 0.2, progress: 100 },
  
    // Music
    { activity: "Play a magical melody", type: "music", price: 0.1, participants: 1, accessibility: 0.2, progress: 100 },
    { activity: "Sing the Hogwarts school song", type: "music", price: 0.05, participants: 5, accessibility: 0.3, progress: 100 },
    { activity: "Compose a new house anthem", type: "music", price: 0.2, participants: 1, accessibility: 0.4, progress: 100 },
    { activity: "Learn to play the enchanted harp", type: "music", price: 0.3, participants: 1, accessibility: 0.5, progress: 100 },
    { activity: "Enchant a lute to play itself", type: "music", price: 0.15, participants: 1, accessibility: 0.4, progress: 100 },
  
    // Busywork
    { activity: "Organize your spellbook notes", type: "busywork", price: 0.05, participants: 1, accessibility: 0.2, progress: 100 },
    { activity: "Polish your wand", type: "busywork", price: 0.1, participants: 1, accessibility: 0.1, progress: 100 },
    { activity: "Rearrange potion ingredients in the cupboard", type: "busywork", price: 0.2, participants: 1, accessibility: 0.3, progress: 100 },
    { activity: "Write a detailed essay on magical creatures", type: "busywork", price: 0.15, participants: 1, accessibility: 0.4, progress: 100 },
    { activity: "Sort through magical artifacts in the attic", type: "busywork", price: 0.2, participants: 1, accessibility: 0.3, progress: 100 },
  
];

const seedDatabase = async () => {
  try {
    // Connect to the database
    mongoose.set("strictQuery", true); // Suppress deprecation warnings
    await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to the database!");

    // Clear existing data
    await Activity.deleteMany({});
    await User.deleteMany({});
    console.log("Cleared old activities and users!");

    // Create guest user
    const guestUser = {
      username: "Guest",
      email: "guest@gmails.com",
      password: "pop",
    };
    const hashedPassword = await bcrypt.hash(guestUser.password, 10);
    const createdUser = await User.create({
      ...guestUser,
      hashedPassword,
    });
    console.log("Created guest user:", createdUser);

    // Seed activities dynamically for each type
    const activitiesToSeed = [];
    const activityTypes = [
      "education",
      "recreational",
      "social",
      "diy",
      "charity",
      "cooking",
      "relaxation",
      "music",
      "busywork",
    ];

    activityTypes.forEach((type) => {
      const typeActivities = harryPotterActivities.filter((activity) => activity.type === type);

      // Ensure enough activities for all badge levels
      let count = 0;
      while (count < badgeCriteria.master) {
        typeActivities.forEach((activity) => {
          if (count >= badgeCriteria.master) return;
          activitiesToSeed.push({ ...activity, owner: createdUser._id });
          count++;
        });
      }
    });

    // Insert activities into the database
    const createdActivities = await Activity.insertMany(activitiesToSeed);
    console.log(`Seeded ${createdActivities.length} activities!`);

    // Close the database connection
    mongoose.connection.close();
    console.log("Database seeding complete. Connection closed.");
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.connection.close();
  }
};

seedDatabase();