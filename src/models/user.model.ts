import { Document, Schema, model } from "mongoose"

interface IUser extends Document {
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
}

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, 
});

schema.methods.comparePassword = async function(password: string, userPassword: string): Promise<boolean> {
  return password === userPassword;
};

const User = model("User", schema);

export { User, IUser };
