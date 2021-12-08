import {React} from 'react';
import './App.css';
import RouterPage from './pages/RouterPage';
import { ToastProvider} from 'react-toast-notifications';
  
function App() {
  return (
    <ToastProvider>
    <div>
        <RouterPage/>
    </div>
    </ToastProvider>
  );
}


export default App;
