import authDao from "../dao/authDao.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

class authService {
  async register({ name, email, password }) {
    const user = await authDao.findUserBYEmail(email);
    if (user) {
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await authDao.createNewUser({
      name,
      email,
      password: hashedPassword,
    });
    const payload = { id: newUser._id };
    const token = jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2hr",
    });

    return { new: newUser, token };
  }
}

export default new authService();
