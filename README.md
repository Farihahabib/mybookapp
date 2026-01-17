# 📚 BookShop - Online Bookstore

A modern, serverless online bookstore built with Next.js 16, featuring a warm and inviting design perfect for book lovers. Browse books, manage your collection, and enjoy a seamless reading discovery experience.

## 🌟 Live Demo

**Production URL:** [https://mybookapp-woad.vercel.app](https://mybookapp-woad.vercel.app)

**Demo Credentials:**
- **Email**: admin@bookshop.com
- **Password**: password123

## ✨ Features

### 🔐 Authentication & Authorization
- **Email/Password Login** - Secure credential-based authentication
- **Google OAuth** - Quick sign-in with Google account
- **Session Management** - Persistent user sessions with NextAuth.js
- **Protected Routes** - Secure pages requiring authentication

### 📖 Book Management
- **Browse Books** - View all available books with beautiful card layouts
- **Book Details** - Detailed view with description, author, genre, and pricing
- **Static Data** - Books loaded from JSON file for fast performance
- **Dynamic Images** - Support for external image URLs with fallback placeholders
- **Demo Mode** - Add/Delete functionality shows demo messages

### 🎨 User Interface
- **Warm Bookshop Theme** - Cozy amber/brown color scheme in light mode
- **Dark Mode** - Full dark theme support with smooth transitions
- **Responsive Design** - Mobile-first design that works on all devices
- **Toast Notifications** - User feedback for actions (login, logout, contact)
- **Active Navigation** - Visual indicators for current page
- **Smooth Animations** - Hover effects and transitions throughout

### 📄 Additional Pages
- **Contact Page** - Contact form with business information
- **Privacy Policy** - Comprehensive privacy policy page
- **Landing Page** - Featured books, categories, testimonials, and newsletter signup

## 🛠️ Tech Stack

- **Frontend**: Next.js 16.1.2, React 19.2.3
- **Styling**: Tailwind CSS v4
- **Authentication**: NextAuth.js with Google OAuth
- **Data**: Static JSON file (serverless)
- **Notifications**: React Hot Toast
- **Theme**: next-themes for dark mode
- **Deployment**: Vercel

## 🏗️ Architecture

```
📦 Serverless Architecture
├── 🌐 Frontend (Next.js)
├── 🔐 Authentication (NextAuth API Routes)
├── 📊 Data (Static JSON)
└── 🚀 Deployment (Vercel)
```

**No separate backend server required!**

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Google OAuth credentials (optional, for Google login)

## 🚀 Setup & Installation

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd mybookapp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

**Get Google OAuth Credentials:**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

### 4. Start the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 📍 Routes Summary

### Public Routes
- `/` - Landing page with featured books and sections
- `/login` - Login page with email/password and Google OAuth
- `/contact` - Contact page with form and business info
- `/privacy` - Privacy policy page

### Protected Routes (Require Authentication)
- `/books` - Browse all books
- `/books/[id]` - View individual book details
- `/add-item` - Add new books form (demo mode)

### API Routes
- `/api/auth/[...nextauth]` - NextAuth.js authentication endpoints

### Data Source
- `/public/data/books.json` - Static book data

## 🎯 Implemented Features

### 1. Authentication System
- Dual authentication methods (credentials + OAuth)
- Secure session management
- Login/logout with toast notifications
- Protected route middleware

### 2. Book Catalog
- Static JSON data loading
- Responsive grid layout
- Image optimization with Next.js Image component
- Fast loading with static generation

### 3. Book Details
- Full book information display
- Author, genre, price, and description
- Graceful image error handling
- Individual book pages

### 4. Demo Features
- Add book form (shows demo message)
- Delete functionality (shows demo message)
- Form validation and UI feedback

### 5. Theme System
- Light/Dark mode toggle
- Persistent theme preference
- Smooth color transitions
- Custom warm bookshop color palette

### 6. Contact System
- Contact form with validation
- Business hours and location info
- Success toast on form submission
- Email and phone contact details

### 7. User Experience
- Loading states for async operations
- Error handling with user-friendly messages
- Active navigation indicators
- Smooth page transitions
- Mobile-responsive navigation

## 🎨 Color Theme

### Light Mode (Bookshop Theme)
- Background: Warm cream/beige (#faf8f5)
- Primary: Rich brown (#8b5a3c)
- Text: Dark brown (#2d2424)
- Accents: Amber tones

### Dark Mode
- Background: Deep black (#0a0a0a)
- Primary: Warm gold (#d4af37)
- Text: Off-white (#fafafa)
- Accents: Zinc grays

## 📦 Project Structure

```
mybookapp/
├── app/
│   ├── add-item/          # Add book page (demo)
│   ├── api/auth/          # NextAuth API routes
│   ├── books/             # Books listing & details
│   ├── contact/           # Contact page
│   ├── login/             # Login page
│   ├── privacy/           # Privacy policy
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   └── page.jsx           # Landing page
├── components/            # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── FeaturedBooks.jsx
│   └── ...
├── public/
│   └── data/
│       └── books.json     # Static book data
├── public/                # Static assets
└── package.json
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start Next.js dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to production"
   git push
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `NEXTAUTH_URL` = `https://your-domain.vercel.app`
     - `NEXTAUTH_SECRET` = `your-secret-key`
     - `GOOGLE_CLIENT_ID` = `your-google-client-id`
     - `GOOGLE_CLIENT_SECRET` = `your-google-client-secret`
   - Deploy!

3. **Update Google OAuth**
   - Add production URL to authorized redirect URIs
   - `https://your-domain.vercel.app/api/auth/callback/google`

### Other Platforms

This app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📊 Performance

- ✅ **Static Generation** - Most pages pre-rendered at build time
- ✅ **Image Optimization** - Next.js automatic image optimization
- ✅ **Code Splitting** - Automatic code splitting for faster loads
- ✅ **Serverless** - No server maintenance required
- ✅ **CDN** - Global content delivery via Vercel

## 🔒 Security

- ✅ **NextAuth.js** - Industry-standard authentication
- ✅ **CSRF Protection** - Built-in CSRF protection
- ✅ **Secure Headers** - Next.js security headers
- ✅ **Environment Variables** - Sensitive data in env vars
- ✅ **OAuth 2.0** - Secure Google authentication

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- NextAuth.js for authentication
- Vercel for seamless deployment
- Unsplash for book cover images

## 📧 Contact

For questions or support, please visit the [Contact Page](https://mybookapp-woad.vercel.app/contact) or reach out at support@bookshop.com

---

Made with ❤️ and ☕ by BookShop Team
