import React from 'react';

interface ExifDataProps {
  data: {
    make?: string;
    model?: string;
    focalLength?: string;
    aperture?: string;
    iso?: string;
    exposureTime?: string;
    dateTaken?: string;
  };
}

const ExifData: React.FC<ExifDataProps> = ({ data }) => {
  return (
    <div className="w-full max-w-2xl bg-gray-100 p-4 font-[family-name:var(--font-geist-mono)]">
      <h2 className="text-xl mb-2">EXIF Data</h2>
      <ul className="space-y-1">
        {data.dateTaken && <li><strong>Date Taken:</strong> {data.dateTaken}</li>}
        {data.make && <li><strong>Make:</strong> {data.make}</li>}
        {data.model && <li><strong>Model:</strong> {data.model}</li>}
        {data.focalLength && <li><strong>Focal Length:</strong> {data.focalLength}</li>}
        {data.aperture && <li><strong>Aperture:</strong> {data.aperture}</li>}
        {data.iso && <li><strong>ISO:</strong> {data.iso}</li>}
        {data.exposureTime && <li><strong>Exposure Time:</strong> {data.exposureTime}</li>}
      </ul>
    </div>
  );
};

export default ExifData;