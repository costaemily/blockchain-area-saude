import { Link } from "react-router-dom";
import { getEstoque } from "../controllers/VendasController";

export const Estoque = () => {

  const formatarDadosEstoque = () => {
    const dadosEstoque = [];

    const data = getEstoque();
    data.forEach((produto, chave) => {
      dadosEstoque.push({ key: chave, value: produto });
    });
    return dadosEstoque;
  }
  
  const formattedEstoque = formatarDadosEstoque();

  return (
    <div className="container">
      <div className="card">
        <h2>Estoque de Produtos</h2>
        <div style={{display: "flex", flexDirection: 'column', alignItems: "center"}}>
          {formattedEstoque.map((item) => {
            return (
              <div
                key={item.key}
                style={{ display: "flex", gap: "32px", marginTop: "24px" }}
              >
                <label style={{ fontWeight: "bolder" }}>{item.key}: </label>
                <label>{item.value}</label>
              </div>
            );
          })}
        </div>
        <div className="button-exit">
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
