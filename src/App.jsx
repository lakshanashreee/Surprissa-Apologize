import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AudioProvider } from './components/ui/AudioEffects';
import { ApologyLiveExperience } from './components/interactive/ApologyLiveExperience';

export default function App() {
  return (
    <BrowserRouter>
      <AudioProvider>
        <div style={{
          minHeight: '100vh',
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--color-burgundy-deepest)',
          background: 'radial-gradient(ellipse at 50% 25%, rgba(141, 11, 11, 0.45) 0%, rgba(24, 2, 2, 0.95) 60%, rgba(18, 1, 1, 1) 100%)',
          overflowX: 'hidden'
        }}>
          <main style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <ApologyLiveExperience recipientName="Stacy" onComplete={() => {}} />
          </main>
        </div>
      </AudioProvider>
    </BrowserRouter>
  );
}
