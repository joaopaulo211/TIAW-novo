function store(){

    var nomeDoUsuario = document.getElementById('login');
    var name = document.getElementById('userEmail');
    var pw = document.getElementById('password');
    var confirmpw = document.getElementById('confirmPassword');
    var pgtSeguranca = document.getElementById('respostaDeSeguranca')
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Preencha um email válido');

    }else if(pw.value.length == 0){
        alert('Preencha uma senha válida');

    }else if(pw.value.length > 8){
        alert('Faça uma senha como no máximo 8 caracteres');

    }else if(!pw.value.match(numbers)){
        alert('Por favor, adicione um número a sua senha');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('Por favor, adicione uma letra maiúscula a sua senha');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('Por favor, adicione uma letra minúscula a sua senha');
    
    }else if(pw.value !== confirmpw.value){
        alert('As senhas informadas não são equivalentes');

    }else{
        localStorage.setItem('login', nomeDoUsuario.value)
        localStorage.setItem('userEmail', name.value);
        localStorage.setItem('password', pw.value);
        localStorage.setItem('respostaDeSeguranca', pgtSeguranca.value);
        alert('Sua conta foi criada com sucesso!', window.location.href='index.html');
        
    }
}

function check(){
    var storedName = localStorage.getItem('userEmail');
    var storedPw = localStorage.getItem('password');
    

    var userName = document.getElementById('userEmailLogin');
    var userPw = document.getElementById('passwordLogin');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('Obteve sucesso ao logar!', window.location.href='funcionalidade.html');
        
    }else{
        alert('Erro ao executar o login');
    }
}

/* function recuperarSenha() {
    var storedQuest = localStorage.getItem('respostaDeSeguranca');

    if(pgtSeguranca.value === storedQuest)  {
    var storedPw = newPass.value;
    
}else{
    alert('Resposta errada');
}
} */