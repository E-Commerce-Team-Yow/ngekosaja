import React from 'react';
import { CookiesProvider } from 'react-cookie';
import './App.css';
import RouterPage from './pages/RouterPage';
  
function App() {
  return (
    <div>
      <CookiesProvider>
        <RouterPage/>
      </CookiesProvider>
    </div>
  );
}


export default App;
