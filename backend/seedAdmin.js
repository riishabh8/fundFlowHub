const mongoose = require("mongoose");

async function seedAdmin() {
  try {
    const User = require("./models/user.model");

    const adminData = {
      name: "admin",
      password: "adminpassword",
    };

    const existingAdmin = await User.findOne({ username: adminData.username });

    if (existingAdmin) {
      console.log("Admin data already exists:", existingAdmin);
    } else {
      const admin = new User(adminData);
      await admin.save();
      console.log("Admin data seeded successfully:", admin);
    }
  } catch (err) {
    console.error("Error seeding admin data:", err);
  }
}

module.exports = seedAdmin;
