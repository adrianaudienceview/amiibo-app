import React from 'react';
import { AmiiboFetcher } from './components/AmiiboFetcher';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <AmiiboFetcher />
    </div>
  );
};

export default App;