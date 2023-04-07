import './Login.css';
import { Link } from "react-router-dom";

function Registration() {
    return (
        <div>
            <h1>Регистриция</h1>
            <form>
                <input type="text" placeholder="Логин"/>
                <input type="email" placeholder='Почта'/>
                <input type="password" placeholder="Пароль" min="8"/>
                <input type="password" placeholder="Повторите пароль" min="8"/>
                <button>зарегистрироваться</button>
            </form>
            <p>У вас уже есть аккаунт? Тогда вы можете <Link to="/login">войти</Link></p>
            
        </div>
    )
}

export default Registration;