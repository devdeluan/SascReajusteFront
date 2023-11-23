import "./style.css";

export default function CardUsuario(props: any) {
  function parseListaUsuario() {
    if (typeof props.id === "string") {
      return JSON.parse(props.id);
    } else {
      return props.id;
    }
  }

  return (
    <>
      <div id="cardequip">
        <tbody>
          <tr className="linhaTabela">
            <td>{props.id}</td>
            <td>{props.nome}</td>
            <td>{props.email}</td>
            <td>{props.tipo_user}</td>
          </tr>
        </tbody>
      </div>
    </>
  );
}
