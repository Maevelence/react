FROM node:20.18.0-alpine as build_img 
WORKDIR /typescript-app
ENV PATH /typescript-app/node_modules/.bin:$PATH

COPY  package.json /.
COPY  package-lock.json ./ 
RUN npm install --silent && npm install react-scripts@5.0.1 -g --silent
COPY . ./ 
CMD [ "npm", "start"] 