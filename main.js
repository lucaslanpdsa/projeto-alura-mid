function tocasom(name) {
  let som = document.querySelector(name)
  if (som && som.localName === 'audio') {
    som.play()
  } else {
    //alert('Elemento não encontrado');
    console.log('Elemento não encontrado ou seletor inválido')
  }
}

let listadeteclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listadeteclas.length; contador++) {
  const tecla = listadeteclas[contador]
  const elemento = tecla.classList[1]
  const id = `#som_${elemento}`

  tecla.onclick = function (evento) {
    evento = tocasom(id)
  }

  tecla.onkeydown = function (evento) {
    if (evento.key == 'Enter' || evento.key == 'Space') {
      evento = tecla.classList.add('ativa')
    }
  }

  tecla.onkeyup = function (evento) {
    evento = tecla.classList.remove('ativa')
  }
}
