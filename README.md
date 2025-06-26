# 💰 Finance Management Dashboard

A full-stack Finance Management Dashboard built with **React**, **Node.js**, **PostgreSQL**, and **Prisma**, featuring **JWT authentication**, **expense/income tracking**, and future **ML-based budget suggestions**.

---

## 🚀 Features

- 🔐 User authentication with JWT
- 💸 Add & view income/expenses
- 📊 Monthly & category-wise charts (coming soon)
- 🧠 ML-powered smart budget suggestions (coming soon)
- 📱 Fully responsive UI
- 🌐 RESTful API (Express.js)
- 🛡️ Secure endpoints via middleware
- 📦 PostgreSQL with Prisma ORM

---

## 💾 Tech Stack

**Frontend:**
- React (CRA)
- Tailwind CSS
- React Router
- JWT decoding (`jwt-decode`)

**Backend:**
- Node.js + Express
- PostgreSQL
- Prisma ORM
- JWT Auth
- Dotenv & CORS

---

## 🛠️ Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/finance-dashboard.git
cd finance-dashboard
```

---

### 2. Backend Setup

```bash
cd be
npm install
```

Create a `.env` file in `/be`:

```env
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/finance_db"
JWT_SECRET="your_jwt_secret_key"
PORT=5000
```

Then run:

```bash
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

---

### 3. Frontend Setup

```bash
cd ../fe
npm install
npm start
```

> Ensure your frontend makes requests to the correct backend URL (e.g. `http://localhost:5000`).

---

## 📸 Screenshots

> Add screenshots or screen recordings of your dashboard here for visual impact.

---

## 🔮 Upcoming Features

- ✅ Smart budget suggestions using ML
- ✅ Visualized trends using Chart.js or Recharts
- ✅ Multi-device sync and login session persistence
- ✅ Dark mode UI

---

## 🤝 Contributing

1. Fork the project
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes
4. Push and create a Pull Request

---

<!--## 📄 License

This project is licensed under the [MIT License](LICENSE).-->

---

## 🤞 Author

**Tushar Ahuja**  
Frontend & Full Stack Developer  
[LinkedIn](https://www.linkedin.com/in/ahuja-tushar/) 
<!-- • [Portfolio](https://yourportfolio.com) -->

