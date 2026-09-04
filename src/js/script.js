const produtos = {
  1: {
    nome: "Balanço Sensorial Vestibular",
    preco: "R$ 499,90",
    descricao: "Auxilia no processamento vestibular e proprioceptivo. Ideal para regulação sensorial, equilíbrio e fortalecimento do tônus muscular.",
    imagem: "src/img/balanco.jpg"
  },
  2: {
    nome: "Massa Terapêutica (Kit)",
    preco: "R$ 89,90",
    descricao: "Indicada para fortalecimento da musculatura intrínseca das mãos, treino de coordenação motora fina e discriminação tátil.",
    imagem: "src/img/massa.jpg"
  },
  3: {
    nome: "Bolas Sensoriais Texturizadas",
    preco: "R$ 65,00",
    descricao: "Estimulam a sensibilidade tátil, a percepção proprioceptiva, o relaxamento e o controle de força de preensão.",
    imagem: "src/img/bolas.jpg"
  },
  4: {
    nome: "Manta Ponderada",
    preco: "R$ 350,00",
    descricao: "Oferece pressão profunda para autorregulação, auxiliando na diminuição da ansiedade, hiperatividade e organização corporal.",
    imagem: "src/img/manta.jpg"
  },
  5: {
    nome: "Prancha de Fechos e AVDs",
    preco: "R$ 120,00",
    descricao: "Desenvolve a autonomia nas Atividades da Vida Diária, treinando o uso funcional de zíperes, botões, travas e cadarços.",
    imagem: "src/img/prancha.jpg"
  },
  6: {
    nome: "Mordedores Sensoriais",
    preco: "R$ 45,00",
    descricao: "Auxiliam na autorregulação oral, reduzindo a ansiedade e a busca sensorial por morder roupas ou objetos.",
    imagem: "src/img/mordedores.jpg"
  }
};

let precoUnitarioBase = 0;

document.addEventListener("DOMContentLoaded", () => {
  const titleElement = document.getElementById("prod-title");

  if (titleElement) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (id && produtos[id]) {
      const prod = produtos[id];
      titleElement.innerText = prod.nome;
      
      precoUnitarioBase = extrairPrecoNumerico(prod.preco);
      
      document.getElementById("prod-desc").innerText = prod.descricao;
      
      const imgElement = document.getElementById("prod-img");
      if (imgElement) {
        imgElement.src = prod.imagem;
        imgElement.alt = prod.nome;
      }

      atualizarPrecoTotal();

      document.title = `${prod.nome} - Sentidos Terapêuticos`;
    } else {
      window.location.href = "index.html";
    }
  }
});

function extrairPrecoNumerico(stringPreco) {
  const limpo = stringPreco
    .replace("R$", "")
    .replace(/\./g, "")
    .replace(",", ".")
    .trim();
  return parseFloat(limpo) || 0;
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function atualizarPrecoTotal() {
  const input = document.getElementById("qtdInput");
  const qtd = input ? parseInt(input.value) || 1 : 1;
  const total = precoUnitarioBase * qtd;

  const priceElement = document.getElementById("prod-price");
  if (priceElement) {
    priceElement.innerText = formatarMoeda(total);
  }
}

function alterarQtd(valor) {
  const input = document.getElementById("qtdInput");
  if (!input) return;

  let atual = parseInt(input.value) || 1;
  atual += valor;
  if (atual < 1) atual = 1;
  input.value = atual;

  atualizarPrecoTotal();
}