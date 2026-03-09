# UTS ASJ - Microservices Docker

Project ini menggunakan Docker Compose untuk menjalankan beberapa service:

Services:
- Frontend (Port 3000)
- Backend (Port 5000)
- API Service (Port 8080)
- PostgreSQL Database
- MinIO Object Storage

Cara menjalankan:

docker compose up -d

Cek container:

docker ps

Akses aplikasi:

Frontend
http://192.168.3.246:3000

Backend
http://192.168.3.246:5000

API
http://192.168.3.246:8080

MinIO Dashboard
http://192.168.3.246:9003

