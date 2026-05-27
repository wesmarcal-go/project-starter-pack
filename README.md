# Project Starter Pack

Um conjunto de skills para trabalhar com Claude (ou qualquer outro agente) de forma mais intencional — do contexto pessoal até a criação de novas capacidades.

## O que é isso

Skills são instruções empacotadas que o Claude carrega sob demanda. Este repositório reúne três skills que formam um ciclo: você se apresenta ao Claude, testa suas ideias com rigor e, quando precisa de algo novo, constrói a skill para isso.

```
create-a-context → grill-me → write-a-skill
      ↑                              |
      └──────────── loop ────────────┘
```

## Skills incluídas

### `create-a-context`

Conduz uma entrevista guiada e gera dois arquivos de contexto:

- **CLAUDE.md** — identidade profissional, princípios, stack, workflows, tom de comunicação e o que não fazer. É o "manual do usuário" que você entrega ao Claude para que ele responda no seu estilo.
- **PRODUCT_CONTEXT.md** _(fase 2, opcional)_ — descreve o produto onde você opera: personas, métricas, decisões recentes, competidores e anti-positioning.

Dispara quando você pede: `"cria meu CLAUDE.md"`, `"monta meu contexto"`, `"cria contexto do produto"`.

### `grill-me`

Conduz um interrogatório implacável sobre um plano ou design até que cada galho da árvore de decisão esteja resolvido. Para cada pergunta, o Claude fornece a resposta que recomenda — o objetivo não é aprovar seu plano, é expor o que você ainda não pensou.

Dispara quando você pede: `"me grila"`, `"stress-test esse plano"`, `"grill me"`.

### `write-a-skill`

Cria novas skills com estrutura correta, progressive disclosure e recursos empacotados. Cobre coleta de requisitos, draft do `SKILL.md`, arquivos de referência separados quando o conteúdo cresce, e scripts utilitários quando a operação é determinística.

Dispara quando você pede: `"escreve uma skill para X"`, `"cria uma skill"`, `"constrói uma skill"`.

## Como usar

Instale as skills no seu projeto Claude Code copiando a pasta `.claude/skills/` para a raiz do projeto desejado, ou referencie este repositório como source de skills.

```bash
cp -r .claude/skills/ /seu-projeto/.claude/skills/
```

Depois é só pedir ao Claude pela descrição da skill — ele carrega automaticamente.

## Ordem recomendada para novos projetos

1. **`create-a-context`** — faça isso uma vez por identidade profissional/produto. Quanto mais específico, melhor o output de todas as outras interações.
2. **`grill-me`** — use antes de qualquer decisão importante. O Claude já vai ter seu contexto e vai questionar com mais precisão.
3. **`write-a-skill`** — quando perceber um padrão repetitivo nas suas conversas com o Claude, empacote como skill.

## Estrutura do repositório

```
.claude/
└── skills/
    ├── create-a-context/
    │   ├── SKILL.md
    │   ├── QUESTIONS.md
    │   ├── TEMPLATE.md
    │   ├── PRODUCT_QUESTIONS.md
    │   └── PRODUCT_TEMPLATE.md
    ├── grill-me/
    │   └── SKILL.md
    └── write-a-skill/
        └── SKILL.md
```
