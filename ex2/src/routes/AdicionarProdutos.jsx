import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";

export default function AdicionarProduto() {
  document.title = "Adicionar Produto";

  const navigate = useNavigate();

  const [produto, setProduto] = useState({
    id: "",
    nome: "",
    desc: "",
    valor: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gerar um novo ID para o produto (por exemplo, com base no comprimento da lista)
    const novoId = ListaProdutos.length + 1;

    const novoProduto = {
      id: novoId,
      nome: produto.nome,
      desc: produto.desc,
      valor: produto.valor,
    };

    // Adicionar o novo produto à lista de produtos existente
    ListaProdutos.push(novoProduto);

    // Redirecionar de volta para a página de produtos
    navigate("/produtos");
  };

  return (
    <div>
      <h1>ADICIONAR PRODUTO</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>NOVO PRODUTO</legend>
            <div>
              <div>
                <label htmlFor="idNome">Nome do Produto:</label>
                <input
                  type="text"
                  name="nome"
                  id="idNome"
                  value={produto.nome}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="idDesc">Descrição do Produto:</label>
                <input
                  type="text"
                  name="desc"
                  id="idDesc"
                  value={produto.desc}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="idValor">Valor do Produto:</label>
                <input
                  type="text"
                  name="valor"
                  id="idValor"
                  value={produto.valor}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button>ADICIONAR</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
