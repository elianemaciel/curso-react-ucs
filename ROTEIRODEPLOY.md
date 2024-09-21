## Roteiro para deploy de uma aplicação com react

### Passos:

1. No console do firebase, na aba Hosting crie um novo site.

2. Instalar Firebase CLI
Se você ainda não tem o Firebase CLI instalado, instale-o globalmente usando o npm:

```
npm install -g firebase-tools
```

Verifique a instalação com o comando:

```
firebase --version
```

3. Autenticar no Firebase

Faça login na sua conta Firebase pelo terminal:

```
firebase login
```

Isso abrirá uma janela no navegador para você se autenticar com a sua conta do Google.

4. Criar uma build de produção do React

Crie uma build de produção do seu aplicativo React. No diretório do seu projeto, execute:


```
npm run build
```
Isso criará uma pasta build com os arquivos otimizados e prontos para o deploy.

5. Iniciar um novo projeto no Firebase
No terminal, navegue até o diretório do projeto React e inicialize o Firebase:

```
firebase init
```

Durante o processo de inicialização:

*Hosting: Selecione a opção "Hosting" (Usar as setas e espaço para selecionar).*
Seleção de projeto: Selecione um projeto existente no Firebase ou crie um novo.
Diretório público: Defina como build, que é a pasta gerada pelo React.
Single-page app: Quando perguntado se é uma single-page app (SPA), digite y (yes).
Configurações de redirecionamento: Escolha "Não" para configurar redirecionamentos automáticos no GitHub, a menos que você tenha essa necessidade.

6. Deploy no Firebase
Agora, tudo está configurado para fazer o deploy do seu aplicativo React. No terminal, execute:

```
firebase deploy
```

Após o deploy, o Firebase fornecerá uma URL onde seu aplicativo está hospedado.
