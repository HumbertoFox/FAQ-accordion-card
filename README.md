# Frontend Mentor - FAQ accordion card solution

Esta é uma solução para o [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). 
Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Layout do projeto em tela de Desktop/Notebook/Tablet/Mobile.

<div align="center">

  <img src="https://github.com/HumbertoFox/repository/assets/126817628/d8c716af-2fcb-4f6d-bda5-7b41455a849a" width="400px"/>

</div>

### O que aprendi

Mais uma prática bem-sucedida com o HTML, CSS e Js! show 😎

```Js
const selectLis = document.querySelectorAll(".ul-questions li h2");

selectLis.forEach(function (liQuestion) {
    liQuestion.addEventListener("click", () => {
        
        const liQuestionsActive = document.querySelector(".active");

        liQuestionsActive.classList.remove("active");
        liQuestionsActive.nextElementSibling.classList.remove("visibled");

        liQuestion.classList.add("active");
        liQuestion.nextElementSibling.classList.add("visibled");

    });
});
```

### Construído com

- Marcação semântica HTML5
- Propriedades personalizadas CSS
- Caixa flexível
- Js

## Desenvolvido em:

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30px"/>
</div>
