# API REST Node.js

Este proyecto es una API REST simple construida con Node.js y Express. Proporciona un punto de partida para desarrollar aplicaciones basadas en servicios web y está diseñado para ser fácil de extender y modificar.

## Estructura del Proyecto

```
api-rest-node
├── src
│   ├── app.js                  # Punto de entrada de la aplicación
│   ├── controllers             # Controladores de la API
│   │   └── sampleController.js  # Controlador de ejemplo
│   ├── routes                  # Rutas de la API
│   │   └── sampleRoutes.js     # Rutas de ejemplo
│   └── models                  # Modelos de datos
│       └── sampleModel.js      # Modelo de ejemplo
├── tests                       # Pruebas unitarias
│   └── app.test.js             # Pruebas para la aplicación
├── Dockerfile                  # Archivo para construir la imagen de Docker
├── .github
│   └── workflows               # Flujos de trabajo de GitHub Actions
│       ├── test.yml            # Flujo de trabajo para ejecutar pruebas
│       └── build.yml           # Flujo de trabajo para construir la imagen de Docker
├── package.json                # Configuración del proyecto y dependencias
├── jest.config.js              # Configuración de Jest
└── README.md                   # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <url-del-repositorio>
   cd api-rest-node
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución

Para ejecutar la aplicación, utiliza el siguiente comando:
```
npm start
```

## Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:
```
npm test
```

## Docker

Para construir la imagen de Docker, ejecuta:
```
docker build -t nombre-de-la-imagen .
```

Y para ejecutar el contenedor:
```
docker run -p 3000:3000 nombre-de-la-imagen
```