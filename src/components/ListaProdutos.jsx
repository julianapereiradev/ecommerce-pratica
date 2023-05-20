import CardProduto from "./CardProduto";
import styled from "styled-components";

export default function ListaProdutos(props) {
  const { produtos, carrinho, setCarrinho } = props;
  // console.log('props.produtos em ListaProdutos', props.produtos)

  // console.log('Dentro de ListaProduto tem carrinho:', carrinho)

  return (
    <ContainerListaProdutos>
      {produtos.map((prod) => (
        <CardProduto 
        produto={prod} 
        key={prod.id} 
        carrinho={carrinho}
        setCarrinho={setCarrinho}
        />
      ))}
    </ContainerListaProdutos>
  );
}

const ContainerListaProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
