# Rahmania Skills Centre Website

A modern, professional, mobile-first website for Rahmania Skills Centre - a vocational training institute specializing in driving education and automobile technical training.

## Project Structure

```
/
├── index.html                 # Homepage
├── driving/
│   └── index.html            # Driving department page
├── automobile/
│   └── index.html            # Automobile department page
├── src/
│   ├── style.css             # Tailwind CSS input file
│   ├── script.js             # Interactive JavaScript
├── dist/
│   └── style.css             # Compiled Tailwind CSS (generated)
├── package.json              # Project dependencies
├── tailwind.config.js        # Tailwind CSS configuration
└── plan.md                   # Project planning document
```

## Tech Stack

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Fonts**:
  - English: Poppins, Inter
  - Bangla: Hind Siliguri, Noto Sans Bengali
- **Hosting**: Cloudflare Pages (recommended)
- **Build Tool**: Tailwind CLI

## Features

### Homepage (`index.html`)
- Hero section with department overview
- About Rahmania Skills Centre
- Why Choose Us section
- Gallery preview
- Contact information
- Professional footer

### Driving Department (`/driving/index.html`)
- Hero section specific to driving education
- About driving school
- What students learn
- Practical training details
- Course information
- BRTA exam preparation
- Enrollment process
- Gallery section
- FAQ
- Call-to-action

### Automobile Department (`/automobile/index.html`)
- Hero section specific to technical training
- About automobile institute
- Course information
- Comprehensive curriculum
- Workshop training details
- Career opportunities
- Enrollment process
- Gallery section
- FAQ
- Call-to-action

## Color System

- **Primary**: Dark Navy Blue (#0F172A)
- **Secondary**: White (#FFFFFF)
- **Accent**: Orange (#F97316)

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Mode
Watch mode for automatic CSS recompilation:
```bash
npm run dev
```

### 3. Production Build
Minified CSS for production:
```bash
npm run build
```

### 4. Local Testing
Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

## Key Features

### Mobile-First Design
- Responsive navigation with hamburger menu
- Large, thumb-friendly buttons
- Optimized typography for mobile devices
- Sticky WhatsApp button for easy contact

### Performance
- Lightweight Tailwind CSS
- Minimal JavaScript
- Lazy loading support for images
- Optimized asset loading
- No heavy frameworks or sliders

### User Experience
- Smooth scrolling
- Intuitive navigation
- Clear call-to-action buttons
- Mobile menu with smooth interactions
- WhatsApp integration

### Accessibility
- Semantic HTML
- Proper heading hierarchy
- Clear navigation structure
- Readable font sizes and contrast

## Navigation Structure

### Desktop
- Home
- Driving
- Automobile
- Gallery
- Contact
- WhatsApp CTA

### Mobile
- Hamburger menu
- All navigation items
- Sticky WhatsApp button

## Content Language

- **Primary**: Bangla (Bengali)
- **Secondary**: English technical terms only
  - Examples: ECU, OBD Scanner, ABS Braking System, Highway Driving

## URL Strategy

- Clean English URLs only
- `/driving` - Driving department
- `/automobile` - Automobile department
- No language prefixes in URLs

## WhatsApp Integration

The website includes WhatsApp integration for easy customer contact:
- Floating WhatsApp button
- Quick contact buttons throughout pages
- Customizable message templates

To configure:
1. Update `WHATSAPP_NUMBER` in `src/script.js`
2. Customize message templates as needed

## SEO

Each page includes:
- Descriptive meta tags
- Proper page titles with keywords
- Semantic HTML structure
- Mobile viewport configuration

### Page Titles
- Homepage: "Rahmania Skills Centre | ড্রাইভিং ও অটোমোবাইল প্রশিক্ষণ কেন্দ্র"
- Driving: "Rahmania Car Driving School | দক্ষ ও নিরাপদ ড্রাইভিং প্রশিক্ষণ"
- Automobile: "NK Automobile Institute | আধুনিক অটোমোবাইল টেকনিক্যাল প্রশিক্ষণ"

## Deployment

### Cloudflare Pages
1. Push code to GitHub repository
2. Connect repository to Cloudflare Pages
3. Set build command: (leave empty for static site)
4. Set publish directory: `.` (root)
5. Deploy

### Other Hosting
- The website is static HTML/CSS/JS
- Can be deployed to any static hosting service
- No server-side processing required

## Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0F172A',
  secondary: '#FFFFFF',
  accent: '#F97316'
}
```

### Typography
Update font imports in `src/style.css`

### Content
Edit respective HTML files:
- `index.html` - Homepage content
- `driving/index.html` - Driving page content
- `automobile/index.html` - Automobile page content

### Images
Replace placeholder gallery sections with actual images

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- **Images**: Use WebP format with fallbacks
- **Typography**: Local font loading with system fonts fallback
- **CSS**: Tailwind purging unused styles
- **JavaScript**: Minimal and vanilla
- **Animations**: CSS transitions for smooth performance

## Future Enhancements

Potential additions:
- Blog/news section
- Student testimonials
- Video content
- Online enrollment forms
- Google Maps integration
- Social media feeds
- Course booking system
- Payment integration

## License

This project is created for Rahmania Skills Centre.

## Support

For issues or questions about the website, contact the development team.

---

**Last Updated**: May 2026
**Version**: 1.0.0
