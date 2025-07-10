# Finance Manager Frontend

A modern, responsive finance management application built with React and Tailwind CSS.

## Features

- 🔐 User Authentication (JWT)
- 💰 Transaction Management
- 📊 Categories Management
- 📈 Visual Charts & Analytics
- 🎯 Budget Tracking
- 📱 Mobile Responsive

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Forms**: React Hook Form + Yup
- **HTTP Client**: Axios
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create .env file with your API URL:
   ```
   REACT_APP_API_BASE_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── dashboard/      # Dashboard components
│   ├── transactions/   # Transaction components
│   ├── categories/     # Category components
│   ├── charts/         # Chart components
│   ├── layout/         # Layout components
│   └── common/         # Common/shared components
├── pages/              # Page components
├── services/           # API services
├── context/            # React Context
├── hooks/              # Custom hooks
├── utils/              # Utility functions
└── styles/             # Global styles
```

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
