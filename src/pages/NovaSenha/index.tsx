import "./style.newpass.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Design_sem_nome-removebg-preview.png";
import Fundo from "../../assets/img/img_fundo-removebg-preview.png";

export default function NovaSenha() {
  return (
    <>
      <div id="novasenha">
        <header>
          <div className="cabecalho">
            <img src={Logo} alt="logo" />
            <label onclick="claroEscuro()">
              <input type="checkbox" id="checkbox" className="checkbox" />
              <span id="checkbox2">
                <i />
              </span>
            </label>
          </div>
        </header>
        <main>
          <section className="esquerdinha">
            <div className="pagina_esquerda">
              <Link className="return" to="/login">
                {" "}
                &lt;
              </Link>
              <h2>Esqueceu a Senha ?</h2>
              <p className="texto">
                Insira a sua nova senha, repita sua senha e confirme para
                finalizar.
              </p>
              <input
                className="caixa_1"
                type="password"
                placeholder="n o v a   s e n h a"
              />
              <input
                className="caixa_2"
                type="password"
                placeholder="c o n f i r m e   a   s e n h a"
              />
              <Link className="confmSenha1" to="/login">
                <button className="confmSenha2">Avançar</button>
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
      </div>
    </>
  );
}
