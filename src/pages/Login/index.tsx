import "./style.login.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Design_sem_nome-removebg-preview.png";
import Fundo from "../../assets/img/img_fundo-removebg-preview.png";

export default function Login() {
  return (
    <>
      <div className="cabecalho">
        <img src={Logo} alt="logo" />
        <label onClick="claroEscuro()" id="labellogin">
          <input type="checkbox" id="checkbox" className="checkbox" />
          <span id="checkbox2">
            <i />
          </span>
        </label>
      </div>
      <main id="login">
        <section className="esquerdinha">
          <div className="pagina_esquerda" id="pagina_esquerda">
            <h2>Bem Vindo !</h2>
            <p className="texto" id="texto">
              O cliente está muito feliz. Não há nada a ganhar, mas acontecerá
              que aqueles que são preparados pelo trabalho e aqueles que gostam
              das coisas as receberão de acordo.
            </p>
            <input
              className="inputPag"
              id="inputPag"
              type="text"
              placeholder="U s u á r i o"
            />
            <input
              className="inputPag"
              id="inputPag2"
              type="password"
              placeholder="s  e  n  h  a"
            />
            <Link to="/esqueceusenha">Esqueceu Senha?</Link>
            <Link className="btnAvan1" to="/">
              <button className="btnEsq" id="btnEsq">
                Conecte-se
              </button>
            </Link>
          </div>
        </section>
        <section className="ladoDireito">
          <div className="pagina_direita">
            <p className="pagina_direita_texto">
              Economize energia
              <br />
              reduza emissões GEE,
              <br />
              conecte-se com o <br />
              futuro sustentável.
            </p>
            <img src={Fundo} alt="img_fundo" />
          </div>
        </section>
      </main>
    </>
  );
}
