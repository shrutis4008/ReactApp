import User from "../models/userSchema.js";

// User registration

export const Register = async (req, res, next) => {
  res.header("Content-Type", "application/json");
  const { username, email, password } = req.body;
  const user = await User.create({
    username,
    email,
    password,
  });

  // token for the user
  const token = await user.getJWTToken();

  res.status(201).json({
    success: true,
    token,
  });
};

// User Login
export const Login = async (req, res, next) => {
  res.header("Content-Type", "application/json");

  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({
      success: false,
      message: "Username and password is required",
    });
  }

  // for the selected username also check password
  const user = await User.findOne({
    username,
  }).select("+password");

  if (!user) {
    res.status(400).json({
      success: false,
      message: "Username not found.",
    });
  }

  // checking using comp pw from userchema

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    res.status(400).json({
      success: false,
      message: "Invalid password.",
    });
  }

  const token = await user.getJWTToken();

  res.status(200).json({
    success: true,
    token,
  });
};

// User Logout
// export const Logout = (req, res) => {
//   res
//     .clearCookie("access_token", {
//       sameSite: "none",
//       secure: true,
//     })
//     .status(200)
//     .json("User has been logged out.");
// };
