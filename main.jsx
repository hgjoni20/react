import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', background: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <h1>React Static Bundle on HostShell</h1>
      <p>Served directly as static files from <code>dist/</code> without a runtime container.</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{ padding: '0.6rem 1.2rem', fontSize: '1rem', cursor: 'pointer', borderRadius: '6px', border: 'none', background: '#38bdf8', color: '#0f172a', fontWeight: 'bold' }}
      >
        State test counter: {count}
      </button>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
