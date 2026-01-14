import User from "../models/auth.model.js";

class authDao {
  async findUserByEmailByPassword(email) {
    return await User.findOne({ email }).select("+password");
  }

  async findUserById(id) {
    return await User.findById(id);
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
