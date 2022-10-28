# Next.js Teslo-Shop App
Para iniciar localmente, se necesita la base de datos
```
docker-compose up -d
```

*El -d, significa __detached__


## Configurar las variables de entorno
Renombrar el archivo __.env.template__a__.env__

*MongoDB URL Local:
```
mongodb://localhost:27017/teslodb
```

*Para instalar y levantar la app
```
yarn install
yarn dev
```

## Llenar la base de datos con información de pruebas
Llamar a:
```
http://localhost:3000/api/seed
```
