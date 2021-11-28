var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
    var user = document.getElementById('user').value;
    var pas = document.getElementById('pass').value
    if((user === 'admin' && pas === 'genomasite') || (user === 'vitor' && pas === 'genomasite') || (user === 'leandro' && pas === 'genomasite')) {
        btn.addEventListener('click', function(e) {
            window.location.href = ('html/home.html');          
        })
    
     

    }else if((user === 'admin' && pas != 'genomasite') || (user === 'vitor' && pas != 'genomasite') || (user === 'leandro' && pas != 'genomasite')) {
        alert('SENHA INCORRETA')
    }else{
        alert('USUÁRIO NÃO FOI RECONHECIDO');
    }
})
