<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Desenvolvendo uma API Rest</h1>
    <p>Baseado no Product Hunt</p>
    <p>Node Js, Express, Docker, MongoDB, Robo3T e Insomnia</p>
        <ul>
            <li>npm init -y (Criando package.json)</li>
            <li>npm install express</li>
        </ul>
        <h3>Evitando reloads manuais com dependências de desenvolvimento</h3>
        <ul>
            <li>npm install -D nodemon</li>
            <li>Altere o package.jason adicionando no script: "dev": "nodemon server.js"</li>
            <li>npm run dev (Server modo de desenvolvimento)</li>
        </ul>
        <h3>MongoDB e Docker</h3>
        <p>Para instalar o MongoDB no Docker use:</p>
        <ul>
            <li>docker pull mongo</li>
        </ul>
        <p>Para subir um novo container com essa instalação rodando use:</p>
        <ul>
            <li>docker run --name mongodb -p 27017:27017 -d mongo</li>
        </ul>
        <p>Após ele retornar um "código muito louco" use: </p>
        <ul>
            <li>docker ps (Exibe as VMs que estão rodando)</li>
        </ul>
        <h3>Reiniciando o Docker...</h3>
        <p>Após ter reiniciado sua máquina, será ncessário reicniciar o docker, para isso use:</p>
        <ul>
            <li>docker ps -a (Ver todos as imagens)</li>
            <li>docker start mongodb (iniciar o container)</li>
        </ul>
        <h3>Criando conexão do DB dentro do nosso código</h3>
        <ul>
            <li>npm install mongoose (Dependencia de produção)</li>
        </ul>
        <p>npm install require-dir (Bibliotca que faz o papel de require em todos os arquivos.)</p>
        <h3>Paginação da API</h3>
        <ul>
            <li>npm install mongoose-paginate</li>
        </ul>
        <h3>Segurança e Acesso Externo</h3>
        <p>Vamos utilizar o cors para permitir o acesso por outros domínios, claro que ele vai muito além disso.</p>
        <ul>
            <li>npm install cors</li>
        </ul>  
</body>
</html>
