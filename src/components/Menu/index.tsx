import "./style.menu.css";
import { IoMdSettings } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { IoMdExit } from "react-icons/io";
import { IoMdDesktop } from "react-icons/io";
import { IoMdStats } from "react-icons/io";
import { IoMdCube } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";
import logo from "../../assets/img/Design_sem_nome-removebg-preview.png";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../../pages/Home";

import { Link, useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
import * as React from "react";

function Menu() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const equipamento = () => {
    navigate("/equipamento");
  };

  return (
    <>
      <main id="menuSasc">
        <section className="menu">
          <nav className="menu_lateral">
            <div className="btn_expandir">
              <img className="header_logo" src={logo} alt="" />
              <span className=" visaoGeral">
                {" "}
                <i className="size2"> S A S C</i>{" "}
              </span>
            </div>

            <div className="menu_conteudo">
              <ul>
                <div className="item_menu">
                  <li className="espaco2">
                    <Link to="/">
                      <span className="icon size1 visaoGeral">
                        <IoMdCalendar />
                      </span>
                      <span className="txt_link size1">Visão Geral</span>
                    </Link>
                  </li>

                  <li className="pagAtual espaco2">
                    <Link to="/equipamento">
                      <span className="icon size1 IconAtual">
                        <IoMdDesktop />
                      </span>
                      <span className="txt_link size1">Equipamentos</span>
                    </Link>
                  </li>

                  <li className="espaco2">
                    <Link to="/dashboardfiltro">
                      <span className="icon size1">
                        <IoMdStats />
                      </span>
                      <span className="txt_link size1">Dashboards</span>
                    </Link>
                  </li>

                  <li className="espaco2">
                    <Link to="/novousuario">
                      <span className="icon size1">
                        <IoMdContact />
                      </span>
                      <span className="txt_link size1">Usuários</span>
                    </Link>
                  </li>

                  <li className="espaco2">
                    <Link to="/configuracoes">
                      <span className="icon size1">
                        <IoMdSettings />
                      </span>
                      <span className="txt_link size1">Configurações</span>
                    </Link>
                  </li>
                </div>

                <li className="espaco2 btnSair ">
                  {/* <button onClick={login}> */}
                  <Link to="/login">
                    <span className="icon size1">
                      <IoMdExit />
                    </span>
                    <span className="txt_link size1">Sair</span>
                  </Link>
                  {/* </button> */}
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </main>
    </>
  );
}
export default Menu;
