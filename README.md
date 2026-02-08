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
3. Configura `DATABASE_URL` con tus credenciales de PostgreSQL.
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
