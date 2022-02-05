---
  title: 'Padrões de commits'
  date: '2021-02-19'
  excerpt: 'Padrões para se seguir no github'
---


# 📄Padrões de commits 

![Project Logo](https://raw.githubusercontent.com/davidlpc1/padroes-de-commits/main/gitcommit.png)

De acordo com a documentação do **Convetional Commits**, Commits Semânticos são uma convenção simples para ser utilizada nas mensagens de commit. Essa convenção define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas.
 
Esses commits auxiliarão você e sua equipe a entenderem de forma facilitada quais alterações foram realizadas no trecho de código que foi commitado. 

Essa identificação ocorre por meio de uma palavra e emoji que identifica se aquele commit realizado se trata de uma alteração de código, atualização de pacotes, documentação, alteração de visual, teste...

## 🦄 Tipo e Descrição

O commit semântico possui os elementos estruturais abaixo (tipos), que informam a intenção do seu commit ao utilizador(a) de seu código.

- `fix` - Commits do tipo fix indicam que seu trecho de código commitado está solucionando um problema (bug fix), (se relaciona com o PATCH do versionamento semântico).

- `feat`- Commits do tipo feat indicam que seu trecho de código está incluindo um novo recurso (se relaciona com o MINOR do versionamento semântico).

- `docs` - Commits do tipo docs indicam que houveram mudanças na documentação, como por exemplo no Readme do seu repositório. (Não inclui alterações em código).

- `style` - Commits do tipo style indicam que houveram alterações referentes a formatações de código, semicolons, trailing spaces, lint... (Não inclui alterações em código).

- `refactor` - Commits do tipo refactor referem-se a mudanças devido a refatorações que não alterem sua funcionalidade, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.

- `build` - Commits do tipo build são utilizados quando são realizadas modificações em arquivos de build e dependências.

- `test` - Commits do tipo test são utilizados quando são realizadas alterações em testes, seja criando, alterando ou excluindo testes unitários. (Não inclui alterações em código)

- `chore` - Commits do tipo chore indicam atualizações de tarefas de build, configurações de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (Não inclui alterações em código)


## 🎉 Recomendações

- Adicione um título consistente com o título do conteúdo;
- Recomendamos que na primeira linha deve ter no máximo 4 palavras;
- Para descrever com detalhes, usar a descrição do commit;
- Usar um emoji no início da mensagem de commit representando sobre o commit;
- Um link precisa ser adicionado em sua forma mais autêntica, ou seja: sem encurtadores de link e link safiliados;

## 💻 Exemplo
```bash
git commit -m ":tada: Meu primeiro commit"
```

## 💈 Padrões de emojis

- `Commit inicial`
      🎉 \`:tada:\`

- `Tag de versão`
      🔖 \`:bookmark:\`

- `Novo recurso`
      ✨ \`:sparkles:\` 

- `Bugfix`
      🐛 \`:bug:\`

- `Documentação`
      📚 \`:books:\`  

- `Testes`
      🚨 \`:rotating\_light:\`

- `Adicionando um teste`
      ✅ \`:white\_check\_mark:\`

- `Teste de aprovação`
      ✔️ \`:heavy\_check\_mark:\`

- `Acessibilidade`
      ♿ \`:wheelchair:\`

- `Texto`
      📝 \`:pencil:\`

- `Package.json em JS`
      📦 \`:package:\`

- `Em progresso`
      🚧 \`:construction:\`

- `Arquivos de configuração`
      🔧 \`:wrench:\`

- `Removendo uma dependência`
      ➖ \`:heavy\_minus\_sign:\`

- `Adicionando uma dependência`
      ➕ \`:heavy\_plus\_sign:\`

- `Revertendo mudanças`
      💥 \`:boom:\`

- `Alterações de revisão de código`
      👌 \`:ok\_hand:\`

- `Mover/Renomear`
      🚚 \`:truck:\`