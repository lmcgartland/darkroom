import React from 'react';

interface ExifDataProps {
  data: {
    make?: string;
    model?: string;
    focalLength?: string;
    aperture?: string;
    iso?: string;
    exposureTime?: string;
  };
}

const ExifData: React.FC<ExifDataProps> = ({ data }) => {
  return (
    <div className="bg-gray-100 p-4 font-[family-name:var(--font-geist-mono)]">
      <h2 className="text-xl font-semibold mb-2">EXIF Data</h2>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="mb-1">
            <span className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExifData;