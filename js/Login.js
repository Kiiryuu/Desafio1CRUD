const EMAIL = 'admin@admin.com';
const SENHA = '123456';

let campoEmail = document.querySelector('#email');
let campoSenha = document.querySelector('#senha');
let btnEntrar = document.getElementById('btn-entrar');

btnEntrar.addEventListener("click", () => {
    let emailDigitado = campoEmail.value.toLowerCase();
    let senhaDigitada = campoSenha.value;

//     if(!emailDigitado || !senhaDigitada) {
//         alert('Preencha todos os campos');
//         return;
//     }

//     if(emailDigitado == EMAIL && senhaDigitada == SENHA) {
//         alert('LOGIN EFETUADO COM SUCESSO');
//         return;
//     }

//     if(emailDigitado != EMAIL || senhaDigitada != SENHA){
//         alert('Usuário e/ou senha incorreta');
//         return;
//     }
//     if(emailDigitado == EMAIL && senhaDigitada == SENHA) {
//         alert('LOGIN EFETUADO COM SUCESSO');
//         window.open('home.html', '_self');
//         return;
//     }
// });

autenticar(emailDigitado, senhaDigitada);
 

});
//    VALORES DIGITADOS PELO USUARIO
// validando gmail e senha

function autenticar (email, senha){
    const URL = 'http://localhost:3400/login';

    fetch(URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, senha})
    })
    .then(response => response = response.json()) //transforma a resposta do servidor em um objeto json
    .then(response => {
        console.log(response)
        
        if(!!response.mensagem){
            alert(response.mensagem);
            return;
        }
       salvarToken(response.token)
       window.open('controle-produto.html', '_self')
})
    

    .catch(erro => console.log(erro))
  
}