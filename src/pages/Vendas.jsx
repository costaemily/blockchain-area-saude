import { Link } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
import {
  adicionarTransacao,
  getEstoque,
} from "../controllers/VendasController";

let blockchain = localStorage.getItem("blockchain");

export const Vendas = () => {
  const [selectItem, setSelectItem] = useState({ value: "", label: "" });
  const [quantidade, setQuantidade] = useState(0);
  const [valor, setValor] = useState(0);

  const getOptions = () => {
    const listProds = [];

    const qtdProd = getEstoque();
    qtdProd.forEach((prod, key) => {
      listProds.push({ value: key, label: key });
    });
    return listProds;
  };

  const options = getOptions();

  const verifyFieldsFilled = () => {
    if (!selectItem.label) {
      alert("Selecione um item para vender.");
      return false;
    }
    if (!quantidade) {
      alert("Digite a quanridade do item para vender.");
      return false;
    }
    return true;
  };

  const handleButtonClick = async () => {
    if (verifyFieldsFilled()) {
      blockchain = adicionarTransacao(selectItem.label, quantidade, valor);
    }
    localStorage.setItem("blockchain", JSON.stringify(blockchain, null, 2));
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Cadastrar Venda</h2>
        <div className="form">
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <label>Item: </label>
            <Select
              options={options}
              value={selectItem}
              onChange={setSelectItem}
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              alignItems: "center",
            }}
          >
            <div>
              <label>Quantidade: </label>
              <input
                placeholder="Quantidade"
                id="quantidade"
                type="number"
                value={quantidade}
                onChange={(event) => setQuantidade(event.target.value)}
              />
            </div>
            <div>
              <label>Valor: </label>
              <input
                placeholder="Valor"
                id="valor"
                type="number"
                value={valor}
                onChange={(event) => setValor(event.target.value)}
              />
            </div>
          </div>
          <br />
          <button onClick={handleButtonClick}>Registrar Venda</button>
          <label>Blockchain - Histórico</label>
          <br />
          <textarea
            id="blockchain"
            placeholder="O Blockchain (histórico) irá aparecer aqui ao final da transação"
            value={localStorage.getItem(
              "blockchain",
              JSON.stringify(blockchain, null, 2)
            )}
            disabled
          />
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
