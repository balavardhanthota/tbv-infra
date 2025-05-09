import React from 'react';

interface GoogleMapProps {
  location: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  height?: string;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({ 
  location, 
  zoom = 15,
  height = "400px"
}) => {
  return (
    <iframe
      width="100%"
      height={height}
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.lat},${location.lng}&zoom=${zoom}`}
    ></iframe>
  );
};