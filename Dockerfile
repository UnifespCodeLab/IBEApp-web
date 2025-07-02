FROM node:22-alpine

# Diretório de trabalho, dentro do Container
WORKDIR /app

COPY package.json yarn.lock ./

# Instala dependências
RUN yarn install --frozen-lockfile

# Copia código para container
COPY . .

# Porta
EXPOSE 3000

# Comando para iniciar
CMD ["yarn", "dev"]