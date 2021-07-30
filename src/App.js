import React from 'react';
import { AdminPanel } from './pages/AdminPanel';
import { Footer, Header } from './components/index';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AdminPanel />
        <Footer />
      </div>
    </div>
  );
}

export default App;
