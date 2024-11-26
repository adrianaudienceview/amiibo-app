// AmiiboList.tsx
import React from 'react';
import AmiiboCard from './AmiiboCard';
import { Amiibo } from '../types';  // Importamos el tipo Amiibo

interface AmiiboListProps {
  amiiboData: Amiibo[];  // Recibimos el arreglo de amiibos
}

const AmiiboList: React.FC<AmiiboListProps> = ({ amiiboData }) => {
  return (
    <div className="amiibo-list">
      {amiiboData.map((amiibo, index) => (
        <AmiiboCard key={index} amiibo={amiibo} />
      ))}
    </div>
  );
};

export default AmiiboList;
