# 🎨 Creative Developer Portfolio

A stunning, modern portfolio website built with React and Vite, designed to make a lasting impression.

## ✨ Features

- **Interactive Mouse Tracking Glow** - Dynamic background effect that follows your cursor
- **Smooth Scroll Navigation** - Seamless section transitions
- **Animated Floating Shapes** - Beautiful ambient animations
- **Gradient Text Effects** - Eye-catching animated gradients
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Modern UI Components** - Cards, buttons, and forms with hover effects
- **Stats Section** - Showcase your achievements
- **Project Gallery** - Display your best work with style
- **Contact Form** - Easy way for clients to reach you
- **Dark Theme** - Elegant dark mode design

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 19** - Latest React with hooks
- **Vite 8** - Lightning-fast build tool
- **CSS3** - Custom animations and gradients
- **Intersection Observer** - Scroll-based animations

## 📁 Project Structure

```
portfolio/
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Main application component
│   └── App.css         # All styles and animations
└── README.md           # This file
```

## 🎯 Customization

### Update Personal Info
Edit `src/App.jsx`:
- Change name in the hero section
- Update bio and description
- Modify stats numbers
- Add your real projects
- Update social media links

### Customize Colors
Edit `src/App.css` CSS variables:
```css
:root {
  --bg-primary: #0a0a0f;
  --accent-1: #ff6b6b;
  --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* ... more variables */
}
```

### Add Real Projects
In `src/App.jsx`, update the `projects` array:
```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Description here',
    tags: ['React', 'Node.js'],
    color: '#yourcolor'
  }
]
```

## 🌟 Making It Memorable

This portfolio includes several memorable features:

1. **Cursor Glow Effect** - Creates an interactive experience
2. **Floating Animated Shapes** - Adds depth and movement
3. **Gradient Animations** - Continuously shifting colors catch the eye
4. **Hover Transformations** - Cards and buttons respond to interaction
5. **Smooth Scrolling** - Professional navigation experience
6. **Stat Cards** - Quantifiable achievements build credibility
7. **Clean Typography** - Easy to read, modern font choices

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
# Connect to Vercel for automatic deployment
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 📄 License

MIT License - Feel free to use this for your own portfolio!

---

Made with ❤️ and creativity
