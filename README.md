# 🏋️ FitZone Gym Website

A modern, responsive gym website built with Next.js 14, featuring stunning animations, glassmorphism effects, and a complete booking system.

## ✨ Features

### 🎨 Design & UX
- **Dark Theme**: Modern dark design with electric red (#E0161B) and vibrant orange (#FF6B00) accents
- **Glassmorphism Effects**: Beautiful glass-like components with backdrop blur
- **Smooth Animations**: Powered by Framer Motion with scroll-reveal and parallax effects
- **Responsive Design**: Perfect on all devices from mobile (360px) to desktop (1920px+)
- **Accessibility**: WCAG AA compliant with keyboard navigation support

### 🚀 Performance
- **Next.js 14**: Latest App Router with TypeScript
- **Optimized Images**: Next.js Image component with blur placeholders
- **Lighthouse Score**: 90+ on both mobile and desktop
- **Fast Loading**: Optimized assets under 400KB total

### 💼 Business Features
- **Hero Video Background**: Autoplay fitness montage with overlay
- **Class Booking System**: Interactive class cards with schedules
- **Trainer Profiles**: Horizontal scroll carousel with social links
- **Membership Pricing**: Three-tier pricing with popular plan highlight
- **Testimonials Slider**: Auto-playing customer reviews
- **Contact System**: Email handling with nodemailer
- **Newsletter Signup**: Email subscription with validation

### 🛠️ Technical Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Components**: shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins (body) + Bebas Neue (headings)
- **Email**: Nodemailer for contact forms
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint + Prettier + Husky

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd gym-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your SMTP settings:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@fitzone.com
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Page Sections

1. **Sticky Navbar** - Logo, navigation links, "Join Now" CTA
2. **Hero Section** - Full-viewport video background with glassmorphism CTA
3. **About Us** - Mission statement with animated KPI counters
4. **Classes Grid** - 6 fitness classes with flip hover effects
5. **Trainer Spotlight** - Horizontal scroll carousel with social links
6. **Pricing Plans** - Three membership tiers with popular badge
7. **Testimonials** - Auto-playing slider with star ratings
8. **CTA Stripe** - Full-width gradient call-to-action
9. **Footer** - Contact form, location, social links, newsletter
10. **Floating Button** - Bottom-right booking button with pulse effect

## 🎨 Design System

### Colors
- **Primary**: Electric Red (#E0161B)
- **Secondary**: Vibrant Orange (#FF6B00)
- **Background**: Dark (#0d0d0d)
- **Gradient**: Cyan → Blue → Orange

### Typography
- **Headings**: Bebas Neue (bold, uppercase)
- **Body**: Poppins (clean, readable)

### Animations
- **Hover Effects**: Scale 105%, glow ring, spring 0.4s
- **Scroll Reveals**: Fade/slide in on viewport entry
- **Micro Interactions**: Button press, icon rotations

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Build
```bash
npm run build
npm run start
```

## 📊 Performance Optimizations

- **Image Optimization**: WebP/AVIF formats with blur placeholders
- **Code Splitting**: Automatic with Next.js App Router
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Lazy Loading**: Components load on scroll/interaction
- **Prefetching**: Critical resources preloaded

## 🔒 Security Features

- **CSRF Protection**: Built-in Next.js security
- **Input Validation**: Zod schema validation
- **Rate Limiting**: API route protection
- **Environment Variables**: Secure configuration
- **Content Security Policy**: Headers configured

## 🌟 SEO Features

- **Meta Tags**: Comprehensive Open Graph and Twitter cards
- **Structured Data**: JSON-LD for gym business
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **Performance**: Core Web Vitals optimized

## 📋 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run tests
npm run format       # Format code with Prettier
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email info@fitzone.com or create an issue in the repository.

---

Built with ❤️ using Next.js 14, Tailwind CSS, and Framer Motion 