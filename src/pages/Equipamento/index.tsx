import CardEquipamento from "../../components/CardEquip";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import "./style.equip.css";
import search from "../../assets/img/search.png";
import Modal from "../../components/ModalEquipamento";

interface DeleteButtonProps {
  id: number;
  onDelete: () => void;
}

export default Equipamento;

function Equipamento() {
  const [equip, setEquip] = useState<any[]>([]);

  //state filtros com os filtros definidos
  const [filtros, setFiltros] = useState<string[]>([
    "ID",
    "MODELO",
    "VALOR",
    "DATA",
    "CONSUMO",
    "FABRICANTE",
  ]);

  const [select, setSelect] = useState<string>(""); // state que contém a opção de filtro selecionado pelo usuário

  const [filtroDigitado, setfiltroDigitado] = useState<string>("");

  const [listaBuscaFiltrado, setlistaBuscaFiltrado] = useState<any[]>(equip);

  const [modalEquipamentoAberto, setModalEquipamentoAberto] = useState(false);

  useEffect(() => {
    document.title = "Lista de Equipamentos";

    listarEquipamentos();
  }, []);

  function buscarPor(event: any) {
    event.preventDefault();

    console.log(select);
    console.log(equip);
    console.log(filtroDigitado);

    let equipFiltrados = [];

    if (select == "ID") {
      equipFiltrados = equip.filter((eq: any) =>
        eq.id.toString().includes(filtroDigitado.toLocaleUpperCase())
      );
    } else if (select == "MODELO") {
      equipFiltrados = equip.filter((eq: any) =>
        eq.modelo.includes(filtroDigitado.toLocaleUpperCase())
      );
    } else if (select == "FABRICANTE") {
      equipFiltrados = equip.filter((eq: any) =>
        eq.fabricante
          .toLocaleUpperCase()
          .includes(filtroDigitado.toLocaleUpperCase())
      );
    } else if (select == "DATA") {
      equipFiltrados = equip.filter((eq: any) =>
        eq.data.includes(filtroDigitado.toLocaleUpperCase())
      );
    } else if (select == "CONSUMO") {
      equipFiltrados = equip.filter((eq: any) =>
        eq.consumo.includes(filtroDigitado.toLocaleUpperCase())
      );
    } else if (select == "VALOR") {
      equipFiltrados = equip.filter((eq: any) =>
        eq.valor.includes(filtroDigitado.toLocaleUpperCase())
      );
    }

    console.log(equipFiltrados);

    if (equipFiltrados.length === 0) {
      alert("Nenhum resultado encontrado!!");
    } else {
      setlistaBuscaFiltrado(equipFiltrados);
    }
  }

  function retornoEquipGeral(event: any) {
    if (event.target.value === "") {
      setlistaBuscaFiltrado(equip);
    }
    setfiltroDigitado(event.target.value);
  }

  function listarEquipamentos() {
    api.get("equipamentos").then((resposta: any) => {
      console.log(resposta.data);
      setEquip(resposta.data);
    });
  }

  function alternarCoresTabela() {
    let linhas = document.getElementsByTagName("tr"); // Obtém todas as linhas da tabela

    for (let i = 1; i < linhas.length; i++) {
      if (i % 2 === 0) {
        // Se o índice da linha for par
        linhas[i].style.backgroundColor = "#dceee8 "; // Define a cor de fundo como branco
      } else {
        // Se o índice da linha for ímpar
        linhas[i].style.backgroundColor = "#01b574"; // Define a cor de fundo como verde
      }

      // Verifica se a linha possui a classe "tabelaEquip"
      if (linhas[i].classList.contains("tabelaEquip")) {
        linhas[i].style.backgroundColor = "white"; // usa a cor desejada
      }
    }
  }

  alternarCoresTabela();

  return (
    <>
      <div id="divequip">
        <main>
          <section className="equipamentos">
            <div className="painelEqpm">
              <form method="post" onSubmit={buscarPor}>
                <section className="table__header">
                  <h1>Lista de equipamentos</h1>
                  <select
                    defaultValue={"DEFAULT"}
                    name=""
                    id="cad_select_skill"
                    onChange={(e) => setSelect(e.target.value)}
                  >
                    <option selected value="DEFAULT" disabled>
                      Selecione
                    </option>
                    {filtros.map((equip: any, index: number) => {
                      return (
                        <option key={index} value={equip}>
                          {equip}
                        </option>
                      );
                    })}
                  </select>

                  <div className="input-group">
                    <input
                      type="search"
                      placeholder="Procurar "
                      onChange={retornoEquipGeral}
                    />
                    <button className="pesquisar" type="submit">
                      <img src={search} alt="" />
                    </button>
                  </div>
                </section>
              </form>

              <div className="menu2Bbtn">
                <a className="">
                  <button className="btnNovoEqpm" onClick={() => setModalEquipamentoAberto(true)}>
                    + Novo Equipamento
                  </button>
                  <Modal
                    isOpen={modalEquipamentoAberto}
                    setModalEquipamentoFechado={() =>
                      setModalEquipamentoAberto(!setModalEquipamentoAberto)
                    }
                  />
                </a>
              </div>
              <table className="tabelaEqpm">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Data</th>
                    <th scope="col">Consumo</th>
                    <th scope="col">Fabricante</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tabelaEquip">
                    {listaBuscaFiltrado.length === 0
                      ? equip.map((equip: any, index: number) => {
                          return (
                            <td key={index}>
                              <CardEquipamento
                                id={equip.id}
                                modelo={equip.modelo}
                                fabricante={equip.fabricante}
                                data={equip.data}
                                consumo={equip.consumo}
                                valor={equip.valor}
                              />
                            </td>
                          );
                        })
                      : listaBuscaFiltrado.map((equip: any, index: number) => {
                          return (
                            <td key={index}>
                              <CardEquipamento
                                id={equip.id}
                                modelo={equip.modelo}
                                fabricante={equip.fabricante}
                                data={equip.data}
                                consumo={equip.consumo}
                                valor={equip.valor}
                              />
                            </td>
                          );
                        })}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
