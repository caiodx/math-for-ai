# 🚀 Guia de Deploy - Matemática para IA

Este guia explica como publicar o sistema no GitHub e hospedá-lo na web.

## 📋 Pré-requisitos

- Conta no GitHub
- Node.js instalado
- Git instalado

## 1️⃣ Publicar no GitHub

### Passo 1: Criar repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Nome: `math-for-ai` (ou outro nome de sua escolha)
4. Escolha público ou privado
5. **NÃO** marque "Initialize with README" (já temos um)
6. Clique em "Create repository"

### Passo 2: Conectar repositório local

Abra o terminal na pasta do projeto e execute:

```bash
# Verificar se já é um repositório Git
git status

# Se não for, inicializar
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "feat: initial commit - Math for AI interactive guide"

# Adicionar repositório remoto (SUBSTITUA pelo seu usuário)
git remote add origin https://github.com/caiodx/math-for-ai.git

# Renomear branch para main (se necessário)
git branch -M main

# Fazer push
git push -u origin main
```

**Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub!**

## 2️⃣ Hospedar na Web

### 🟢 Opção 1: Vercel (RECOMENDADO - Mais fácil)

**Por que escolher Vercel:**
- ✅ Deploy automático a cada push
- ✅ HTTPS gratuito
- ✅ CDN global (site rápido no mundo todo)
- ✅ Zero configuração
- ✅ Domínio personalizado gratuito

**Passos:**

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up" e faça login com GitHub
3. Clique em "Add New Project"
4. Selecione o repositório `math-for-ai`
5. Vercel detecta automaticamente:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Clique em "Deploy"
7. Aguarde ~1-2 minutos
8. **Pronto!** Seu site estará online em uma URL como: `math-for-ai.vercel.app`

**Deploy automático:** A cada push no GitHub, o Vercel faz deploy automaticamente!

---

### 🔵 Opção 2: Netlify

**Por que escolher Netlify:**
- ✅ Similar ao Vercel
- ✅ Deploy automático
- ✅ HTTPS gratuito
- ✅ Fácil de usar

**Passos:**

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Sign up" e faça login com GitHub
3. Clique em "Add new site" → "Import an existing project"
4. Selecione o repositório `math-for-ai`
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Clique em "Deploy site"
7. Aguarde o deploy
8. **Pronto!** URL será algo como: `math-for-ai.netlify.app`

---

### 🟡 Opção 3: GitHub Pages

**Por que escolher GitHub Pages:**
- ✅ Totalmente gratuito
- ✅ Integrado ao GitHub
- ⚠️ Requer configuração adicional

**Passos:**

1. Instale o pacote gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Atualize o `package.json`:
   ```json
   {
     "homepage": "https://SEU-USUARIO.github.io/math-for-ai",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Atualize o `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/math-for-ai/' // Nome do seu repositório
   })
   ```

4. Execute o deploy:
   ```bash
   npm run deploy
   ```

5. No GitHub, vá em Settings → Pages
6. Selecione a branch `gh-pages` como source
7. Seu site estará em: `https://SEU-USUARIO.github.io/math-for-ai`

---

## 🔄 Atualizar o Site

### Com Vercel/Netlify:
- Basta fazer `git push` - o deploy é automático!

### Com GitHub Pages:
- Execute `npm run deploy` após cada mudança

## 🌐 Domínio Personalizado

Todas as plataformas permitem adicionar seu próprio domínio:
- **Vercel**: Settings → Domains
- **Netlify**: Site settings → Domain management
- **GitHub Pages**: Settings → Pages → Custom domain

## ❓ Problemas Comuns

### Erro 404 ao navegar entre páginas
- **Solução**: Os arquivos `vercel.json` e `netlify.toml` já resolvem isso com redirects

### Build falha
- Verifique se todas as dependências estão no `package.json`
- Execute `npm install` localmente para testar

### Site não atualiza
- Limpe o cache do navegador (Ctrl+Shift+R)
- Verifique se o deploy foi concluído na plataforma

## 📊 Comparação Rápida

| Plataforma | Facilidade | Deploy Auto | Performance | Recomendado |
|------------|------------|-------------|-------------|-------------|
| Vercel     | ⭐⭐⭐⭐⭐ | ✅ | ⭐⭐⭐⭐⭐ | ✅ Sim |
| Netlify    | ⭐⭐⭐⭐⭐ | ✅ | ⭐⭐⭐⭐ | ✅ Sim |
| GitHub Pages | ⭐⭐⭐ | ❌ | ⭐⭐⭐ | ⚠️ Se já usa GitHub |

---

**Recomendação final:** Use **Vercel** para começar rapidamente! 🚀

