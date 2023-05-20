import CardCarrinho from "./CardCarrinho";
import styled from "styled-components";

export default function Carrinho(props) {
  const { carrinho, setCarrinho } = props;
  // console.log("Dentro de Carrinho tem carrinho:", carrinho);

  return (
    <ContainerCarrinho>
      {carrinho.map((prod) => (
        <CardCarrinho key={prod.id} produto={prod} />
      ))}
    </ContainerCarrinho>
  );
}

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
`;
