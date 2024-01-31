# Nome do Seu Sistema

## Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/) (versão 20.10.0)
- [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) (opcional, mas recomendado)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instalação

1. **Node.js**: Utilize o NVM para garantir que você está usando a versão correta do Node.js. Execute o seguinte comando no terminal para usar a versão correta:
   <br/>
   <br/>

⚠️ Certifique-se de ter o NVM instalado em sua máquina.

```
nvm use
```

## Rodando o Projeto

⚠️ Antes de tentar rodar o projeto, crie um arquivo .env com base no .env.example.

Inicie os serviços necessários usando o Docker Compose. Você pode fazer isso com o seguinte comando:
<br/>
<br/>
⚠️ Certifique-se de ter o Docker e Docker Compose instalado em sua máquina.

```
docker compose up -d
```

Agora só resta iniciar a api através do comando:

```
npm run dev
```
