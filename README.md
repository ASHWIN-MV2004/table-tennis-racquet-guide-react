# 🏓 Table Tennis Racquet Guide React

A comprehensive web application designed to help beginners choose the perfect table tennis racquet. This React-based website provides detailed information about different types of racquets, key factors to consider, and expert recommendations.

![Table Tennis Racquet Guide](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)

## 🌟 Features

- **📖 Comprehensive Overview**: Detailed guide on choosing the right table tennis racquet
- **🎯 Racquet Types**: Information about different types of racquets for various skill levels
- **💡 Expert Recommendations**: Curated list of recommended racquets with purchase links
- **📱 Responsive Design**: Fully responsive layout that works on all devices
- **🎨 Modern UI**: Clean and intuitive user interface with smooth animations
- **✉️ Contact Form**: Functional contact form with validation
- **🔍 Easy Navigation**: Single-page application with smooth routing

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd fsd_webpage
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Fix file watchers limit (Linux users only)**

   ```bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Build for Production

To create a production-ready build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

To serve the production build locally:

```bash
npm install -g serve
serve -s build
```

## 📁 Project Structure

```
fsd_webpage/
├── public/
│   ├── images/           # Racquet images
│   │   ├── racquet1.jpg
│   │   ├── racquet2.jpg
│   │   └── racquet3.jpg
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/       # React components
│   │   ├── images/       # Background images
│   │   ├── Contact.js    # Contact form component
│   │   ├── Contact.css
│   │   ├── Footer.js     # Footer component
│   │   ├── Header.js     # Navigation header
│   │   ├── Overview.js   # Main guide content
│   │   ├── Overview.css
│   │   ├── Recommendations.js # Racquet recommendations
│   │   ├── Recommendations.css
│   │   ├── Types.js      # Racquet types information
│   │   └── Types.css
│   ├── App.js           # Main application component
│   ├── App.css          # Global styles
│   ├── index.js         # Application entry point
│   └── index.css        # Base styles
├── package.json
└── README.md
```

## 🧭 Navigation

The application features four main sections:

1. **Overview** (`/`) - Comprehensive guide covering:

   - Weight considerations (70-100 grams)
   - Grip sizes (Small, Medium, Large)
   - Blade materials (Wood types, Composite blades)
   - Rubber types (Inverted, Pips-Out)

2. **Types of Racquets** (`/types`) - Detailed table showing:

   - Beginner racquets
   - Intermediate racquets
   - Advanced racquets
   - Specialty racquets
   - Hybrid racquets

3. **Recommendations** (`/recommendations`) - Curated list featuring:

   - Three recommended racquets
   - Product images and descriptions
   - Direct purchase links

4. **Contact** (`/contact`) - Interactive form with:
   - Name and email validation
   - Success/error messaging
   - Reset functionality

## 🎨 Technologies Used

- **Frontend Framework**: React 18.3.1
- **Routing**: React Router DOM 6.28.0
- **Styling**: CSS3 with modern features
- **Build Tool**: Create React App
- **Testing**: Jest and React Testing Library

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop computers (1200px and above)
- Tablets (768px - 1199px)
- Mobile phones (below 768px)

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests with coverage:

```bash
npm test -- --coverage
```

## 🚀 Deployment

This application can be deployed to various platforms:

### Netlify

1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify

### Vercel

1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/fsd_webpage"`
3. Add deploy script: `"deploy": "gh-pages -d build"`
4. Deploy: `npm run deploy`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues

**File watchers limit error (Linux)**

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

**Port 3000 already in use**

```bash
# Find process using port 3000
lsof -ti:3000
# Kill the process (replace PID with actual process ID)
kill -9 <PID>
```

**npm install fails**

```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json
# Reinstall
npm install
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ashwin M.V**

- Website: [Your Website](https://your-website.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Table tennis community for inspiration
- React team for the amazing framework
- Create React App for the boilerplate
- All the equipment manufacturers for detailed specifications

## 📊 Project Status

- ✅ Core functionality complete
- ✅ Responsive design implemented
- ✅ Contact form validation working
- ✅ Production build optimized
- 🔄 SEO optimization (in progress)
- 🔄 Performance enhancements (in progress)

---

⭐ If you found this project helpful, please give it a star on GitHub!

# 🏓 Happy playing!

# table-tennis-racquet-guide-react

A React web app to help beginners choose the perfect table tennis racquet
