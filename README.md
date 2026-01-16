# BookShop - Online Bookstore

A modern, full-stack bookshop web application built with Next.js, React, and Express.js featuring authentication, dark mode, and a complete book management system.

## Features

### 🏠 Landing Page
- Hero section with call-to-action
- Featured books showcase
- Browse by category
- About section
- Customer testimonials
- Newsletter subscription
- Contact information
- Responsive navbar and footer

### 🔐 Authentication
- NextAuth.js integration
- Credential-based login (Email/Password)
- Google OAuth support
- Protected routes
- Session management with cookies
- Demo credentials: `admin@bookshop.com` / `password123`

### 📚 Book Management
- **Public Items Page**: Browse all books (no login required)
- **Protected Books Page**: Authenticated user book collection
- **Book Details Pages**: Full information for each book
- **Add Item Page**: Protected form to add new books (login required)

### 🎨 UI/UX Features
- Dark/Light theme toggle with next-themes
- Fully responsive design
- Tailwind CSS styling
- Image optimization with Next.js Image
- Smooth transitions and hover effects

### 🔧 Technical Features
- Server-side rendering (SSR)
- Client-side rendering where needed
- RESTful API with Express.js
- In-memory data storage
- Form validation
- Error handling
- Loading states

## Tech Stack

### Frontend
- **Next.js 16.1.2** - React framework with App Router
- **React 19.2.3** - UI library
- **NextAuth.js** - Authentication
- **next-themes** - Theme management
- **Tailwind CSS v4** - Styling
- **Next.js Image** - Image optimization

### Backend
- **Express.js** - REST API server
- **CORS** - Cross-origin resource sharing

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-change-in-production

# Optional: Google OAuth credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. Start the Express API server:
```bash
npm run server
```

5. In a new terminal, start the Next.js development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
my-app/
├── app/                      # Next.js App Router
│   ├── api/auth/            # NextAuth API routes
│   ├── books/               # Protected books pages
│   ├── items/               # Public items pages
│   ├── add-item/            # Protected add item page
│   ├── login/               # Login page
│   ├── layout.jsx           # Root layout
│   ├── page.jsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── FeaturedBooks.jsx
│   ├── ThemeToggle.jsx
│   └── ...
├── server/                  # Express API server
│   └── index.js
├── public/                  # Static assets
├── .env.local              # Environment variables (create this)
├── tailwind.config.js      # Tailwind configuration
├── next.config.mjs         # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start Next.js development server (port 3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run server` - Start Express API server (port 5000)
- `npm run lint` - Run ESLint

## API Endpoints

### Express Server (http://localhost:5000)

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get single book by ID
- `POST /api/books` - Add new book (requires authentication)
- `DELETE /api/books/:id` - Delete book by ID

## Pages

- `/` - Landing page (public)
- `/login` - Login page (public)
- `/items` - Browse all books (public)
- `/items/[id]` - Book details (public)
- `/books` - User's book collection (protected)
- `/books/[id]` - Book details (protected)
- `/add-item` - Add new book form (protected)

## Authentication

### Demo Credentials
- Email: `admin@bookshop.com`
- Password: `password123`

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Add credentials to `.env.local`

## Deployment

### Vercel (Recommended for Next.js)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Express Server
Deploy the Express server separately on:
- Heroku
- Railway
- Render
- DigitalOcean

Update the API URL in the frontend to point to your deployed Express server.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Unsplash for book cover images
- Tailwind CSS for the utility-first CSS framework
