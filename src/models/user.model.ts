import { Document, Schema, model } from "mongoose"

interface IUser extends Document {
  email: string;
  password: string;
}

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  
});

const User = model("User", schema);

export { User, IUser };
