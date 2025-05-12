```markdown
# Consulta de Créditos (Frontend)

## 🔎 Visão Geral

Aplicação Angular para consumo da API de Consulta de Créditos.  
Permite buscar por NFS-e ou por número de crédito, exibindo resultados em tabelas e cards com feedback de carregamento.

---

## 🛠 Stack Tecnológico

- **Angular 16+**  
- **TypeScript**  
- **Angular Material** 
- **RxJS**  
- **SCSS**  
- **Docker** (containerização opcional)  

---

## ✔️ Pré-requisitos

- Node.js (v16 LTS ou superior)  
- npm ou yarn  
- API de backend rodando em `http://localhost:8080` (por padrão)  

---

## 📁 Estrutura de Pastas

```

frontend/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── api.service.ts        # Chamadas HTTP
│   │   ├── shared/
│   │   │   ├── models/               # Interfaces de DTO
│   │   │   └── spinner/              # Spinner global
│   │   ├── consulta/
│   │   │   ├── busca-nfse/           # Componentes de busca por NFS-e
│   │   │   └── busca-credito/        # Componentes de busca por Crédito
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.ts            # URL da API Dev
│   │   └── environment.prod.ts       # URL da API Prod
│   ├── index.html
│   └── styles.scss                   # Variáveis e tema global
├── angular.json
├── package.json
└── tsconfig.json

````

---

## 🚀 Como Rodar em Desenvolvimento

1. Clone o repositório e instale dependências:
   ```bash
   cd frontend
   npm install
````

2. Ajuste a URL da API, se necessário, em `src/environments/environment.ts`:

   ```ts
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8080/api'
   };
   ```
3. Inicie o servidor de desenvolvimento:

   ```bash
   ng serve
   ```
4. Acesse `http://localhost:4200` no navegador.

---

## 🎨 Angular Material

Utilizamos Material para componentes visuais:

* **Toolbar**: cabeçalho com navegação
* **MatCard**: agrupa formulários e resultados
* **MatFormField + MatInput**: campos de busca com validação
* **MatTable**: exibição de listas de créditos
* **MatProgressSpinner**: indicação de carregamento
* **MatSnackBar**: notificações de erro

Todos os módulos estão importados em `AppModule` e `ConsultaModule`.

---

## 🐳 Docker (Opcional)

Você pode gerar uma imagem Docker standalone:

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration=production

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/frontend-consulta-credito /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

1. Build da imagem:

   ```bash
   docker build -t frontend-consulta-credito .
   ```
2. Run do container:

   ```bash
   docker run -d -p 4200:80 frontend-consulta-credito
   ```

---

## 📘 Observações Finais

* **CORS**: garanta que o backend permita origem `http://localhost:4200`
* **Variáveis de Ambiente**: configure `environment.prod.ts` para deploy
* **Deploy**: o conteúdo gerado em `dist/` pode ser servido por qualquer CDN ou servidor web

---

