var jogadores = [
    { nome: "João", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
    { nome: "Pedro", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
    { nome: "Luffy", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 },
    { nome: "Sora", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
  ];
  
  mostrarJogadores(jogadores);
  
  function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
  }
  
  function mostrarJogadores(jogadores) {
    jogadores.sort(
      (ordenar = (a, b) => {
        return b.pontos - a.pontos;
      })
    );
    var elemento = "";
    for (let i = 0; i < jogadores.length; i++) {
      elemento += "<tr><td class='colunaNome'>" + jogadores[i].nome + "</td>";
      elemento +=
        "<td title='Vitória = 3 Pontos'>" + jogadores[i].vitorias + "</td>";
      elemento +=
        "<td title='Empate = 1 Ponto'>" + jogadores[i].empates + "</td>";
      elemento += "<td>" + jogadores[i].derrotas + "</td>";
      elemento += "<td>" + jogadores[i].pontos + "</td>";
      elemento +=
        "<td><button class='botaoVitoria' onClick='adicionarVitoria(" +
        i +
        ")'>Vitória</button></td>";
      elemento +=
        "<td><button class='botaoExcluir' onClick='excluirJogador(" +
        i +
        ")'>Excluir</button></td>";
      if (i == 0) {
        elemento +=
          "<td class = 'botoesAcao' rowspan='" +
          jogadores.length +
          "'><button class = 'empate' onClick='adicionarEmpate()'>Empate</button><br><button title='Apagar todos os pontos' class = 'zerar' onclick='zerarTabela()'> Zerar</button><br><button title='Apagar TODOS OS DADOS' class = 'zerarTable' onclick='zerarPlayers()'>Limpar</button></td></tr>";
      }
    }
    document.getElementById("tabelaJogadores").innerHTML = elemento;
  }
  
  function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    //   outros jogadores = 0 pts;
    for (
      var outrosJogadores = 0;
      outrosJogadores < jogadores.length;
      outrosJogadores++
    ) {
      if (i != outrosJogadores) {
        jogadores[outrosJogadores].derrotas++;
      }
    }
    jogador.pontos = calculaPontos(jogador);
    mostrarJogadores(jogadores);
  }
  
  function adicionarEmpate(i) {
    for (let i = 0; i < jogadores.length; i++) {
      var jogador = jogadores[i];
      jogador.empates++;
      jogador.pontos = calculaPontos(jogador);
    }
    mostrarJogadores(jogadores);
  }
  
  function zerarTabela(i) {
    if (
      confirm("Tem certeza que quer remover a pontuação de todos os jogadores?")
    ) {
      for (var i = 0; i < jogadores.length; i++) {
        var jogador = jogadores[i];
        jogador.vitorias = 0;
        jogador.empates = 0;
        jogador.derrotas = 0;
        jogador.pontos = 0;
      }
      alert("Pontuação removida com sucesso!");
    } else {
      alert("Operação cancelada! Os pontos foram mantidos!");
    }
    mostrarJogadores(jogadores);
  }
  
  function zerarPlayers(i) {
    if (confirm("Aviso: Isso excluirá todos os jogadores da tabela")) {
      jogadores.splice(i);
      alert("Jogadores removidos com sucesso!");
    } else {
      alert("Operação cancelada! Os jogadores foram mantidos!");
    }
    mostrarJogadores(jogadores);
  }
  
  function novoJogador() {
    var jogador = {
      nome: document.getElementById("nomeJogador").value,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
  
    if (jogador.nome.length <= 0) {
      alert("Insira um Nome!");
    } else {
      jogadores.push(jogador);
    }
    mostrarJogadores(jogadores);
  }
  
  excluirJogador = (i) => {
    jogadores.splice(i, 1);
    mostrarJogadores(jogadores);
  }; //Ex de ArrowFunction
  