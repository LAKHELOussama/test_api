import { IPhoto, PhotoModel } from "./photo.model";

export class PhotoRepository {
    async createPhoto(PhotoData: Partial<IPhoto>): Promise<IPhoto> {
      
        const Photo = new PhotoModel(PhotoData);
        return await Photo.save();
    }
    async updatePhoto(id: string, PhotoData: Partial<IPhoto>): Promise<IPhoto | null> {
        return await PhotoModel.findByIdAndUpdate(id, PhotoData);
    }
    async deletePhoto(id : string) : Promise<IPhoto | null>{
        return await PhotoModel.findByIdAndDelete(id)
    }
    async findPhotoById(id: string): Promise<IPhoto| null> {
      return await PhotoModel.findById(id);
    }
    
}