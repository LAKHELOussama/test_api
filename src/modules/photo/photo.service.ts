import { IPhoto } from "./photo.model";
import { PhotoRepository } from "./photo.repo";

export class PhotoService {
    private PhotoRepository: PhotoRepository
    constructor() {
        this.PhotoRepository = new PhotoRepository()
    }
    async createPhoto(PhotoData: Partial<IPhoto>): Promise<IPhoto> {
        return await this.PhotoRepository.createPhoto(PhotoData)
    }

    async updatePhoto(id: string, PhotoData: Partial<IPhoto>): Promise<IPhoto | null> {
        return await this.PhotoRepository.updatePhoto(id, PhotoData)
    }

    async deletePhoto(id: string): Promise<IPhoto | null> {
        return this.PhotoRepository.deletePhoto(id)
    }

    async finById(id: string): Promise<IPhoto | null> {
        return this.PhotoRepository.findPhotoById(id)
    }

}