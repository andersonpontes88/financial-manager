//cSpell:disable
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const ListaTransacoes = ({ transacoes, removerTransacao, formatarData }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mt-6">
      <h2 className="text-xl font-bold mb-4">Histórico de Transações</h2>
      <ul className="divide-y divide-gray-200">
        <AnimatePresence>
          {transacoes.map((transacao, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className={`flex justify-between items-center p-3 rounded-md ${
                transacao.tipo === "receita" ? "text-green-500" : "text-red-500"
              }`}
            >
              <div>
                <span className="font-medium">{transacao.descricao}</span>
                <p className="text-sm text-gray-600">
                  {formatarData(transacao.data)}
                </p>
                <span className="ml-4 font-semibold">
                  R$ {transacao.valor.toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => removerTransacao(index)} // Chama funçao de remover
                className="bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-600"
              >
                Remover
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

ListaTransacoes.propTypes = {
  transacoes: PropTypes.arrayOf(
    PropTypes.shape({
      descricao: PropTypes.string.isRequired,
      valor: PropTypes.number.isRequired,
      tipo: PropTypes.string.isRequired,
    })
  ).isRequired,
  removerTransacao: PropTypes.func,
  formatarData: PropTypes.func,
};

export default ListaTransacoes;
