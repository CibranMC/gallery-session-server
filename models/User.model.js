const { Schema, model } = require("mongoose");
const { ENUM_ROLES, USER } = require('../const/user.const')

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    role: {
      type: String,
      enum: ENUM_ROLES,
      trim: true,
      default: USER
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }

);

const UserModel = model("User", userSchema);

module.exports = UserModel;
