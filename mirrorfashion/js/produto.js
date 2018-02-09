//Quando mexer no input de tamanho
document.querySelector(`input[type=range]`).oninput = AtualizaTamanho

//Isolando o código
function AtualizaTamanho() {
    
    //o conteudo de texto do output recebe o valor do input range
    document.querySelector(`.tamanhos output`).textContent = document.querySelector(`input[type=range]`).value

}
