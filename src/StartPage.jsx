import { Link } from 'react-router-dom';

function StartPage() {
    return (
        <div>
            <header>
        <img src='../images/logo.png'/>
        <p className='title'>CRYPTO-EYE</p>
        <Link to="/login">
        <button className='enterButton'>
          Войти / Зарегистрироваться
        </button>
        </Link>
      </header>
      <section>
        <div>
          <h1>Самая лучшая безопасность</h1>
          <p>Наш сервис предостовляет ряд полезных функций, которые помогут вам сохранить полную секретность</p>
          <img src='../images/security.png'/>
        </div>
        <div>
          <h1>Высокая скорость и надёжность</h1>
          <p>Вы получаете высокую скорость работы и полную надежность</p>
          <img src='../images/chronometer.png'/>
        </div>
        <div>
          <h1>Бесплатно</h1>
          <p>Сервис полностью бесплатный и не имеет каких-либо платных функций</p>
          <img src='../images/free.png'/>
        </div>
        <div>
          <h1>Шифрование текстов и файлов</h1>
          <p>
            Вы с лёгкостью сможете зашифровать содержимое файла или же другого любого текста, для этого мы даём вам на выбор самые популярные
            и надёжные шифры
          </p>
          <img src='../images/document.png'/>
        </div>
        <div>
          <h1>Создание хэш-сумм и цифровых подписей</h1>
          <p>
            Очень простое создание хэш-сумм и цифровых подписей, всё для вас и вашей безопасности
          </p>
          <img src='../images/edit-document.png'/>
        </div>
        <div>
          <h1>Расшифровывание и криптоанализ</h1>
          <p>
            Возможность расшифровывать файлы в нескольких режимах, а также производить взлом некторых шифров
          </p>
          <img src='../images/unlocked.png'/>
        </div>
      </section>
        </div>
    )
}

export default StartPage;