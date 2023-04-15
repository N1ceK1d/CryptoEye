import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './App.css';
import Encryption from './pages/Encryption';
import Decryption from './pages/Decryption';
import Hashing from './pages/Hashing';
import Profile from './pages/Profile';


function App() {
  return (
    <>
      <BrowserRouter>
      <header>
        <h1><Link to="/">CRYPTO-EYE</Link></h1>
      </header>
      <section>
        <div className='menu'>
          <nav>
            <p><Link to="/profile">Профиль</Link></p>
            <p><Link to="/encryption">Шифрование</Link></p>
            <p><Link to="/decryption">Дешифрование</Link></p>
            <p><Link to="/hashing">Хэш</Link></p>
            <Modal/>
          </nav>
        </div>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/encryption' element={<Encryption/>} />
            <Route path='/decryption' element={<Decryption/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/hashing' element={<Hashing/>} />
          </Routes>
          
        </div>
      </section>
      <footer>
        <p>Copyright by is2-24-falaleevna</p>
      </footer>
      </BrowserRouter>    
    </>
  );
}

function Home() {
  return (
    <>
      <img className='logo' src='./images/logo.png'/>
      <h2 className='title'>CRYPTO-EYE</h2>
      <p className='slogan'>Лучшая крипографическая платформа для вашей безопасности</p>
      <div className='description'>
        <div>
          <h2>Что такое Криптография?</h2>
          <p>
          Криптография – это метод защиты информации путем использования закодированных 
          алгоритмов, хэшей и подписей. Информация может находиться на этапе хранения 
          (например, файл на жестком диске), передачи (например, электронная связь между 
          двумя или несколькими сторонами) или использования (при применении для вычислений). 
          Криптография преследует четыре основных цели.</p>
          <ul>
            <li><b>Конфиденциальность</b> – предоставляет доступ к информации только авторизованным пользователям.</li>
            <li><b>Целостность</b> – гарантирует, что над информацией не производились манипуляции.</li>
            <li><b>Подлинность</b> – подтверждает подлинность информации или личность пользователя.</li>
            <li><b>Обеспечение</b> невозможности отказа – лишает возможности отрицать прежние обязательства или действия.</li>
          </ul>
          <p>
          Криптография положена в фундамент современного общества. 
          На ней основаны бесчисленные интернет-приложения, работающие 
          по протоколу безопасной передачи гипертекста (HTTPS), 
          безопасная текстовая и голосовая связь и даже цифровые валюты.</p>
        </div>
      </div>
    </>
  )
}

const Modal = () => (
  <Popup trigger={ sessionStorage.getItem("user") ?
  <p className="sessionBtn">Выйти</p> : 
  <p className="sessionBtn">Войти</p>} modal>
    { sessionStorage.getItem("user") ?
    <Registration/>: 
    <Login/>}
  </Popup>
);

function Login() {
  return (
    <div className='form'> 
      <h1>Вход</h1> 
      <input type='text' placeholder='Логин'/>
      <input type='password' placeholder='Пароль'/>
      <button onClick="">Войти</button>
    </div>
  )
}

function Registration() {
  return (
    <div className='form'> 
      <h1>Регистрация</h1> 
      <input type='text' placeholder='Логин'/>
      <input type='email' placeholder='Почта'/>
      <input type='password' placeholder='Пароль'/>
      <button onClick="">Зарегистрироваться</button>
    </div>
  )
}

export default App;
