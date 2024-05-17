FROM node:18

# directorio de trabajo
WORKDIR /app

# Copiar los archivos de package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install --force

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que se ejecuta la aplicación React.js
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
