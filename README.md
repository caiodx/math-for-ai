# 📚 Matemática para IA - Guia de Revisão Interativo

Sistema de aprendizado interativo para revisar conceitos matemáticos essenciais para Inteligência Artificial.

## 🎯 Objetivo

Ajudar desenvolvedores Full Stack a revisar e aprender os conceitos matemáticos fundamentais necessários para a transição para IA/ML.

## 📖 Conteúdo

- **Álgebra Linear**: Vetores, Matrizes, Operações
- **Cálculo**: Derivadas, Gradientes, Otimização
- **Estatística**: Distribuições, Correlação, Medidas de Tendência Central

## 🚀 Como usar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🛠️ Tecnologias

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Recharts (para visualizações)

## 🚀 Deploy e Hospedagem

### Opção 1: Vercel (Recomendado - Mais fácil)

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Conecte seu repositório GitHub
4. Vercel detecta automaticamente o Vite e faz o deploy
5. Pronto! Seu site estará online

**Vantagens**: Deploy automático a cada push, HTTPS gratuito, CDN global

### Opção 2: Netlify

1. Faça push do código para o GitHub
2. Acesse [netlify.com](https://netlify.com)
3. Conecte seu repositório GitHub
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy automático!

**Vantagens**: Similar ao Vercel, também muito fácil

### Opção 3: GitHub Pages

1. Instale o pacote: `npm install --save-dev gh-pages`
2. Adicione no `package.json`:
   ```json
   "homepage": "https://seu-usuario.github.io/math-for-ai",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Execute: `npm run deploy`

**Nota**: Para GitHub Pages, você precisará configurar o `base` no `vite.config.ts`

## 📦 Publicar no GitHub

```bash
# Inicializar repositório (se ainda não tiver)
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Math for AI interactive guide"

# Adicionar repositório remoto (substitua pela URL do seu repositório)
git remote add origin https://github.com/SEU-USUARIO/math-for-ai.git

# Fazer push
git branch -M main
git push -u origin main
```

## 📝 Licença

MIT

