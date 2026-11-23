# Proyecto Final Backend

API REST desarrollada con Node.js y Express para gestionar productos almacenados en Firebase Firestore. La API también incluye un inicio de sesión sencillo con JWT para proteger las operaciones de creación y eliminación.

## Tecnologías

- Node.js con módulos ES (`type: module`)
- Express
- Firebase Firestore
- JSON Web Token (JWT)
- CORS y `dotenv`

## Requisitos

- Node.js 18 o superior
- Un proyecto de Firebase con Firestore habilitado

## Instalación

1. Clonar o descargar el repositorio.
2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```env
   FIREBASE_API_KEY=tu_api_key
   FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
   FIREBASE_STORAGE_BUCKET=tu_proyecto.firebasestorage.app
   FIREBASE_APP_ID=tu_app_id
   JWT_SECRET_KEY=una_clave_secreta
   ```

   El archivo `.env` no debe subirse al repositorio.

## Ejecución

Iniciar el servidor con:

```bash
npm start
```

La API queda disponible en:

```text
http://localhost:3000
```

## Autenticación

Para obtener un token, realizar un `POST` a `/auth/login` con las credenciales configuradas actualmente en el controlador:

```bash
curl -X POST http://localhost:3000/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"admin@gmail.com\",\"password\":\"123456\"}"
```

La respuesta contiene un token JWT válido durante una hora:

```json
{
  "token": "..."
}
```

Para las rutas protegidas, enviar el token en el encabezado:

```text
Authorization: Bearer <token>
```

> Para un entorno real, se recomienda mover las credenciales del usuario administrador a una configuración segura o a un sistema de usuarios persistente.

## Endpoints

### Autenticación

| Método | Ruta | Autenticación | Descripción |
|---|---|---|---|
| `POST` | `/auth/login` | No | Inicia sesión y devuelve un JWT. |

### Productos

| Método | Ruta | Autenticación | Descripción |
|---|---|---|---|
| `GET` | `/api/products` | No | Devuelve todos los productos. |
| `GET` | `/api/products?category=electronica` | No | Filtra por la categoría indicada. |
| `GET` | `/api/products/:id` | No | Devuelve un producto por su ID de Firestore. |
| `POST` | `/api/products/create` | Sí | Crea un producto. |
| `DELETE` | `/api/products/:id` | Sí | Elimina un producto por su ID. |

### Crear un producto

El cuerpo debe incluir `nombre`, `categoria`, `precio` y `stock`:

```bash
curl -X POST http://localhost:3000/api/products/create ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer <token>" ^
  -d "{\"nombre\":\"Teclado\",\"categoria\":\"periféricos\",\"precio\":25000,\"stock\":10}"
```

Ejemplo de respuesta:

```json
{
  "message": "Producto creado",
  "data": {
    "id": "id-generado-por-firestore",
    "nombre": "Teclado",
    "categoria": "periféricos",
    "precio": 25000,
    "stock": 10
  }
}
```

## Estructura principal

```text
.
├── index.js                 # Configuración y arranque del servidor
└── src
    ├── controllers           # Controladores HTTP
    ├── data                   # Inicialización de Firebase
    ├── middlewares            # Autenticación JWT
    ├── models                 # Operaciones sobre Firestore
    ├── routes                 # Rutas de la API
    ├── services               # Lógica de negocio
    └── utils                  # Generación de tokens
```

## Pruebas

Actualmente no hay pruebas automatizadas configuradas. El comando `npm test` mantiene la configuración predeterminada de npm y finaliza indicando que no hay tests definidos.

## Licencia

Este proyecto utiliza la licencia ISC definida en `package.json`.
