
# Sentidos Terapêuticos - Catálogo de Terapia Ocupacional

O **Sentidos Terapêuticos** é um site simples e intuitivo criado para apresentar e simular a venda de produtos voltados para a Terapia Ocupacional. A plataforma serve como uma vitrine virtual de recursos terapêuticos — como mantas ponderadas, mordedores sensoriais e jogos de coordenação — ajudando profissionais, pais e educadores a encontrarem o material ideal para o acompanhamento de crianças e adultos.


---

## 📌 Como Funciona a Aplicação

1. **Navegação pela Vitrine (`index.html`):** 
   Na página inicial, você encontra o catálogo principal com todos os produtos disponíveis. Cada card exibe a foto do item, o nome e uma breve explicação sobre os benefícios terapêuticos do recurso (como estímulo vestibular, coordenação motora fina ou autorregulação).

2. **Detalhes do Produto (`compra.html`):** 
   Ao clicar no botão "Compre Já", o usuário é direcionado para a página do produto escolhido. Essa tela lê a identificação do item diretamente da URL e carrega automaticamente o nome, a imagem completa, o preço unitário e a descrição detalhada.

3. **Cálculo da Quantidade em Tempo Real:** 
   Na página do produto, o usuário pode aumentar ou diminuir a quantidade desejada através dos botões de `+` e `-`. O valor final da compra é atualizado na hora de acordo com a quantidade selecionada.

---

## ✨ Principais Destaques

- **Interface Visual Acolhedora:** Design desenvolvido em tons de verde para passar tranquilidade e organização, mantendo o foco nos produtos.
- **100% Responsivo:** O layout se adapta sozinho a telas de celulares, tablets e computadores.
- **Carregamento Dinâmico:** Utiliza um único arquivo de código para gerenciar as informações de todos os produtos do catálogo.
- **Arquivos Locais:** Todas as dependências do visual (Bootstrap) estão salvas dentro do próprio projeto, permitindo que o site funcione de forma estável.

---

## 🛠️ O que foi Usado para Construir

- **HTML5:** Utilizado para montar a estrutura do site, organizando textos, botões, imagens e formulários.
- **CSS3:** Responsável pelas cores, espaçamentos, efeitos visuais nos botões e personalização da página.
- **JavaScript:** Responsável por carregar as informações do produto certo, fazer os cálculos das quantidades e dar vida às interações da tela.
- **Bootstrap 5:** Biblioteca que facilita a criação de menus, cards e tabelas responsivas.

---

## 📁 Estrutura de Arquivos do Projeto

```text
ProjetoTO/
├── index.html           # Página inicial com a vitrine de produtos
├── compra.html          # Página de detalhes e simulação de compra
├── package.json         # Arquivo de configuração do projeto
├── README.md            # Documentação e explicações sobre o sistema
├── node_modules/        # Pasta com a biblioteca do Bootstrap instalada
│   └── bootstrap/
└── src/
    ├── css/
    │   └── style.css    # Estilos de cores e visual personalizado
    ├── img/             # Imagens dos produtos terapêuticos
    │   ├── balanco.jpg
    │   ├── bolas.jpg
    │   ├── manta.jpg
    │   ├── massa.jpg
    │   ├── mordedores.jpg
    │   └── prancha.jpg
    └── js/
        └── script.js    # Código que controla os dados e o cálculo de preços