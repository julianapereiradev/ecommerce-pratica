import styled from "styled-components";

export default function CardProduto(props) {
  // console.log("props em CardProduto", props.produto);

  const { imagem, nome, preco } = props.produto;

  return (
    <ItemProduto>
      <img src={imagem} />
      <div>
        <p>{nome}</p>
        <p>{preco}</p>
      </div>
      <button>Comprar</button>
    </ItemProduto>
  );
}

const ItemProduto = styled.div`
  border: 1px solid black;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  img {
    width: 200px;
    height: 200px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
`;
