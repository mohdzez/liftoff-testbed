FROM alpine:node

Copy ./ ./ 
RUN npm I

CMD ["npm", "start"]