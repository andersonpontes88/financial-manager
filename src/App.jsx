// cSpell:disable
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ResumoFinanceiro from "./components/ResumoFinanceiro";
import FormularioTransacao from "./components/FormularioTransacao";
import ListaTransacoes from "./components/ListaTransacoes";

function App() {
  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    const transacoesSalvas =
      JSON.parse(localStorage.getItem("transacoes")) || [];
    setTransacoes(transacoesSalvas);

    const totais = transacoesSalvas.reduce(
      (acc, transacao) => {
        if (transacao.tipo === "receita") {
          acc.receitas += transacao.valor;
        } else {
          acc.despesas += transacao.valor;
        }
        return acc;
      },
      { receitas: 0, despesas: 0 }
    );

    setReceitas(totais.receitas);
    setDespesas(totais.despesas);
  }, []);

  const handleAdicionarTransacao = (transacao) => {
    const transacaoComData = {
      ...transacao,
      data: new Date().toISOString(),
    };

    const novasTransacoes = [...transacoes, transacaoComData];
    setTransacoes(novasTransacoes);
    localStorage.setItem("transacoes", JSON.stringify(novasTransacoes));

    if (transacao.tipo === "receita") {
      setReceitas((prev) => prev + transacao.valor);
    } else {
      setDespesas((prev) => prev + transacao.valor);
    }
  };

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString("pt-BR");
  };

  const removerTransacao = (index) => {
    const transacaoRemovida = transacoes[index];
    const novasTransacoes = transacoes.filter((_, i) => i !== index);

    setTransacoes(novasTransacoes);
    localStorage.setItem("transacoes", JSON.stringify(novasTransacoes));

    if (transacaoRemovida.tipo === "receita") {
      setReceitas((prev) => prev - transacaoRemovida.valor);
    } else {
      setDespesas((prev) => prev - transacaoRemovida.valor);
    }
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 space-y-6">
        <h2 className="text-2xl font-medium">
          Bem-Vindo ao Gerenciador Financeiro
        </h2>
        <ResumoFinanceiro receitas={receitas} despesas={despesas} />
        <FormularioTransacao onAdicionarTransacao={handleAdicionarTransacao} />
        <ListaTransacoes
          transacoes={transacoes}
          removerTransacao={removerTransacao}
          formatarData={formatarData}
        />
      </main>
    </div>
  );
}

export default App;
