import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getOneRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/:hotelid", verifyAdmin, createRoom);

//update
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//get
router.get("/:id", getOneRoom);

//get all
router.get("/", getAllRooms);

export default router;
