# Jogo Rpg Project

## Sobre o projeto

Desenvolvi um jogo envolvente utilizando React, incorporando um hook personalizado para gerenciar o estado e a lógica de movimento do personagem em um mapa interativo. O jogo permite ao usuário controlar o personagem usando as teclas de seta ou W, A, S, D.

Técnicas e Tecnologias Utilizadas:

Styled Components: Utilizei Styled Components para estilização, garantindo um código modular e de fácil leitura.

Hooks e Efeitos: useEffect é empregado para adicionar e remover event listeners de teclado.

Lógica de Movimento: Implementei uma lógica de movimento suave e restrito, respondendo às teclas de seta ou W, A, S, D do teclado. O movimento é condicionado pela presença de obstáculos no mapa.

Mapa e Colisões: Representei o mapa do jogo por meio de uma matriz, onde valores 0 e 1 indicam áreas acessíveis e obstáculos, respectivamente. A lógica de movimento do personagem leva em consideração esses obstáculos para evitar colisões.

Hook Personalizado: Desenvolvi um hook personalizado, useCharacter, para encapsular a lógica do personagem. Ele fornece métodos como moveLeft, moveRight, moveUp e moveDown, tornando o código mais modular e reutilizável.

Observação :
Não é Responsivo para todos os dispositivos, pois meu foco foi deixar o projeto funcional. 

## Tecnologias utilizadas

### Front end : 
![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![NPM](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Hooks](https://img.shields.io/badge/React%20Hooks-61DAFB?style=for-the-badge&logo=react&logoColor=white)

## Links :

```bash
# clonar repositório
git clone https://github.com/ConradoCapistrano/jogo-rpg
```

### Acessar o Site do Projeto :
[https://jogo-rpg-conrado-capistrano.netlify.app/]

# Creator / Autor

Conrado Capistrano

[![NPM](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/conrado-capistrano88)
