import { Router } from "express";
import  { PhotoController } from "./photo.controller";
const router = Router()
const photoController = new PhotoController ()


router.get('/:id' ,photoController.findPhotoById)
router.post('/' ,photoController.createPhoto)
router.patch('/:id' ,photoController.updatePhoto)
router.delete('/:id' ,photoController.deletePhoto)


export default router;