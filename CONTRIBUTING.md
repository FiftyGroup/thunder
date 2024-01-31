# Contribuindo para o Projeto

Antes de contribuir para o projeto, por favor, leia este guia para entender como você pode ajudar.

## Padrão de Commits Semânticos

Para manter um histórico de commits consistente e informativo, siga o [padrão de commit semântico](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716). Isso nos ajuda a entender claramente o propósito de cada commit.

Exemplo do padrão de commit:

⚠️Lembre-se de deixar um espaço após os dois pontos e começar a descrição com letra maiúscula.

```
git commit -m "feat: Add login integration"
```

## Branch por task

Crie uma nova branch para cada tarefa em que estiver trabalhando. O nome da ramificação deve seguir o padrão "tipo/taskId", onde o ID da tarefa pode ser encontrado no card do GitHub.

Exemplo de nome de ramificação:

```
git checkout -b feat/thunder#39
```

## Pull Requests e Merge

Após completar sua tarefa, submeta uma pull request e faça a merge na branch "dev". Certifique-se de mover seu card no GitHub Issues para a coluna "Done" após o merge.

Se você não tiver certeza se sua tarefa está correta, abra uma pull request e solicite uma review.
