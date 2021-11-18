### **Documentação da API**:

_base url_ : `http://localhost:8000/`

## Instalação

1. npm install ou yarn para instalar as depêndencias
2. Criar um Banco de Dados em MySQL com o nome: _garanttiChallenge_ e Exportar o ficheiro garanttiChallenge.sql
3. yarn typeorm migration:run para criar as tabelas no banco de dados
4. No terminal execute: `yarn typeorm migration:run`
5. Dentro do directorio `src/insomnia/insomnia.json`
   Exportar esse ficheiro lá no insominia do seu computador
6. No terminal:

# development

$ yarn start / npm run start

# watch mode

$ yarn start:dev / npm run start:dev

# production mode

$ yarn start:prod / npm run start:prod

7. Testar as rotas no insomnia

### **Rodando no Docker**

Basta abrir o terminal no diretorio do projecto e rodar o seguinte:

1.  `docker-compose build/sudo docker-compose build` - no windows/Linux
2.  `docker-compose up -d/sudo docker-compose up -d` - Para rodar a o container em backGround
3.  `docker-compose up/docker-compose up` - Para rodar a aplicação também
4.  Rode um `docker ps/sudo docker ps` - Para verificar se os containers estão rodando
5.  Testar os endpoints

### **Rodando o FrontEnd**

1.  clone o Repositorio do frontEnd em `https://github.com/luiscaputo/garantiiFrontEnd`
2.  Rode um Yarn para baixar todas as dependencias
3.  E rode um yarn start
4.  Testar os Serviços
5.  Nota:
    _base url_ : `http://localhost:8000/`
    _HomePage url_ : `http://localhost:8000/home`
    _Visualização url_ : `http://localhost:8000/posts/2`

## **Tecnologias/Ferramentas usadas**

- NodeJs
- NestJs
- TypeScript
- MySQL
- typeorm
- docker
- Lint
- Prettier
- Insomnia
- ReactJs
- Redux

_By: luiscaputo_

## Rodando a Aplicação
