#Imagem do node
FROM node:18-alpine

#Diretório de trabalho
WORKDIR /app

#Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json .

#Instala as dependências
RUN npm install

#Copia o resto dos arquivos
COPY . .

#Expõe a porta 5173
EXPOSE 5173

#Executa o comando npm run dev
CMD [ "npm", "run", "dev" ]