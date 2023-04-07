import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Login from './components/Login';
import StartPage from './StartPage';
import Registration from './components/Registration';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StartPage />} />
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
