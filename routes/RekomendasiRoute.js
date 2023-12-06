import express from "express";
import {
    getRekomendasi,
    getRekomendasiById,
    saveRekomendasi,
    updateRekomendasi,
    deleteRekomendasi
} from "../controller/RekomendasiController.js";

const router = express.Router();

router.get('/rekomendasi', getRekomendasi);
router.get('/rekomendasi/:id', getRekomendasiById);
router.post('/rekomendasi', saveRekomendasi);
router.patch('/rekomendasi/:id', updateRekomendasi);
router.delete('/rekomendasi/:id', deleteRekomendasi);

export default router;