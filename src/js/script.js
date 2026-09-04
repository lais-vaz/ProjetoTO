
const produtos = {
  1: {
    nome: "Balanço Sensorial Vestibular",
    preco: "R$ 499,90",
    descricao: "Auxilia no processamento vestibular e proprioceptivo. Ideal para regulação sensorial, equilíbrio e fortalecimento do tônus muscular.",
    imagem: "https://via.placeholder.com/400x300/e0f2fe/0284c7?text=Balanco+Sensorial"
  },
  2: {
    nome: "Massa Terapêutica (Kit)",
    preco: "R$ 89,90",
    descricao: "Indicada para fortalecimento da musculatura intrínseca das mãos, treino de coordenação motora fina e discriminação tátil.",
    imagem: "https://via.placeholder.com/400x300/fef3c7/d97706?text=Massa+Terapeutica"
  },
  3: {
    nome: "Bolas Sensoriais Texturizadas",
    preco: "R$ 65,00",
    descricao: "Estimulam a sensibilidade tátil, a percepção proprioceptiva, o relaxamento e o controle de força de preensão.",
    imagem: "https://via.placeholder.com/400x300/dcfce7/15803d?text=Bolas+Sensoriais"
  },
  4: {
    nome: "Manta Ponderada",
    preco: "R$ 350,00",
    descricao: "Oferece pressão profunda para autorregulação, auxiliando na diminuição da ansiedade, hiperatividade e organização corporal.",
    imagem: "https://via.placeholder.com/400x300/f3e8ff/7e22ce?text=Manta+Ponderada"
  },
  5: {
    nome: "Prancha de Fechos e AVDs",
    preco: "R$ 120,00",
    descricao: "Desenvolve a autonomia nas Atividades da Vida Diária, treinando o uso funcional de zíperes, botões, travas e cadarços.",
    imagem: "https://via.placeholder.com/400x300/ffe4e6/be123c?text=Prancha+de+Fechos"
  },
  6: {
    nome: "Mordedores Sensoriais",
    preco: "R$ 45,00",
    descricao: "Auxiliam na autorregulação oral, reduzindo a ansiedade e a busca sensorial por morder roupas ou objetos.",
    imagem: "https://via.placeholder.com/400x300/ccfbf1/0f766e?text=Mordedores+Sensoriais"
  }
};


document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id && produtos[id]) {
    const prod = produtos[id];
    document.getElementById("prod-title").innerText = prod.nome;
    document.getElementById("prod-price").innerText = prod.preco;
    document.getElementById("prod-desc").innerText = prod.descricao;
    document.getElementById("prod-img").src = prod.imagem;
    

    document.title = `${prod.nome} - Sentidos Terapêuticos`;
  } else {

    window.location.href = "index.html";
  }
});


function alterarQtd(valor) {
  const input = document.getElementById("qtdInput");
  if (!input) return;

  let atual = parseInt(input.value) || 1;
  atual += valor;
  if (atual < 1) atual = 1;
  input.value = atual;
}