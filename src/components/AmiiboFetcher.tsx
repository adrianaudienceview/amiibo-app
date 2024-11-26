// AmiiboFetcher.tsx
import React, { useState, useEffect } from 'react';
import AmiiboList from './AmiiboList';
import './AmiiboFetcher.css';
import { Amiibo } from '../types';  // Asegúrate de importar el tipo Amiibo

export const AmiiboFetcher: React.FC = () => {
  const [amiibos, setAmiibos] = useState<Amiibo[]>([]); // Tipamos correctamente el estado amiibos

  useEffect(() => {
    const fetchAmiibos = async () => {
      const response = await fetch('https://www.amiiboapi.com/api/amiibo/');
      const data = await response.json();
      const filtered = data.amiibo.filter(
        (amiibo: any) => amiibo.amiiboSeries === 'Super Mario Bros.'
      );
      const transformed: Amiibo[] = filtered.map((amiibo: any) => ({
        name: amiibo.name,
        character: amiibo.character,
        amiiboSeries: amiibo.amiiboSeries,
        type: amiibo.type,
        image: amiibo.image,
      }));
      setAmiibos(transformed);
    };

    fetchAmiibos();
  }, []);

  return (
    <div className="amiibo-container">
      <h1>Amiibo Fetcher</h1>
      <AmiiboList amiiboData={amiibos} /> {/* Pasamos amiibos como amiiboData */}
    </div>
  );
};
