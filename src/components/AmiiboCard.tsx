// AmiiboCard.tsx
import React from 'react';
import { Amiibo } from '../types';  // Importamos el tipo Amiibo

interface AmiiboCardProps {
  amiibo: Amiibo;  // Definimos el tipo para las propiedades del amiibo
}

const AmiiboCard: React.FC<AmiiboCardProps> = ({ amiibo }) => {
  return (
    <div className="amiibo-card">
      <img src={amiibo.image} alt={amiibo.name} className="amiibo-image" />
      <div className="amiibo-details">
        <p><strong>Name:</strong> {amiibo.name}</p>
        <p><strong>Character:</strong> {amiibo.character}</p>
        <p><strong>Series:</strong> {amiibo.amiiboSeries}</p>
        <p><strong>Type:</strong> {amiibo.type}</p>
      </div>
    </div>
  );
};

export default AmiiboCard;
