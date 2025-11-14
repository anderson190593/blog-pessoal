# 📝 Projeto: Blog Pessoal com Modo Noturno

![Preview do Blog Pessoal](preview.gif)

Um site de blog front-end completo, com múltiplas páginas e um sistema dinâmico de tema (Modo Noturno). O projeto foi desenvolvido para demonstrar a criação de um site coeso com navegação persistente e manipulação de estado da UI com JavaScript (armazenando a preferência do usuário).

---

### 🎯 Objetivo

O objetivo principal é demonstrar a habilidade de construir um site multi-página estático, gerenciando o estado da navegação (links ativos) e implementando uma funcionalidade interativa avançada (Modo Noturno) que persiste entre as sessões do usuário usando `localStorage`.

---

### 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (ES6+)
* **Tecnologias Web:** HTML5, CSS3 (com Google Fonts)
* **Framework/Biblioteca:** Bootstrap 5 (para o grid, navbar e componentes)
* **Ambiente:** Navegador Web
* **Armazenamento:** Web Storage API (`localStorage`)

---

### 🧱 Estrutura do Código

O projeto é estruturado em múltiplos arquivos HTML para simular um site real, com uma pasta `css` e `js` centralizada.

| Arquivo/Pasta | Propósito Principal |
| :--- | :--- |
| `index.html` | Página principal (Home). |
| `sobre.html` | Página "Sobre Mim". |
| `contato.html` | Página de contato com formulário. |
| `posts.html` | Página com a listagem de todos os posts. |
| `posts/post-1.html` | Exemplo de uma página de post individual. |
| `css/style.css` | Estilização principal e classes do `.dark-mode`. |
| `js/main.js` | **Lógica da Aplicação:** Contém o *listener* do botão de tema. |

---

### 📦 Estrutura dos Dados

* **`localStorage` (Chave: 'theme')**
    Este projeto utiliza a `localStorage` do navegador para armazenar a preferência de tema do usuário (String: `'light'` ou `'dark'`). Isso garante que, ao recarregar a página ou navegar entre as páginas, o tema escolhido (claro ou escuro) seja mantido.

---

### 🔍 Funcionalidades

* **Navegação Multi-Página:** Um site completo com 4 seções principais e páginas de posts individuais.
* **Design Responsivo:** O layout se adapta a desktops e dispositivos móveis.
* **Modo Noturno (Dark Mode):** Um botão na navbar alterna o tema do site.
* **Persistência de Tema:** A escolha do usuário (claro ou escuro) é salva no `localStorage` e carregada automaticamente.
* **Links Ativos:** A navbar destaca visualmente qual página o usuário está visitando.

---

### 🧪 Como Executar

Este é um projeto de front-end estático.

1.  Clone o repositório (ou tenha a pasta do projeto em sua máquina).
2.  Abra o arquivo `index.html` no seu navegador de preferência.
3.  Navegue entre as páginas e teste o botão de Modo Noturno.

---

### 📚 Aprendizado

Este projeto foi fundamental para entender o gerenciamento de estado em um site de múltiplas páginas:

* **Manipulação de Classes CSS:** O núcleo do Modo Noturno foi a função `document.body.classList.toggle('dark-mode')`, demonstrando como o JavaScript pode alterar dinamicamente todo o estilo do site.
* **Uso de `localStorage`:** Aprendi a salvar e recuperar dados simples do navegador, criando uma experiência de usuário persistente.
* **Estrutura de Projeto:** Ganhei experiência na organização de arquivos para um site com várias telas, mantendo um CSS e JS unificado.
* **Hierarquia de Links:** Pratiquei o uso de caminhos relativos (`../`) para navegar corretamente entre as pastas (`/` e `/posts/`).

---

📄 **Licença**
Este projeto está licenciado sob a MIT License.
