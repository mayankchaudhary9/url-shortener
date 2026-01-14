import authDao from "../dao/auth.dao.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { signToken } from "../utils/helper.js";
import { ConflictError } from "../utils/errorHandler.js";
dotenv.config();

class authService {
  async register({ name, email, password }) {
    const user = await authDao.findUserByEmail(email);
    if (user) {
      throw new ConflictError("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await authDao.createNewUser({
      name,
      email,
      password: hashedPassword,
    });
    const token = await signToken({ id: newUser._id });

    return { new: newUser, token };
  }

  async login({ email, password }) {
    const user = await authDao.findUserByEmailByPassword(email);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
      throw new Error("Invalid password");
    }

    const token = await signToken({ id: user._id });

    return { user, token };
  }
}

export default new authService();
