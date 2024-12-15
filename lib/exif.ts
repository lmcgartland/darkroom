import ExifReader from 'exifreader';
import { promises as fs } from 'fs';

function formatDate(dateString: string): string {
  const [datePart] = dateString.split(' ');
  const [year, month, day] = datePart.split(':');
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  
  return date.toLocaleDateString('en-US', options);
}

export async function getExifData(filePath: string) {
  const imageBuffer = await fs.readFile(filePath);
  const tags = await ExifReader.load(imageBuffer);

  const dateTaken = tags['DateTimeOriginal']?.description;

  return {
    make: tags['Make']?.description,
    model: tags['Model']?.description,
    focalLength: tags['FocalLength']?.description,
    aperture: tags['FNumber']?.description,
    iso: tags['ISOSpeedRatings']?.description,
    exposureTime: tags['ExposureTime']?.description,
    dateTaken: dateTaken ? formatDate(dateTaken) : undefined,
  };
}