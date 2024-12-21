import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  comment: { type: String, required: true }, // New comment field (optional)
});

const User = models.User || model("User", UserSchema);

export default User;
