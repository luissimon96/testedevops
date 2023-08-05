## Desafio Devops

Instalar as dependencias

```
npm install
```

Rodar o servico node

````
npm run start
````

### Serviço
porta: 3000

## Execução do Desafio Luis Simon

Link utilizado para configuração do Dockerfile e empacotamento de um container contendo a aplicação: https://nodejs.org/en/docs/guides/nodejs-docker-webapp

Comandos utilizados:
Para buildar a imagem
````
docker build . -t luissimon96/node-web-app:0.1
````

Executando a Imgaem criada
````
docker run -p 3000:3000 -d luissimon96/node-web-app:0.1
````

Baixando a imagem criada para uso em sua máquina
````
docker pull luissimon96/node-web-app:0.1
````

Build: construir a imagem, foi utilizado o seguinte repo para a config: https://docs.docker.com/language/nodejs/configure-ci-cd/

próximo passo criar um fluxo para utilizar o github actions para:



Deploy: Implantar o pacote já construido;
