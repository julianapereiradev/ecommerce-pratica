import styled from "styled-components";
import ListaProdutos from "./components/ListaProdutos";
import Carrinho from "./components/Carrinho";
import PRODUTOS from "./mock";
import { useState } from "react";

export default function App() {
  const [carrinho, setCarrinho] = useState([...PRODUTOS]);

  return (
    <ContainerApp>
      <ListaProdutos
        produtos={PRODUTOS}
        carrinho={carrinho}
        setCarrinho={setCarrinho}
      />
      <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} />
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;