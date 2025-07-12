
# 💡 Thoughts — Compartilhe seus pensamentos

Projeto de estudos que permite os usuários compartilharem pensamentos de forma rápida e organizada. Com uma interface limpa e minimalista, Thoughts permite o cadastro de contas, login seguro, publicação de posts e visualização de conteúdos de outros usuários.

---

## ✨ Funcionalidades

- ✅ Criação de conta
- ✅ Login com validação segura
- ✅ Publicação de posts (pensamentos)
- ✅ Visualização de posts de outros usuários
- ✅ Interface amigável e responsiva
- ✅ Estrutura baseada em arquitetura MVC

---

## 🛠️ Tecnologias Utilizadas

**Frontend:**
- HTML5
- CSS3
- JavaScript (Vanilla)
- Template Engine: Handlebars

**Backend:**
- Node.js
- Express
- Sequelize (ORM)
- MySQL

---

## 🧩 Arquitetura

O projeto segue o padrão **MVC** (Model-View-Controller), separando responsabilidades da seguinte forma:

- **Model:** Definições e interações com o banco de dados via Sequelize.
- **View:** Templates Handlebars renderizados dinamicamente.
- **Controller:** Lógica da aplicação, controle de rotas e regras de negócio.

---

## 📸 Imagens do Projeto


> *As imagens acima ilustram as principais telas do projeto.*

---

## ⚙️ Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/stitch.git
cd stitch
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados:

- Crie um banco MySQL chamado `postdb`
- Atualize o arquivo `.env` com suas credenciais:

```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=stitch_db
DB_DIALECT=mysql
```

4. Rode as migrações e inicie o servidor:

```bash
npx sequelize db:migrate
npm start
```

---

## 🔐 Segurança

- Validações no backend para evitar ações indevidas

---

## 💡 Futuras Melhorias

- Senhas armazenadas com hash
- Sessões controladas para manter o usuário autenticado
- Sistema de curtidas e comentários
- Upload de imagens nos posts
- Página de perfil do usuário
- Modo escuro
---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais informações.
