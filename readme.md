<h1 id="topo">Desafio - Shopper</h1>
Repositório com os trabalhos feitos durante o BootCamp AfroAcademy


* [Indice](#funciona)
    * [Teste Técnico](#teste)
  
      * [<img width=20px src="https://user-images.githubusercontent.com/89301596/196036828-065b54d7-0373-4485-a936-ebc7eeee39d1.png"/> - Front End](https://github.com/RickHardBR/Shopper/tree/main/front_shopper)

      * [<img width=20px src="https://user-images.githubusercontent.com/89301596/196037589-3478c86f-7ba4-4932-a4b4-02c190554945.png"/> - Back End](https://github.com/RickHardBR/Shopper/tree/main/back_shopper)
      
      * [Tecnologia empregada](#tecnologia)
  
      * [Criando uma aplicação Vite](#vite)


#
<h2 id="teste"><b>O Desafio</b></h2>

#
<h2>
Você vai criar um formulário simples de cadastro de pedidos de supermercado. O sistema deve ser escrito em Python ou Javascript (node.js e/ou react.js). 
</h2>
<h3 align="justify">

>Além da funcionalidade, avaliaremos principalmente organização e clareza no código, lembre-se que um programador lê mais código do que escreve, então códigos limpos e bem estruturados facilitam a vida de todos.<br>
Junto desse documento você receberá o arquivo products.csv , que é uma lista com produtos
disponíveis e seus respectivos preços e estoque com as seguintes definições:
</dl>
<code>
<dl>
<dd>id = id do produto<br></dd>
<dd>name = nome do produto<br></dd>
<dd>price = preço do produto em reais. <br></dd>
<dd>qty_stock = quantidade em estoque<br></dd>
</dl>
</code>


### Abaixo listamos os requisitos que seu sistema deve atender:

#
<ol>
<li>sistema deve ter um formulário de cadastro de pedidos</li>
<li>O usuário deve entrar com Nome do Cliente, Data de Entrega e uma lista de compras</li>
<li>A lista de compras é composta por um ou mais produtos e a quantidade solicitada para
cada um deles.</li>
<li>O usuário pode alterar a quantidade de itens já cadastrados ou excluir um item que ele não queira mais.</li>
<li>A cada alteração na lista de compras o sistema deve calcular o valor total do pedido.</li>
<li>Todas essas informações devem ser salvas em um banco de dados que você vai modelar.</li>
<li>Cada pedido salvo deve debitar a quantidade do produto correspondente de seu estoque.</li>
<li>O sistema deve alertar o usuário caso a quantidade solicitada não esteja disponível no estoque.</li>
<li>O sistema também deve ter uma função para mostrar o estoque atual exibindo: Nome do
produto e a quantidade em estoque.</li>
</ol>

<h2 id="tecnologia">Tecnologia empregada</h2>

#
<dl>
<dd>📌React</dd>

<dd>📌JavaScript</dd>

<dd>📌axios</dd>

<dd>📌date-fns</dd>

<dd>📌react-Paginate</dd>

<dd>📌react-router-dom</dd>

<dd>📌SASS - SCSS</dd>
</dl>


<h2 id="vite"><b>Criando uma aplicação com Vite</b></h2>

#
Vite é uma ferramenta para o desenvolvedor(a) frontend, o significado de sua palavra vem do francês, que significa “rápido” . Criado por “Evan You”, o mesmo criador do Vue.js. O Vite promete :

💡 Servidor Instantâneo.

⚡️ Hot reload ultrarrápido.

🛠️ Suporte à: Typescript, JSX, CSS e mais…

📦 Compilações otimizadas usando rollup.

🔩 Plugins universais.

🔑Totalmente tipado.

**Pode ser usado**

* JavaScript
* Vue.js
* React
* Preactjs
* LitElement
* Svelte

**Criando seu primeiro projeto Vite**

_**Você pode criá-lo com NPM ou Yarn**_

![image](https://user-images.githubusercontent.com/89301596/190332783-eefc6af1-9b37-495f-b2fc-2c64fdba6627.png)

_Em seguida você poderá adicionar o nome do projeto, nesse caso vamos chamá-lo de “projeto-vite”. Também podemos selecionar a framework que desejamos utilizar e em seguida entrar na pasta._

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

## **Passa a Passo**

**Começando seu projeto**

01)-Crie uma pasta com o nome do projeto.
02)-Abra a pasta e dentro dela abra o VSCode com o botão direito do mouse:

![image](https://user-images.githubusercontent.com/89301596/190339129-edc53383-2e49-4014-8389-451383a90a9d.png)

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

03)-Com o VSCode aberto, abra um terminal:

![image](https://user-images.githubusercontent.com/89301596/190339391-9a666c44-64cf-49a7-a2a7-a0ffc17470bc.png)

## Formas de iniciar seu projeto:

**Com NPM:**

~~~
npm create vite@latest
~~~

**Com Yarn:**

~~~
yarn create vite
~~~

**Com PNPM:**

~~~
$ pnpm create vite
~~~

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>
# Levando em consideração a criação com NPM

![image](https://user-images.githubusercontent.com/89301596/190340070-9d396332-2d7c-4718-9c9a-87c711faa548.png)

_Após dar **Enter** você precisa indicar um nome:_

![image](https://user-images.githubusercontent.com/89301596/190340194-877d0e14-b72b-4510-8a50-f155a424debf.png)


_Você pode dar o nome que quiser. Ex: landing-page_

Você também pode escolher o nome que melhor se adeque a sua aplicação ou basta digitar um sinal de ponto "." (sem as aspas) que a aplicação terá o nome da pasta do projeto, lembrando que não pode ter letras maiúsclas no nome da pasta e nem da aplicação caso deseje dar um nome diferente.

![image](https://user-images.githubusercontent.com/89301596/190340624-b178be78-cfd8-4062-a77a-59e6ee6aad80.png)

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

Depois de dar o nome ou apenas o ponto será perguntando qual o framework você utilizará, estamos usando o React, use as setas do teclado para escolhe-lo e assim que chegar nele, tecle Enter:

![image](https://user-images.githubusercontent.com/89301596/190340748-c1649efd-14d8-434a-822f-51ea55fd3a00.png)

Uma nova pergunta é feita, pedindo que escolha a variante, escolha JavaScript apertando Enter ou caso queira iniciar sua aplicação com TypeScript use a seta para abaixo do teclado e aperte Enter.

![image](https://user-images.githubusercontent.com/89301596/190341371-020dae67-3871-4402-ad61-8f9c3906439f.png)

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>
Pronto, sua aplicação foi criada:

![image](https://user-images.githubusercontent.com/89301596/190341626-8861796b-f31f-49ac-bb37-7054c9aaa47e.png)

Porém antes de continuar, você precisa instalar as dependências, começe por

~~~
npm i
~~~
ou
~~~
npm Install
~~~


![image](https://user-images.githubusercontent.com/89301596/190342516-9d125dbb-acdb-48a1-95ce-69868266b621.png)

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>
após dar Enter, começará a instalação:

![image](https://user-images.githubusercontent.com/89301596/190342677-0e86f0fc-66ac-4fe5-93cb-7b1298685418.png)


Após a instalação das dependências, o terminal estará liberado, e você pode notar uma nova pasta: node_modules

![image](https://user-images.githubusercontent.com/89301596/190343087-46da6b4e-1a83-4f3b-a6f0-fc6e3fb07a80.png)

✨E assim o projeto está pronto! ✨

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

Para começar sua aplicação no navegador, no terminal digite:

~~~
npm run dev
~~~

o servidor local será criado para apresentar a aplicação:

![image](https://user-images.githubusercontent.com/89301596/190343357-1ccef5fb-4efd-4480-a0e4-5bc6a90767b0.png)

com o servidor criado, basta segurar a tecla CRTL e clicar sobre o endereço que aparece no terminal:

![image](https://user-images.githubusercontent.com/89301596/190343603-cda9f117-9f4c-4eb1-8ab1-cf133db75945.png)

Ou simplesmente selecionar o endereço - exemplo: <span style="background-color: #FFF">**http://127.0.0.1:5174**</span> e colocar na barra de endereços do seu namegador
<h4 align="right"><a href="#topo">⬆️Topo</a></h4>


✨ Essa será a primeira tela que aparecerá no seu navegador ✨

![image](https://user-images.githubusercontent.com/89301596/190343705-a7dd6a65-70da-4ea3-802e-9236c6e5b1ce.png)


**Conclusão**

Se comparado com o creat-react-app , o Vite é bem melhor, possuindo um build de 14x mais rápido e o tamanho é consideravelmente menor. O resultado é realmente incrível.


Com certeza é uma opção a considerar na hora de criar seu novo projeto. 

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

<h1 id="imagens">Imagens</h1>

<div align="center" >
<h4>Tela inicial</h4>
<img width= 900px src="https://user-images.githubusercontent.com/89301596/196044736-7e109746-446d-4741-b4e2-841a6ecbb6e9.png" />

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

<h4>Tela inicial mostrando a paginação funcional</h4>
<img width= 900px src="https://user-images.githubusercontent.com/89301596/196045085-dd9a1c17-ca5e-417b-ab88-016e1c45c0bd.png" />

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>

<h4>Carrinho de compras vazio</h4>
<img width= 400px src="https://user-images.githubusercontent.com/89301596/196044896-b5dab0f7-8729-4c5a-89eb-702629673dc5.png">

<h4 align="right"><a href="#topo">⬆️Topo</a></h4>
<h4>Carrinho de compras com dois produtos</h4>
<img width= 400px src="https://user-images.githubusercontent.com/89301596/196045007-cbb3e136-3afb-4e0a-aa95-7690a95585c1.png">

</div>

<h2 href="#pastas">Organização das pastas - Back End</h2>

<img width="230px" heith="450" src="https://user-images.githubusercontent.com/89301596/196045719-429018e9-d162-4b9b-a569-bbcf1f7c4bd4.png">
<img width="230px" heith="450" src="https://user-images.githubusercontent.com/89301596/196045907-40766de6-3626-4b0e-80b9-c1de52f4283b.png">
<img width="230px" heith="450" src="https://user-images.githubusercontent.com/89301596/196045982-ad32dd95-4494-486d-b2dd-0d7640b67421.png">
<img width="230px" src="https://user-images.githubusercontent.com/89301596/196046052-84ccd1e0-f444-4c74-84cf-3bc39bc84cd9.png">

<h2 href="#pastas">Estrutura das tabelas - Back End</h2>

<img width="450px" heith="450" src="https://user-images.githubusercontent.com/89301596/196046336-9dd08cea-0538-4a57-ac47-5c5545481bfd.png">

## 💛 Contato

### <a href="mailto:rickhhard@gmail.com">📧</a>rickhhard@gmail.com

### <a href="mailto:rickhard@bol.com.br">📧</a>rickhard@bol.com.br
