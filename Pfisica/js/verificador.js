var btn  = document.getElementById('btn');
var img = document.getElementById('div2')

btn.addEventListener('click', function(e) {
    var resUser = document.getElementById('numverificador').value
    var sec = document.getElementById('secimg');
    var res = document.getElementById('res')

    if(resUser === '')
        alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    else{
        
        if(resUser > 730 && resUser < 50000) {
            sec.style.backgroundColor = 'red'
            res.innerHTML =  `Essa onda tem ${resUser} nanômetros, ela é uma onda Infra-Vermelho<br><br><br>Ondas infravermelhas são um tipo de onda fora do espectro
            visível do ser humano.São um tipo de radiação eletromagné
            tica, que possuem uma frequência superior a luz vermelha.<br><br>`
            img.innerHTML ='<img src="../imagens/infrinha.png" alt="">'

        }

        else if(resUser >= 50000){
            sec.style.backgroundColor = "#8B0000"
            res.innerHTML = `Essa onda tem ${resUser} nanômetros, ela esta acima do Infra-Vermelha<br><br><br>Exemplo de onda acima do infravermelho: Ondas de rádio são um tipo de radiação eletromagnética com comprimento de onda maior do que a radiação infravermelha. Como todas as outras ondas eletromagnéticas, viajam à velocidade da luz no vácuo. Elas são geradas naturalmente por raios ou por objetos astronômicos.<br><br> `
            img.innerHTML = '<img src="../imagens/antena-de-radio.jpg" alt="">'
        }

        else if(resUser < 730 && resUser >= 400) {
            sec.style.backgroundColor = "rgba(15, 178, 255, 255)"
            res.innerHTML = `Essa onda tem ${resUser} nanômetros, esta dentro do nosso espectro visivel<br><br><br>Exemplo de onda dentro do nosso aspecto visível:A luz é uma onda eletromagnética, cujo comprimento de onda se inclui num determinado intervalo dentro do qual o olho humano e a ela sensível. Trata-se, de outro modo, de uma radiação electromagnética que se situa entre a radiação infravermelha e a radiação ultravioleta. <br><br>`
            img.innerHTML = '<img src="../imagens/vitor.jpg" alt="">'
        }

        else if(resUser < 400 && resUser > 100)
        {
              sec.style.backgroundColor = 'violet'
              res.innerHTML = `Essa onda tem ${resUser} nanômetros, ela é uma onda ultra-violeta<br><br><br>A radiação ultravioleta (UV) é a radiação eletromagnética ou os raios ultravioleta com um comprimento de onda menor que a da luz visível e maior que a dos raios X, de 380 nm a 1 nm. O nome significa mais alta que (além do) violeta (do latim ultra), pelo fato de que o violeta é a cor visível com comprimento de onda mais curto e maior frequência.`
              img.innerHTML = '<img src="../imagens/ultra.jpg" alt="">'
              
        }

        else {
            sec.style.backgroundColor = "#20165B"
            res.innerHTML = `Essa onda tem ${resUser} nanômetros, ela esta abaixo do ultra-violeta<br><br><br>A radiação X (composta por raios X) é uma forma de radiação eletromagnética indiretamente ionizante de natureza semelhante à luz. A maioria dos raios X possuem comprimentos de onda entre 0,01 a 10 nanómetros, correspondendo a frequências na faixa de 30 petahertz a 30 exahertz (3×1016 Hz a 3×1019 Hz) e energias entre 100 eV até 100 keV. Os comprimentos de onda dos raios X são menores do que os raios ultravioleta (UV) e tipicamente maiores do que a dos raios gama. Os raios X foram descobertos em 8 de novembro de 1895 pelo físico alemão Wilhelm Conrad Röntgen.`
            
            img.innerHTML = '<img style="height: 300px;" src="../imagens/raiox.jpg" alt="">'
        }
    }
})