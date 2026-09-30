# O casal mais lindo do Brasil ❤️

Site estático em HTML, CSS e JavaScript, com as fotos originais. Não precisa instalar pacotes nem executar um build.

## Abrir no VS Code

1. Extraia o ZIP.
2. No VS Code, vá em **Arquivo → Abrir Pasta** e escolha `casal-mais-lindo`.
3. Abra `index.html` no navegador. Você também pode usar a extensão **Live Server** do VS Code.

## Editar os textos

| Arquivo | O que editar |
| --- | --- |
| `index.html` | Nome do casal, título, frase da capa, botão, título da colagem e mensagem final. Procure pelos comentários `EDITE AQUI`. |
| `momentos.js` | Título e descrição de cada um dos sete momentos. |
| `style.css` | Cores, tamanhos, espaçamento e estilos. |
| `assets/` | Fotos e a colagem pronta das outras 12 fotos. |

Exemplo de um momento em `momentos.js`:

```js
{
  foto: 'assets/foto-8.jpg',
  titulo: 'Meu lugar favorito é com você',
  descricao: 'Escreva aqui a história desse dia.',
  alt: 'Nós dois sorrindo à beira do lago',
  posicao: 'center 55%'
},
```

Mantenha as aspas e vírgulas. Se usar apóstrofo em uma frase, prefira aspas duplas nesse texto. `alt` é a descrição da foto para leitores de tela. `posicao` ajusta o enquadramento da foto no carrossel.

As descrições são sugestões: substitua pelos detalhes reais dos seus momentos.

## Fotos

- Capa: `foto-1.jpg`.
- Carrossel: fotos 8, 9, 15, 20, 25, 23 e 12, nessa ordem.
- Colagem: fotos 3, 4, 7, 10, 11, 13, 17, 18, 19, 22, 24 e 26, reunidas em `colagem.jpg`.
- Os arquivos JPG foram otimizados para carregar mais rápido. A colagem usa as fotos reais, sem recriar os rostos.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo, `hugo-e-clara`).
2. Envie **o conteúdo** da pasta `casal-mais-lindo` para a raiz do repositório: `index.html`, os três arquivos de código, `README.md` e a pasta `assets`.
3. O arquivo `index.html` deve aparecer logo na raiz, e não dentro de uma segunda pasta.
4. No repositório, abra **Settings → Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**.
6. Selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
7. Quando a publicação terminar, abra o endereço informado pelo GitHub Pages e envie o link para ela.

As fotos publicadas junto com o site ficam acessíveis a quem abrir a página.

Para atualizar depois, edite os textos no VS Code e envie os arquivos alterados para o mesmo repositório.
