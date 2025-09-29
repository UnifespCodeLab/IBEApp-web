FROM node:22-alpine

# Diretório de trabalho, dentro do Container
WORKDIR /app

COPY package.json yarn.lock ./

# Instala dependências
RUN yarn install

# Copia código para container
COPY --chown=app:app . .

# Porta
EXPOSE 3000

# Comando para iniciar
CMD ["yarn", "dev"]