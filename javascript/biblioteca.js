let titulo = document.getElementById("titulo");
let autor = document.getElementById("autor");
let ano = document.getElementById("ano");
let genero = document.getElementById("genero");

let buscando = document.getElementById("busca");
let btnCadastrar = document.getElementById("btnCadastrar")
let estante = document.getElementById("estante");

let livros = [];
btnCadastrar.addEventListener("click", Cadastrar);

buscando.addEventListener("keyup", Pesquisar);

function Cadastrar(){

    let livro = {
        titulo: titulo.value,
        autor: autor.value,
        ano: ano.value,
        genero: genero.value,
    };

    livros.push(livro);
    MostrarLivros();

}

function MostrarLivros(){
    let saida = "";

    for(let i = 0; i < livros.length; i++){
        saida += `
        <div class = "livro">
        <h3>${livros[i].titulo}</h3>
        <p> Autor: ${livros[i].autor}</p>
        <p> Ano: ${livros[i].ano}</p>
        <p> Gênero: ${livros[i].genero}</p> 
        </div>
        <br>`;
    }
    estante.innerHTML = saida;
}

function Pesquisar(){
    let termo = buscando.value.toLowerCase();
    let saida = "";
    
    for(let i = 0; i < livros.length; i++){
        //se o que esta entre (includes()) for igual ao titulo ele da true
        if(livros[i].titulo.toLowerCase().includes(termo)){
            saida += `
            <div class = "livro">
            <h3>${livros[i].titulo}</h3>
            <p> Autor: ${livros[i].autor}</p>
            <p> Ano: ${livros[i].ano}</p>
            <p> Gênero: ${livros[i].genero}</p> 
            </div>
            <br>`;
        }

        estante.innerHTML = saida;
    }
}
