import React from "react";
import "./style.modal.css";
import { useState } from "react";
import api from "../../utils/api";
import { useEffect } from "react";
import camera from "../../assets/img/camera.png";

export default function Modal({ isOpen, setModalFechado }) {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [foto, setFoto] = useState<any>("");
  const [select, setSelect] = useState<string>(""); // state que contém a opção de tipo de usuario selecionado

  // verificar o que tem dentro do input de arquivo
  // pega tudo que acontece dentro de algo ex: input

  function verificarCampoUpload(event: any) {
    setFoto(event.target.files[0]);
  }

  function cadastrarUsuario(event: any) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("nome", nome); //
    formData.append("email", email);
    formData.append("password", senha);
    formData.append("user_img", foto);
    formData.append("tipo_user", select);

    api
      .post("users", formData)
      .then((response) => {
        console.log(response);
        alert("Usuario cadastrado com sucesso!");
        // Navegaçao para login // catch serve para pegar o erro
      })
      .catch((error) => {
        console.log(error);
        alert("Algo está errado");
      });
  }

  if (isOpen) {
    return (
      <main className="main_cadastro" id="modal">
        <div className="container_cad">
          <div className="cad_conteudo">
            <div className="botaoFechar" onClick={setModalFechado}>
              X
            </div>
            <h1>Cadastro</h1>
            <form
              onSubmit={cadastrarUsuario}
              className="cad_formulario"
              method="POST"
            >
              <div className="cad_box_input">
                <label htmlFor="nome">Nome Completo:</label>
                <input
                  type="text"
                  id="nome"
                  onChange={(event) => {
                    setNome(event.target.value);
                  }} // pega o valor digitado e coloca como um valor
                  placeholder="Digite aqui seu nome:"
                  required
                />
              </div>
              <div className="cad_box_input">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  placeholder="Digite aqui seu e-mail:"
                  required
                />
              </div>
              <div className="cad_box_input">
                <label htmlFor="senha">Senha:</label>
                <input
                  type="password"
                  id="senha"
                  onChange={(event) => {
                    setSenha(event.target.value);
                  }}
                  placeholder="Digite aqui sua senha:"
                  required
                />
              </div>
              <div className="cad_linha_select">
                <label htmlFor="foto">Tipo de usuario:</label>
                <select
                  name=""
                  id="cad_select_skill"
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option selected disabled value="">
                    Selecione
                  </option>
                  <option value="admin">Administrador</option>
                  <option value="comum">Comum</option>
                </select>
              </div>

              <div className="cad_box_input">
                {/* Passar primeiro como exemplo */}
                <input
                  value="Cadastrar"
                  className="enviarCadastro"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
  return null;
}
