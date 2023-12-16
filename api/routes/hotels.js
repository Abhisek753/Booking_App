import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {
  createHotels,
  deleteHotels,
  getAllHotels,
  getOneHotels,
  updateHotels,
} from "../controllers/hotel.js";

const router = express.Router();
//CREATE
router.post("/", createHotels);
//UPDATE

router.put("/:id", updateHotels);
//DELETE

router.delete("/:id", deleteHotels);
//GET
router.get("/:id", getOneHotels);
//GET All
router.get("/", getAllHotels);

export default router;
