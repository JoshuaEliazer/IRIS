# Iris — Senior Citizen Care Platform

> **Care. Connect. Protect.**

Iris is a full-stack senior citizen care and assistance platform built for hackathon. It connects seniors with caretakers through a secure, role-based platform.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js + Vite + JavaScript + Tailwind CSS |
| Backend | Node.js + Express.js + REST API |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcrypt |

---

## Project Structure

```
Iris/
├── backend/
│   ├── src/
│   │   ├── config/db.js
│   │   ├── controllers/authController.js
│   │   ├── middleware/auth.js
│   │   ├── middleware/role.js
│   │   ├── models/User.js
│   │   └── routes/authRoutes.js, healthRoutes.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   └── src/
│       ├── components/Navbar.jsx
│       ├── context/AuthContext.jsx
│       ├── pages/ (Landing, Login, Register, Dashboards, Settings)
│       ├── routes/ (ProtectedRoute, RoleRoute)
│       ├── services/ (api.js, auth.js)
│       ├── App.jsx
│       └── index.css
├── .gitignore
└── README.md
```

---

## Environment Variables

Create `backend/.env` from `.env.example`:

```env
MONGODB_URI=mongodb://localhost:27017/iris
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
```

---

## Getting Started

### Backend

```bash
cd backend
npm install
npm run dev       # Uses nodemon — auto-restarts on changes
# OR
npm start         # Production
```

Server runs at: **http://localhost:5000**

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs at: **http://localhost:5173**

---

## API Reference

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/health` | — | Health check |
| POST | `/api/auth/register` | — | Register new user |
| POST | `/api/auth/login` | — | Login + get JWT |
| GET | `/api/auth/me` | Bearer JWT | Get current user |

---

## Pages

| Route | Page | Access |
|---|---|---|
| `/` | Landing | Public |
| `/login` | Login | Public |
| `/register` | Register | Public |
| `/senior/dashboard` | Senior Dashboard | Seniors only |
| `/caretaker/dashboard` | Caretaker Dashboard | Caretakers only |
| `/settings` | Settings | Any authenticated user |

---

## Features (v1.0 — Foundation)

- ✅ JWT authentication (register, login, logout)
- ✅ Role-based access (Senior / Caretaker)
- ✅ Protected & role-guarded routes
- ✅ Dashboards per role
- ✅ Settings page (Account, Preferences, Security)
- ✅ Fully responsive, mobile-friendly UI
- ✅ Senior-friendly design (large buttons, clear labels)

## Coming Soon (Future Phases)

- Health monitoring & vitals tracking
- Medicine reminders
- Appointment scheduling
- Caretaker-senior assignment
- Emergency SOS alerts
- Family notifications
- Real-time messaging