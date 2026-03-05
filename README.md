# 🛡️ CyberSecurityNMIT

A modern, interactive website for the CyberSecurity Club at NMIT (Nitte Meenakshi Institute of Technology). Built with cutting-edge web technologies to secure the digital future.

![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646cff?style=flat&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## 🌟 Features

- **Interactive Hero Section** - Eye-catching animated particle background with smooth scroll animations
- **Responsive Design** - Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Team Showcase** - Display and highlight club members with detailed profiles
- **Event Management** - Showcase upcoming events and cybersecurity workshops
- **Gallery** - Visual portfolio of past events and achievements
- **Contact Section** - Easy way for interested members to get in touch
- **Modern Animations** - Smooth transitions and animations using Framer Motion
- **Particle Effects** - Beautiful background particle animations with TSParticles
- **Navigation Bar** - Persistent navbar with scroll detection

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cyber-nmit.git
   cd cyber-nmit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:5173`

---

## 📦 Build & Deployment

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview Build
```bash
npm run preview
```
Preview the production build locally.

### Lint Code
```bash
npm run lint
```
Run ESLint to check code quality.

---

## 🏗️ Project Structure

```
cyber-nmit/
├── src/
│   ├── components/
│   │   ├── About.jsx          # About section
│   │   ├── BackgroundParticles.jsx  # Particle animation component
│   │   ├── Contact.jsx        # Contact form section
│   │   ├── Events.jsx         # Events showcase
│   │   ├── Footer.jsx         # Footer component
│   │   ├── Gallery.jsx        # Image gallery
│   │   ├── Hero.jsx           # Hero/Landing section
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Stats.jsx          # Statistics section
│   │   └── Team.jsx           # Team members showcase
│   ├── styles/
│   │   └── particles.css      # Particle effect styles
│   ├── pics/
│   │   ├── gallery/           # Gallery images
│   │   └── team/              # Team member photos
│   ├── App.jsx                # Main app component
│   ├── App.css                # App styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── public/                    # Static assets
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.0 | UI library |
| **Vite** | 7.3.1 | Build tool & dev server |
| **Framer Motion** | 12.34.3 | Animation library |
| **TSParticles** | 3.0.0 | Particle effects |
| **React Icons** | 5.5.0 | Icon library |
| **ESLint** | 9.39.1 | Code linting |

---

## 📋 Page Sections

### 🎯 Hero
Introduces visitors to CyberSecurityNMIT with an animated tagline and smooth scroll navigation.

### 📖 About
Information about the club, its mission, and what members can learn.

### 👥 Team
Showcase of club leaders and active members with their roles and achievements.

### 🖼️ Gallery
Visual documentation of past events, workshops, and club activities.

### 📅 Events
Upcoming cybersecurity workshops, competitions, and club meetings.

### 📊 Stats
Club achievements, member count, events hosted, and other metrics.

### 📧 Contact
Contact form for inquiries and new member registration.

### 🔗 Footer
Links, social media, and additional information.

---

## 🎨 Customization

### Colors & Styling
All styles are in the `src` folder:
- Global styles: `src/index.css`
- App-specific styles: `src/App.css`
- Particle styles: `src/styles/particles.css`

### Adding New Components
1. Create a new JSX file in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add corresponding styles as needed

### Updating Content
- Team data: Edit `src/components/Team.jsx`
- Events: Edit `src/components/Events.jsx`
- Gallery images: Add images to `src/pics/gallery/`

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel automatically detects Vite and deploys your site

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### GitHub Pages
1. Update `vite.config.js` with your repository name
2. Run `npm run build`
3. Deploy the `dist` folder

---

## 📝 Environment Variables

Create a `.env` file in the root directory if needed:
```env
VITE_API_URL=your_api_endpoint
```

Access in components with `import.meta.env.VITE_API_URL`

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change the port in vite.config.js or use:
npm run dev -- --port 3000
```

### Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### ESLint Errors
```bash
npm run lint
```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📧 Contact & Support

For questions or support:
- **Email**: cybersecurity@nmit.ac.in
- **GitHub Issues**: [Report an issue](https://github.com/yourusername/cyber-nmit/issues)
- **Website**: [CyberSecurityNMIT](https://cyber-nmit.vercel.app)

---

## 👨‍💻 Authors

**CyberSecurity Club - NMIT**

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [TSParticles Documentation](https://tsparticles.js.org/)

---

<div align="center">

**🛡️ Securing the Digital Future 🛡️**

Made with ❤️ by the CyberSecurity Club at NMIT

</div>
