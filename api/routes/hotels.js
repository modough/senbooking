import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotelRooms,
  getOneHotel,
  updateHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);

//update
router.put("/:id", verifyAdmin, updateHotel);

//delete
router.delete("/:id", verifyAdmin, deleteHotel);

//get
router.get("/find/:id", getOneHotel);

//get all
router.get("/", getAllHotels);
router.get("/countbycity", countByCity);
router.get("/countbytype", countByType);
router.get("/rooms/:id", getHotelRooms);

export default router;
