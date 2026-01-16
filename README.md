# 📚 BookShop - Online Bookstore

A modern, full-stack online bookstore built with Next.js 16, featuring a warm and inviting design perfect for book lovers. Browse books, manage your collection, and enjoy a seamless reading discovery experience.

## ✨ Features

### 🔐 Authentication & Authorization
- **Email/Password Login** - Secure credential-based authentication
- **Google OAuth** - Quick sign-in with Google account
- **Session Management** - Persistent user sessions with NextAuth.js
- **Protected Routes** - Secure pages requiring authentication

### 📖 Book Management
- **Browse Books** - View all available books with beautiful card layouts
- **Book Details** - Detailed view with description, author, genre, and pricing
- **Add Books** - Authenticated users can add new books to the collection
- **Dynamic Images** - Support for external image URLs with fallback placeholders
- **Real-time Updates** - Books fetched from Express API backend

### 🎨 User Interface
- **Warm Bookshop Theme** - Cozy amber/brown color scheme in light mode
- **Dark Mode** - Full dark theme support with smooth transitions
- **Responsive Design** - Mobile-first design that works on all devices
- **Toast Notifications** - User feedback for actions (login, logout, add book, contact)
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
- **Backend**: Express.js (Node.js)
- **Notifications**: React Hot Toast
- **Theme**: next-themes for dark mode

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

# API URL
NEXT_PUBLIC_API_URL=http://localhost:5000
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

### 4. Start the Backend Server

```bash
npm run server
```

The Express API will run on `http://localhost:5000`

### 5. Start the Development Server

Open a new terminal and run:

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
- `/add-item` - Add new books to the collection

### API Routes
- `/api/auth/[...nextauth]` - NextAuth.js authentication endpoints

### Backend API Endpoints
- `GET /api/books` - Fetch all books
- `GET /api/books/:id` - Fetch single book by ID
- `POST /api/books` - Add a new book
- `DELETE /api/books/:id` - Delete a book

## 🎯 Implemented Features

### 1. Authentication System
- Dual authentication methods (credentials + OAuth)
- Secure session management
- Login/logout with toast notifications
- Protected route middleware

### 2. Book Catalog
- Dynamic book listing from API
- Search and filter by genre
- Responsive grid layout
- Image optimization with Next.js Image component

### 3. Book Details
- Full book information display
- Author, genre, price, and description
- Add to cart button (UI ready)
- Wishlist button (UI ready)
- Graceful image error handling

### 4. Add Book Feature
- Form validation
- Real-time feedback with toasts
- Support for custom image URLs
- Genre selection dropdown
- Auto-redirect after successful addition

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
│   ├── add-item/          # Add book page
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
├── server/
│   └── index.js           # Express backend
├── public/                # Static assets
└── package.json
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start Next.js dev server
npm run server       # Start Express backend

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to Vercel and backend hosting options.

### Quick Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

## 📝 Demo Credentials

For testing without Google OAuth:

- **Email**: admin@bookshop.com
- **Password**: password123

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
- Unsplash for book cover images

## 📧 Contact

For questions or support, please visit the [Contact Page](/contact) or reach out at support@bookshop.com

---

Made with ❤️ and ☕ by BookShop Team
