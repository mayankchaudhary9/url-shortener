import User from "../models/authModels.js";

class authDao {
  async checkByEmail(email) {
    return await User.findOne({ email });
  }

  async createNewUser({ name, email, password }) {
    const newUser = new User({ name, email, password });
    await newUser.save();
    return newUser;
  }

  async findUserByEmail(email) {
    return await User.findOne({ email });
  }
}

export default new authDao();
