import express from 'express';
import uploadController from '../controller/uploadController.js';


const router = express.Router();

router.post('/upload',uploadController.upload)

export default router;