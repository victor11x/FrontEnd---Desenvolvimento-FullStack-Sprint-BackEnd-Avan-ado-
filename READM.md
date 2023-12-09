# Meu MVP

Este projeto faz parte do MVP do curso de pós-graduação em Desenvolvimento de Full Stack do ano 2023, pela PUC - Rio.

A ideia do MVP é elaborar uma ideia que atenda um problema do mundo real, depois estrutura as ideias e criar um protótipo da entrega final.

O meu projeto de MVP atende uma necessidade de segmento logistico, Super Portal que consolidade departamentos e atividades de Gestão Estoque, Aquisição Produtos e Gerenciamento Operacional de todo Galpão Logistico, centralizando tudo unico portal que pode Administrador (Gestor) realizar solicitações de compra produtos direto com fornecedores parceiros, listagem de pedidos para ser enviado para cliente final e monitoramento do estoque se existe necessidade compra produtos faltantes.

# Arquitetura da Aplicação

Projeto foi construido uma arquitetura de Microserviço. Este repositorio faz parte do BLOCO A que está em microserviço de de Front-End Super Portal Gestor Estoque que consta todos produtos devolvidos pelo cliente. Imagem abaixo apresenta desenho da arquitetura do projeto .

<div align="center">
<h4>Diagrama da Arquitetura Microserviço</h4>
<img src="https://github.com/victor11x/images/blob/master/Diagrama.jpg?raw=true" width="700px"/>
</div>
<br>
O repositorio esta toda aplicação do FrontEnd que toda parte de Templates da aplicação que cliente possa olhar o Portal.

# Documentação da API Externa

Produtos
Obtenha todos os produtos
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>console.log(json))

link da Documentação da Api "https://fakestoreapi.com/docs"

# Executar Aplicaçãos

## Como executar em modo de desenvolvimento

Basta fazer o download do projeto e abrir o arquivo index.html no seu browser.

## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile no terminal.
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t front .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ sudo docker run --rm -p 8080:80 front
```

Uma vez executando, para acessar o front-end, basta abrir o [http://localhost:8080/#/](http://localhost:8080/#/) no navegador.
