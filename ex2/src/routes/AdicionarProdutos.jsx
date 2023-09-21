import { useState } from "react";
import { ListaProdutos } from "../components/ListaProdutos";
import { useNavigate} from "react-router-dom";

export default function AdicionarProdutos() {
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    desc: "",
    valor: 0,
  });


  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setNovoProduto((novoProduto) => ({
      ...novoProduto,
      [name]: value,
    }));
  };

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const setNovoProduto = {
      ...novoProduto,
      id: ListaProdutos.length + 1, 
    };

    ListaProdutos.push(setNovoProduto)

    navigate("/produtos");
  };

  

  return (
    <div>
      <h2>Adicionar Produto</h2>
      <div>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={novoProduto.nome}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="desc"
          placeholder="Descrição"
          value={novoProduto.desc}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="valor"
          placeholder="Valor"
          value={novoProduto.valor}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Adicionar</button>
      </div>
    </div>
  );
}