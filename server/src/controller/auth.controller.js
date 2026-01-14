import { cookieOptions } from "../config/config.js";
import authService from "../service/auth.service.js";

class authController {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.status(400).json({
          message: "Please enter all details",
          error: true,
          success: false,
        });
      }
      const { user, token } = await authService.register({
        name,
        email,
        password,
      });
      req.user = user;
      res.cookie("accessToken", token, cookieOptions);
      return res.status(201).json({
        message: "Register Successful",
        error: false,
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message || error,
        error: true,
        success: false,
      });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          message: "Please provide cridentials",
          error: true,
          success: false,
        });
      }

      const { user, token } = await authService.login({ email, password });

      req.user = user;
      res.cookie("accessToken", token, cookieOptions);
      return res.status(200).json({
        message: "Login successful",
        error: false,
        success: true,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message || error,
        error: true,
        success: false,
      });
    }
  }
}

export default new authController();
