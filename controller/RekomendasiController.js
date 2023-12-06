import Rekomendasi from "../models/RekomendasiModel.js";
import path from "path";
import fs from "fs";

export const getRekomendasi = async (req, res) => {
  try {
    const response = await Rekomendasi.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
