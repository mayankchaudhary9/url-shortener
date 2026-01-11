import User from "../models/authModels.js";

class authDao {
  async findUserBYEmail(email) {
    return await User.findOne({ email });
  }

  async createNewUser({ name, email, password }) {
    const newUser = new User({ name, email, password });
    await newUser.save();
    return newUser;
  }
}

export default new authDao();
