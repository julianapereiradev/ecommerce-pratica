import styled from "styled-components";

export default function CardProduto(props) {
  // console.log("props em CardProduto", props.produto);

  const { imagem, nome, preco } = props.produto;
  const { carrinho, setCarrinho } = props

  function adicionarProduto(prod) {
    //Caso o item já esteja no carrinho, nada deverá acontecer (dicas 🙂).
    const estaJaAdicionado = carrinho.some((p) => p.id === prod.id); //some retorna em true ou false
    
    //Caso o item não esteja no carrinho, deverá ser adicionado.
    if(!estaJaAdicionado) {
      const novoCarrinho = [...carrinho, prod]
     setCarrinho(novoCarrinho)
    }

    console.log("prod.nome da function adicionarProduto:", prod.nome);
  }

  return (
    <ItemProduto>
      <img src={imagem} />
      <div>
        <p>{nome}</p>
        <p>{preco}</p>
      </div>
      <button onClick={() => adicionarProduto(props.produto)}>Comprar</button>
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
