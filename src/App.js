import nameIcon from'./images/name-icon.png';
import emailIcon from'./images/email-icon.png';
import passwordIcon from'./images/password-icon.png';
import './App.css';

function Fields({url, alt, type, text, length}){
  return (
    <label className="container-input">
      <img src={url} alt={alt}></img>
      <input type={type} placeholder={text} maxlength={length}></input>
    </label>
  );
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="container-accessAccount">
          <h1 className="text-welcome">Bem - vindo de volta</h1>
          <p>Acesse sua conta agora</p>
          <button className="btn-login">ENTRAR</button>
        </div>
        <div className="container-createAccount">
          <h1 className="text-createAccount">CRIA SUA CONTA</h1>

          <form>
            <Fields
              url={nameIcon}
              alt={"avatar"}
              type={"text"}
              text={"NOME"}
              length={24}
            />
            <Fields
              url={emailIcon}
              alt={"email"}
              type={"text"}
              text={"EMAIL"}
              length={24}
            />
            <Fields
              url={passwordIcon}
              alt={"senha"}
              type={"password"}
              text={"SENHA"}
              length={24}
            />
          </form>

          <button className="btn-register">CADASTRAR</button>
        </div>
      </main>
    </div>
  );
}

export default App;
