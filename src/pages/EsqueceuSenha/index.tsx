import "./style.forgetpass.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Design_sem_nome-removebg-preview.png";
import Fundo from "../../assets/img/img_fundo-removebg-preview.png";

export default function EsqueceuSenha() {
  return (
    <>
      <div id="forgetpass">
        <header id="headlogin">
          <div className="cabecalho">
            <img src={Logo} alt="logo" />
            <label onClick="claroEscuro()">
              <input type="checkbox" id="checkbox" className="checkbox" />
              <span id="checkbox2">
                <i />
              </span>
            </label>
          </div>
        </header>
        <main id="esqueceusenha">
          <section className="esquerdinha">
            <div className="pagina_esquerda">
              <Link className="return" to="/login">
                {" "}
                &lt;
              </Link>
              <h2>Esqueceu a Senha ?</h2>
              <p className="texto">
                Informe o e-mail, número de celular ou nome de usuário associado
                à sua conta para alterar sua senha.
              </p>
              <input
                className="caixa_1"
                type="text"
                placeholder="U s u á r i o"
              />

              <button>
                <Link to="/novasenha" className="linkavanca">
                  Avançar
                </Link>
              </button>
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
      </div>
    </>
  );
}
