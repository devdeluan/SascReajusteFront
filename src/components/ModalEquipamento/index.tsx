import React from "react";
import "./style.modalequip.css";
import { useState } from "react";
import api from "../../utils/api";
import { useEffect } from "react";
import CardEquipamento from "../CardEquip";

interface Equipamentos {
  id: string;
  modelo: string;
  valor: string;
  data: string;
  tipo_user: string;
}

export default function ModalEquipamento({
  isOpen,
  setModalEquipamentoFechado,
}) {
  const [id, setId] = useState<string>("");
  const [modelo, setModelo] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [data, setData] = useState<any>("");
  const [select, setSelect] = useState<string>(""); // state que contém a opção de tipo de usuario selecionado
  const [fabricante, setFabricante] = useState<string>("");
  const [consumo, setConsumo] = useState<string>("");
  const [equipamentos, setEquipamentos] = useState<Equipamentos[]>([]);

  // verificar o que tem dentro do input de arquivo
  // pega tudo que acontece dentro de algo ex: input

  function cadastrarEquipamento(event: any) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("id", id); //
    formData.append("modelo", modelo);
    formData.append("valor", valor);
    formData.append("data", data);
    formData.append("tipo_user", select);
    formData.append("fabricante", fabricante);
    formData.append("consumo", consumo);

    api
      .post("equipamentos", formData)
      .then((response) => {
        console.log(response);
        alert("Equipamento cadastrado com sucesso!");
        // Navegaçao para login // catch serve para pegar o erro
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Algo está errado, por favor verifique se os campos foram preenchidos corretamente e tente novamente!"
        );
      });

    const novoEquipamento: Equipamentos = {
      id: id,
      modelo: modelo,
      valor: valor,
      data: data,
      tipo_user: select,
    };

    setEquipamentos([...equipamentos, novoEquipamento]);
  }

  if (isOpen) {
    return (
      <main className="main_cadastro" id="modalequip">
        <div className="container_cad">
          <div className="cad_conteudo">
            <div className="botaoFechar" onClick={setModalEquipamentoFechado}>
              X
            </div>
            <h1>Cadastro de Equipamento</h1>
            <form
              onSubmit={cadastrarEquipamento}
              className="cad_formulario"
              method="POST"
            >
              <div className="cad_box_input">
                <label htmlFor="id">Id:</label>
                <input
                  type="text"
                  id="id"
                  onChange={(event) => {
                    setId(event.target.value);
                  }} // pega o valor digitado e coloca como um valor
                  placeholder="Digite aqui o id:"
                  required
                />
              </div>
              <div className="cad_box_input">
                <label htmlFor="modelo">Modelo:</label>
                <input
                  type="text"
                  id="modelo"
                  onChange={(event) => {
                    setModelo(event.target.value);
                  }}
                  placeholder="Digite aqui o Modelo:"
                  required
                />
              </div>
              <div className="cad_box_input">
                <label htmlFor="valor">Valor:</label>
                <input
                  type="text"
                  id="valor"
                  onChange={(event) => {
                    setValor(event.target.value);
                  }}
                  placeholder="Digite aqui o valor:"
                  required
                />
              </div>

              <div className="cad_box_input">
                <label htmlFor="data">Data:</label>
                <input
                  type="text"
                  id="data"
                  onChange={(event) => {
                    setData(event.target.value);
                  }}
                  placeholder="Digite aqui a data:"
                  required
                />
              </div>

              <div className="cad_box_input">
                <label htmlFor="fabricante">Fabricante:</label>
                <input
                  type="text"
                  id="fabricante"
                  onChange={(event) => {
                    setFabricante(event.target.value);
                  }}
                  placeholder="Digite aqui o fabricante:"
                  required
                />
              </div>

              <div className="cad_box_input">
                <label htmlFor="consumo">Consumo:</label>
                <input
                  type="text"
                  id="consumo"
                  onChange={(event) => {
                    setConsumo(event.target.value);
                  }}
                  placeholder="Digite aqui o consumo:"
                  required
                />
              </div>

              <div className="cad_linha_select">
                <label htmlFor="categoria">Tipo de Categoria:</label>
                <select
                  name=""
                  id="cad_select_skill"
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option selected disabled value="">
                    Selecione
                  </option>
                  <option value="categoria">Categoria1</option>
                  <option value="categoria">Categoria2</option>
                  <option value="categoria">Categoria3</option>
                </select>
              </div>

              <a className="cad_box_input">
                <button className="botao_cadastrar"onClick={() => CardEquipamento(true)}>Cadastrar</button>
              </a>
            </form>
          </div>
        </div>
      </main>
    );
  }
  return null;
}
