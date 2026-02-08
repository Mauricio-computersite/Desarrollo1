# Desarrollo1

## Requisitos

- Node.js 18+
- npm
- PostgreSQL 14+

## Instalación local

1. Clona el repositorio.
2. Crea el archivo de entorno:
   ```bash
   cp .env.example .env
   ```
3. Configura las variables de entorno requeridas:
   - `DATABASE_URL` con tus credenciales de PostgreSQL.
   - `NEXTAUTH_SECRET` (cadena aleatoria segura).
   - `NEXTAUTH_URL` (ejemplo: `http://localhost:3000`).
4. Instala dependencias:
   ```bash
   npm install
   ```
5. Genera el cliente de Prisma:
   ```bash
   npx prisma generate
   ```

## Migraciones y seed (sin ejecutar)

- Crear una migración local:
  ```bash
  npx prisma migrate dev --name init
  ```
- Aplicar migraciones en entornos no interactivos:
  ```bash
  npx prisma migrate deploy
  ```
- Ejecutar el seed (requiere script de seed configurado):
  ```bash
  npx prisma db seed
  ```

## Autenticación local

1. Ejecuta migraciones y seed:
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```
2. Inicia el servidor:
   ```bash
   npm run dev
   ```
3. Ingresa en `http://localhost:3000/login` con:
   - ADMIN: `admin@local.test` / `Admin123!`
   - TECH: `tech1@local.test` / `Tech123!`
   - TECH: `tech2@local.test` / `Tech123!`
