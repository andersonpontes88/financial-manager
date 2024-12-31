// cSpell:disable
import { useState } from "react";
import PropTypes from "prop-types";

const FormularioTransacao = ({ onAdicionarTransacao }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("receita");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação básica
    if (!descricao || !valor) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Enviar os dados para o componente pai
    onAdicionarTransacao({
      descricao,
      valor: parseFloat(valor),
      tipo,
    });

    // Resetar o formulário
    setDescricao("");
    setValor("");
    setTipo("receita");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-md p-6 mt-6 space-y-4"
    >
      <h2 className="text-xl font-bold text-blue-600">Adicionar Transação</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Descrição</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: Salário, Compra no mercado..."
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Valor</label>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outiline focus:ring-2 focus:ring-blue-500"
          placeholder="Ex: 100.00"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Tipo</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="receita">Receita</option>
          <option value="despesa">Despesa</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Adicionar
      </button>
    </form>
  );
};

FormularioTransacao.propTypes = {
  onAdicionarTransacao: PropTypes.func.isRequired,
};

export default FormularioTransacao;
