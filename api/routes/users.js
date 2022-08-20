import express from "express";

import {
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//check if authenticated with token
//router.get("/checkauthentication", verifyToken, (req, res, next) => {
// res.send("Hello, you are now authenticated");
//});
// check if authenticated with id
//router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//  res.send("Hello, you are now logged in and you can now delete your account");
//});

// check if Admin
//router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//  res.send(
//    "Hello admin, you are now logged in and you can now delete all accounts"
//  );
//});

//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get
router.get("/:id", verifyUser, getOneUser);

//get all
router.get("/", verifyAdmin, getAllUsers);

export default router;
