// Pega seletores e guarda em variáveis
const main = document.querySelector("main")
const butao = document.querySelector("#butao-feriado")
const table = document.createElement("table")

// Função assincrona para buscar os feriados na API 'brasilapi'
async function getFeriados(ano) {
  await fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`)
    .then(res => res.json())
    .then(data => populateTable(data))
}

// Espera o botão de busca ser clicado
butao.addEventListener("click", (event) => {
  // Previne a limpeza da tela
  event.preventDefault()
  // Pega o Ano digitado pelo usuário
  const ano = document.getElementById("text-ano").value
  // Chama a função que busca feriados na API
  getFeriados(ano)
})

// Função para popular uma tabela com os feriados
async function populateTable(data) {
  main.textContent = ""
  data.forEach(element => {
    // Chama a função que cria os cards com os feriados
    createCards(element)
  })
}

// Função que cria os elementos para o card
function createCards(element) {
  const card = document.createElement("div")
  // Adiciona uma classe ao seletor DIV
  card.setAttribute("class", "card")

  // Cria o titulo e adiciona o texto com o nome do feriado
  const titulo = document.createElement("h3")
  titulo.textContent = `${element.name}`

  // Cria a tag P com o dia do feriado
  const date = document.createElement("p")
  date.textContent = `Dia: ${element.date}`

  // Adiciona o titulo e data ao card
  card.appendChild(titulo)
  card.appendChild(date)

  // Adiciona o card na tag Main
  main.appendChild(card)
}