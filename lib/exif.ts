import ExifReader from 'exifreader';
import { promises as fs } from 'fs';

export async function getExifData(filePath: string) {
  const imageBuffer = await fs.readFile(filePath);
  const tags = await ExifReader.load(imageBuffer);

  return {
    make: tags['Make']?.description,
    model: tags['Model']?.description,
    focalLength: tags['FocalLength']?.description,
    aperture: tags['FNumber']?.description,
    iso: tags['ISOSpeedRatings']?.description,
    exposureTime: tags['ExposureTime']?.description,
  };
}