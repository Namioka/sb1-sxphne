import React, { useState, useEffect } from 'react';
import { Coins, RefreshCcw } from 'lucide-react';

function App() {
  const [jackpot, setJackpot] = useState(1000000);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    if (spinning) {
      const interval = setInterval(() => {
        setJackpot(prev => Math.floor(prev + Math.random() * 10000));
      }, 100);
      setTimeout(() => {
        clearInterval(interval);
        setSpinning(false);
      }, 3000);
    }
  }, [spinning]);

  const handleSpin = () => {
    setSpinning(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-800 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">ジャックポット</h1>
      <div className="bg-white text-indigo-800 rounded-lg p-8 shadow-lg mb-8">
        <div className="flex items-center justify-center">
          <Coins className="w-8 h-8 mr-2" />
          <span className="text-5xl font-bold">¥{jackpot.toLocaleString()}</span>
        </div>
      </div>
      <button
        onClick={handleSpin}
        disabled={spinning}
        className={`bg-yellow-400 hover:bg-yellow-500 text-indigo-800 font-bold py-3 px-6 rounded-full flex items-center ${
          spinning ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <RefreshCcw className="w-5 h-5 mr-2" />
        {spinning ? 'スピン中...' : 'スピンする'}
      </button>
    </div>
  );
}

export default App;