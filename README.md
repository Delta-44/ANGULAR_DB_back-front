# ANGBD - Angular + Node.js + MariaDB

Proyecto full-stack con Angular frontend, Node.js/Express backend, y MariaDB como base de datos.

## 🚀 Estructura del Proyecto

```
AngBD/
├── backend/          # API REST con Node.js + Express + TypeScript
├── frontend/         # Aplicación Angular
└── DB/              # Configuración de base de datos con Docker
```

## 📋 Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- Docker y Docker Compose (para la base de datos)
- Git

## 🔧 Configuración Inicial

### 1. Clonar el repositorio

```bash
git clone https://github.com/Delta-44/ANGULAR_DB_back-front.git
cd ANGULAR_DB_back-front
```

### 2. Configurar Backend

```bash
cd backend
npm install

# Copiar el archivo de variables de entorno
cp .env.example .env

# Editar .env con tus credenciales reales
# nano .env o usa tu editor preferido
```

**⚠️ IMPORTANTE**: Actualiza las siguientes variables en `backend/.env`:
- `JWT_SECRET`: Genera uno seguro con `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
- `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET`: Obtén tus credenciales OAuth desde [Google Cloud Console](https://console.cloud.google.com/apis/credentials)

### 3. Configurar Frontend

```bash
cd ../frontend
npm install
```

### 4. Configurar Base de Datos

```bash
cd ../DB
docker-compose up -d
```

Esto levantará un contenedor MariaDB con:
- Puerto: 3309
- Usuario: demo_user
- Contraseña: demo_pass (para desarrollo local)
- Base de datos: demo_db

## 🎯 Ejecución del Proyecto

### Backend

```bash
cd backend
npm run dev    # Modo desarrollo con hot-reload
# o
npm start      # Modo producción
```

El backend estará disponible en `http://localhost:3000`

### Frontend

```bash
cd frontend
npm start      # Inicia el servidor de desarrollo
```

El frontend estará disponible en `http://localhost:4200`

## 🔐 Seguridad

**NUNCA** subas al repositorio:
- Archivos `.env` con credenciales reales
- `node_modules/`
- Información sensible de Google OAuth

## 🗄️ Base de Datos

El script de inicialización se encuentra en `DB/init/init.sql` y se ejecuta automáticamente al levantar el contenedor.

Para conectarte a la base de datos:
```bash
docker exec -it mariadb-angular mysql -u demo_user -p demo_db
# Contraseña: demo_pass
```

## 🛠️ Tecnologías Utilizadas

### Backend
- Node.js + Express
- TypeScript
- Passport.js (Google OAuth)
- MySQL2 (conexión a MariaDB)
- Zod (validación de esquemas)

### Frontend
- Angular (última versión)
- TypeScript
- TailwindCSS

### Base de Datos
- MariaDB 11

## 📝 Scripts Disponibles

### Backend
- `npm run dev` - Inicia el servidor en modo desarrollo
- `npm start` - Inicia el servidor en modo producción
- `npm run build` - Compila TypeScript a JavaScript

### Frontend
- `npm start` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm test` - Ejecuta tests

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Delta-44**

- GitHub: [@Delta-44](https://github.com/Delta-44)
