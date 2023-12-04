import React from "react";
import { Link } from "react-router-dom";

import BlockChainImg from "../assets/imgs/blockchainImage.png";

export const Home = () => {
  return (
    <div class="container">
      <div className="card">
        <div className="headerContainer">
          <img width="100px" height="100px" src={BlockChainImg} />
          <h1>Blockchain</h1>
        </div>
        <br />
        <div className="form">
          <Link to="/Vendas">
            <button type="button" class="btn btn-secondary">
              Cadastrar Venda
            </button>
          </Link>
          <Link to="/Estoque">
            <button type="button" class="btn btn-secondary">
              Estoque Produtos
            </button>
          </Link>
          <Link to="/Blockchain">
            <button type="button" class="btn btn-secondary">
              Visualizar Blockchain - Histórico
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
