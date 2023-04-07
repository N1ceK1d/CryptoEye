import { Link } from "react-router-dom";
import "./Login.css";

function checkData() {
    return false;
}

function signUp() {
    if(checkData()){
        alert("Вы успешно вошли!");
    } else {
        alert("Введены неверные данные");
    }
}

function Login() {
    return (
        <div>
            <h1>Вход</h1>
            <form>
                <input type="text" placeholder="Логин"/>
                <input type="password" placeholder="Пароль"/>
                <button onClick={signUp}>Войти</button>
            </form>
            <p>У вас нет аккаунта? Тогда вам стоит <Link to="/registration">зарегистрироваться</Link> </p>
        </div>
    )
}

export default Login;