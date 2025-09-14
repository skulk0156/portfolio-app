# Personal Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Interactive Sections**: Hero, About, Skills, Projects, Contact, and Footer
- **Reusable Components**: Modular React components for easy customization
- **Accessible**: Semantic HTML and ARIA attributes for accessibility
- **Fast**: Built with Vite for lightning-fast development and building

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Quick Start

1. **Clone or download this project**
   ```bash
   # If you have the files, navigate to the project directory
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The site will hot-reload as you make changes

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

## 🎨 Customization

### Personal Information
Replace the placeholder content in these files with your own information:

1. **src/components/sections/Hero.jsx** - Name, title, description
2. **src/components/sections/About.jsx** - About text, stats
3. **src/components/sections/Skills.jsx** - Your skills and proficiency levels
4. **src/components/sections/Projects.jsx** - Your projects with descriptions, tech stack, and links
5. **src/components/sections/Contact.jsx** - Your contact information
6. **src/components/sections/Footer.jsx** - Social links and contact details
7. **index.html** - Update title and meta description

### Images
- Add your profile photo to `/public/` and update the Hero component
- Add project screenshots to `/public/projects/` and update project image URLs
- Update the favicon in `/public/`

### Colors & Styling
- Modify `tailwind.config.js` to change the color scheme
- Update gradient colors in `src/index.css`
- Customize animations and transitions

### Content Guidelines
- **Projects**: Add 3-6 of your best projects with:
  - Clear descriptions
  - Technology stack used
  - GitHub repository links
  - Live demo links (if available)
  - High-quality screenshots
- **Skills**: List technologies you're proficient in with realistic skill levels
- **About**: Write a compelling personal story that highlights your journey and passion

## 🚀 Deployment

### Vercel (Recommended) ⭐

This project is optimized for Vercel deployment with automatic configuration.

#### Method 1: GitHub Integration (Easiest)
1. **Push to GitHub**: Commit all your changes and push to a GitHub repository
2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "New Project" and import your GitHub repository
   - Vercel will automatically detect the Vite framework
   - Click "Deploy" - your site will be live in minutes!
3. **Custom Domain** (Optional): Add your custom domain in Vercel dashboard

#### Method 2: Vercel CLI
1. **Install Vercel CLI**: `npm i -g vercel`
2. **Login**: `vercel login`
3. **Deploy**: `vercel --prod`

#### Vercel Configuration
The project includes a `vercel.json` file with:
- Automatic SPA routing
- Optimized build settings
- Security headers
- Cache optimization

### Netlify

1. **Build the project**: `npm run build`
2. **Deploy to Netlify**:
   - Drag and drop the `dist` folder to [netlify.com/drop](https://netlify.com/drop)
   - Or connect your GitHub repo for automatic deployments

### GitHub Pages

1. **Install gh-pages**: `npm install --save-dev gh-pages`
2. **Add to package.json scripts**:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. **Deploy**: `npm run deploy`

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Project Structure

```
portfolio-app/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── sections/       # Page sections (Hero, About, etc.)
│   │   └── ui/            # Reusable UI components
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

## 🎯 Performance Tips

- **Images**: Optimize images before adding them (use WebP format if possible)
- **Icons**: Only import the Lucide icons you actually use
- **Fonts**: The project uses Google Fonts with `font-display: swap` for better performance
- **Build**: The production build is automatically optimized by Vite

## 🐛 Troubleshooting

**Port already in use**: Change the port in `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001  // or any available port
  }
})
```

**Theme not persisting**: Check browser localStorage support and clear cache if needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you create something cool, I'd love to see it.

---

**Ready to make it yours?** Start by updating the personal information in the components and adding your own projects and content. Good luck! 🚀