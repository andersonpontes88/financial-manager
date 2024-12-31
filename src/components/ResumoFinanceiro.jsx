// cSpell:disable
import PropTypes from "prop-types";

const ResumoFinanceiro = ({ receitas, despesas }) => {
  const saldo = receitas - despesas;

  return (
    <div className="bg-white shadow-md rounded-md p-6 grid grid-cols-3 gap-6">
      <div className="text-center">
        <h2 className="text-lg font-bold text-gray-700">Receitas</h2>
        <p className="text-2xl font-semibold text-blue-500">
          R$ {receitas.toFixed(2)}
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-bold text-gray-700">Despesas</h2>
        <p className="text-2xl font-semibold text-red-500">
          R$ {despesas.toFixed(2)}
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-bold text-gray-700">Saldo</h2>
        <p
          className={`text-2xl font-semibold ${
            saldo >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          R$ {saldo.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

ResumoFinanceiro.propTypes = {
  receitas: PropTypes.number.isRequired,
  despesas: PropTypes.number.isRequired,
};

export default ResumoFinanceiro;
