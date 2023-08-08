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

Comandos utilizados:
Para buildar a imagem localmente
````
docker build . -t luissimon96/node-web-app:0.1
````

Executando a Imgaem criada localmente
````
docker run -p 3000:3000 -d luissimon96/node-web-app:0.1
````

Baixando a imagem criada para uso em sua máquina
````
docker pull luissimon96/node-web-app:0.1
````

## Processo de CI/CD utilizando o Git Actions
Build: construir a imagem, foi utilizado o seguinte repo para a config: https://docs.docker.com/language/nodejs/configure-ci-cd/
Para buildar uma nova versão deve apenas atualizar qualquer arquivo na master que o job já será iniciado automaticamente via push event;

próximo passo criar um fluxo para utilizar o github actions para:

## Deploy: Implantar o pacote já construido localmente;

Realizado o com sucesso após isso para conseguir acessar com o seguinte ambiente:
minikube v1.31.1
Docker Desktop 4.22.0
Microsoft Windows 11 Home 10.0.22621.1992 Build 22621.1992

````
kubectl apply -f .
````
````
minikube tunnel
````

obtivemos o seguinte resultado:
````
curl -v localhost
------------------
StatusCode        : 200
StatusDescription : OK
Content           : Olá LUIS_SIMON!
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Content-Length: 16
                    Content-Type: text/html; charset=utf-8
                    Date: Tue, 08 Aug 2023 02:37:17 GMT
                    ETag: W/"10-7shNgo2aVAsAJCqJ3hLZb5Z+xFw"
                    X-Powered-By: Expres...
Forms             : {}
Headers           : {[Connection, keep-alive], [Content-Length, 16], [Content-Type, text/html; charset=utf-8], [Date, Tue, 08 Aug 2023   
                    02:37:17 GMT]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : System.__ComObject
RawContentLength  : 16
````

E via Browser Google Chrome Versão 115.0.5790.111
![Resultado local](image.png)

# Processo de execução

## Build
Para realizar o build de uma nova versão é necessário somente executar um push na branch master para iniciar o workflow de CI

## Deploy
O deploy pode ser realizado acessando a aba Actions > cd
![Acesso a Pipeline CD](image-1.png)

e logo após clicar em "Run workflow"
![Rodando Pipeline CD](image-2.png)

Resultado da execução:
![Passo 1](image-3.png)
![Passo 2](image-4.png)
![Passo 3](image-5.png)

![Resultado](image-6.png)

A imagem pode ser acessado via link: https://hub.docker.com/repository/docker/luissimon96/node-web-app/general