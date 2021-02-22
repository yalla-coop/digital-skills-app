FROM node:14.15.3-stretch AS client-build
WORKDIR /usr/src/app/client
COPY client/package.json client/package-lock.json ./
RUN npm ci
COPY client/public ./public
COPY client/src ./src
RUN npm run build

FROM node:14.15.3-stretch AS server-build
WORKDIR /usr/src/app/server
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:14.15.3-stretch
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY --from=client-build /usr/src/app/client/build ./client/build
COPY --from=server-build /usr/src/app/server/dist ./dist
COPY package.json package-lock.json ./
RUN npm ci
COPY .env .
EXPOSE 8080
CMD ["node", "dist/index.js"]