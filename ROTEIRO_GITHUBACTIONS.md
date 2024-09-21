## Criando um deploy automatizado

## Passos:

1. Criar o Token de Serviço Firebase
Você precisa de credenciais para permitir que o GitHub Actions faça o deploy no Firebase Hosting.

No terminal, gere um token do Firebase:

```
firebase login:ci
```

Copie o token gerado. Ele será usado no GitHub Actions.

2. Adicionar o Token como Secret no GitHub
Para manter seu token seguro, adicione-o como um secret no seu repositório GitHub.

- No GitHub, vá até o seu repositório.
- Clique em Settings (Configurações).
- No menu lateral, clique em Secrets and variables > Actions.
- Clique no botão New repository secret.
- Nomeie o secret como FIREBASE_TOKEN.
- Cole o token que você gerou e salve.

3. Criar o arquivo do GitHub Actions Workflow
O GitHub Actions é configurado com arquivos YAML. Vamos criar um workflow que será executado toda vez que houver um push na branch main.

No diretório do seu projeto, crie a pasta `.github/workflows` (caso ela não exista).
Dentro dessa pasta, crie um arquivo chamado `firebase-deploy.yml`.

4. Configurar o Workflow
No arquivo firebase-deploy.yml, adicione o seguinte conteúdo:

```
name: Deploy React App to Firebase

# Dispara o workflow em eventos de push na branch main
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Build React App
        run: npm run build

      - name: Deploy to Firebase
        run: firebase deploy --only hosting
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```
5. Commit e Push do Workflow
Agora que o workflow está configurado, faça o commit e o push do arquivo para o repositório.

