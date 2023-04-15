import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Profile.css';

function Profile() {
    if(!sessionStorage.getItem("user")) {
        return (
            <div className='profile'>
                <h1>Вы не вошли в аккуант</h1>
                <div className='buttons'>
                    <LoginModal/>
                    <RegistrationModal/>
                </div>
            </div>
        )
    } else {
        return (
            <div className='profile'></div>
        )
    }
}

const LoginModal = () => (
    <Popup trigger={
            <p className="sessionBtn">Войти</p>
        } modal>
        <div className='form'> 
            <h1>Вход</h1> 
            <input type='text' placeholder='Логин'/>
            <input type='password' placeholder='Пароль'/>
            <button onClick="">Войти</button>
        </div>
    </Popup>
  );

  
const RegistrationModal = () => (
    <Popup trigger={
            <p className="sessionBtn">Зарегистрироваться</p>
        } modal>
        <div className='form'> 
          <h1>Регистрация</h1> 
          <input type='text' placeholder='Логин'/>
          <input type='email' placeholder='Почта'/>
          <input type='password' placeholder='Пароль'/>
          <button onClick="">Зарегистрироваться</button>
        </div>
    </Popup>
  );

export default Profile;