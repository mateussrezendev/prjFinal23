function MudaDesenho(){
    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("h3")
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    
    if(valor=="xlr8"){
        texto.innerHTML = "XLR8";
        imagem.setAttribute("src","img/xlr8.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "XLR8 é um Kineceleran do planeta Kinet. Ele possui velocidade extrema e pode correr a velocidades impressionantes, além de ter reflexos aprimorados.";
        
    }

    else if(valor=="chama"){
        texto.innerHTML = "Chama";
        imagem.setAttribute("src","img/chama.jpeg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Chama é um Pyronite do planeta Pyros. Ele tem a capacidade de gerar e controlar o fogo, além de ser imune a altas temperaturas.";
    }
    
    else if(valor=="quatro braços"){
        texto.innerHTML = "Quatro braços";
        imagem.setAttribute("src","img/quatro-braços.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Um Tetramand do planeta Khoros, Quatro Braços possui quatro braços poderosos, oferecendo força sobre-humana e habilidades de combate aprimoradas.";
    }

    else if(valor=="insectóide"){
        texto.innerHTML = "Insectóide";
        imagem.setAttribute("src","img/insectóide.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Insectóide é um Lepidopterran do planeta Lepidopterra. Ele tem asas que lhe permitem voar e pode secretar substâncias químicas fedorentas para afastar inimigos.";
    }

    else if(valor=="diamante"){
        texto.innerHTML = "Diamante";
        imagem.setAttribute("src","img/diamante.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Diamante é um Petrosapien do planeta Petropia. Ele possui a capacidade de criar e manipular cristais, usando-os para defesa e ataque.";
    }

    else if(valor=="besta"){
        texto.innerHTML = "Besta";
        imagem.setAttribute("src","img/besta.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Besta é um Vulpimancer do planeta Vulpin. Ele tem sentidos aguçados, garras afiadas e é desprovido de visão, confiando principalmente no olfato e na audição.";
    }

    else if(valor=="fantasmático"){
        texto.innerHTML = "Fantasmático";
        imagem.setAttribute("src","img/fantasmático.jpeg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Fantasmático é um Ectonurite do planeta Anur Phaetos. Ele pode tornar-se invisível, intangível e possui habilidades telepáticas, mas tem uma personalidade sombria.";
    }

    else if(valor=="massa cinzenta"){
        texto.innerHTML = "Massa cinzenta";
        imagem.setAttribute("src","img/massa-cinzenta.jpeg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Massa Cinzenta é um Galvaniano do planeta Galvan Prime. Apesar de seu pequeno tamanho, ele possui intelecto superdesenvolvido e pode manipular tecnologia complexa.";
    }

    else if(valor=="ultra t"){
        texto.innerHTML = "Ultra t";
        imagem.setAttribute("src","img/ultra-t.jpeg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Ultra T é um Galvanic Mechamorph do planeta Galvan B. Ele tem a capacidade de se fundir e melhorar tecnologia, assumindo o controle de máquinas.";
    }

    else if(valor=="aquatico"){
        texto.innerHTML = "Aquatico";
        imagem.setAttribute("src","img/aquático.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Aquático é um Piscciss Volann do planeta Piscciss. Com uma aparência humanoidemente evoluída, este alien possui uma pele escamosa, barbatanas e uma cauda poderosa.";
    }

    else{
        texto.innerHTML = "Alien não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
        texto2.innerHTML = "";
    }
}