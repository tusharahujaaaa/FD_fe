#!/bin/bash

# Finance Manager Frontend - Setup Script
# This script sets up a React app with all necessary dependencies and folder structure

echo "🚀 Starting Finance Manager Frontend Setup..."

# Step 1: Create React App
echo "📦 Creating React app..."
npx create-react-app finance-manager-frontend
cd finance-manager-frontend

# Step 2: Install dependencies
echo "📚 Installing dependencies..."
npm install react-router-dom axios recharts lucide-react react-hook-form yup @hookform/resolvers

# Step 3: Install Tailwind CSS
echo "🎨 Installing and configuring Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Step 4: Create folder structure
echo "📁 Creating project structure..."

# Create main directories
mkdir -p src/components/auth
mkdir -p src/components/dashboard
mkdir -p src/components/transactions
mkdir -p src/components/categories
mkdir -p src/components/charts
mkdir -p src/components/layout
mkdir -p src/components/common
mkdir -p src/pages/auth
mkdir -p src/pages
mkdir -p src/services
mkdir -p src/context
mkdir -p src/hooks
mkdir -p src/utils
mkdir -p src/styles

# Step 5: Create .env file
echo "🔧 Creating environment file..."
cat > .env << EOF
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_NAME=Finance Manager
EOF

# Step 6: Update tailwind.config.js
echo "⚙️ Configuring Tailwind CSS..."
cat > tailwind.config.js << EOF
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
EOF

# Step 7: Update src/index.css with Tailwind directives
echo "🎨 Setting up Tailwind CSS..."
cat > src/index.css << EOF
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

@layer base {
  html {
    font-family: 'Inter', system-ui, sans-serif;
  }
  
  body {
    @apply bg-gray-50 text-gray-900;
  }
}

@layer components {
  .btn {
    @apply inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200;
  }
  
  .btn-primary {
    @apply bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500;
  }
  
  .btn-secondary {
    @apply bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500;
  }
  
  .btn-success {
    @apply bg-success-600 text-white hover:bg-success-700 focus:ring-success-500;
  }
  
  .btn-danger {
    @apply bg-danger-600 text-white hover:bg-danger-700 focus:ring-danger-500;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-soft border border-gray-200;
  }
  
  .form-input {
    @apply block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500;
  }
  
  .form-label {
    @apply block text-sm font-medium text-gray-700 mb-1;
  }
  
  .nav-link {
    @apply flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200;
  }
  
  .nav-link-active {
    @apply bg-primary-100 text-primary-700;
  }
  
  .nav-link-inactive {
    @apply text-gray-600 hover:bg-gray-50 hover:text-gray-900;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}

/* Loading animation */
.loading-spinner {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
EOF

# Step 8: Create .gitignore additions
echo "📝 Updating .gitignore..."
cat >> .gitignore << EOF

# Environment variables
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db
EOF

# Step 9: Create README.md
echo "📖 Creating README..."
cat > README.md << EOF
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
   \`\`\`bash
   npm install
   \`\`\`

3. Create .env file with your API URL:
   \`\`\`
   REACT_APP_API_BASE_URL=http://localhost:5000/api
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm start
   \`\`\`

## Project Structure

\`\`\`
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
\`\`\`

## Available Scripts

- \`npm start\` - Start development server
- \`npm build\` - Build for production
- \`npm test\` - Run tests
- \`npm run eject\` - Eject from Create React App

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
EOF

# Step 10: Create package.json scripts addition
echo "🔧 Adding useful scripts..."
npm run eject --silent 2>/dev/null || echo "Keeping ejected configuration..."

# Step 11: Success message
echo ""
echo "✅ Finance Manager Frontend setup complete!"
echo ""
echo "🎉 Your project is ready! Next steps:"
echo "1. cd finance-manager-frontend"
echo "2. npm start"
echo ""
echo "📁 Project structure created:"
echo "   - All folders and basic configuration files"
echo "   - Tailwind CSS configured with custom colors"
echo "   - Environment variables set up"
echo "   - Dependencies installed"
echo ""
echo "🚀 Ready to start building your finance app!"
echo ""
echo "Next, you can:"
echo "- Create your first components"
echo "- Set up routing"
echo "- Build authentication"
echo "- Start coding your features"
echo ""
