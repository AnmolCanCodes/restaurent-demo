# Kashi & Co. Restaurant Website

A modern, responsive restaurant website for Kashi & Co., featuring contemporary Indian cuisine. Built with React and Vite for optimal performance and developer experience.

## Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dynamic Menu**: Interactive menu display with dietary tags and pricing
- **Restaurant Information**: Hours, location, and contact details
- **Customer Reviews**: Showcase of authentic customer testimonials
- **Modern UI**: Clean, contemporary design with smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds

## Tech Stack

- **React 19**: Latest React features and performance improvements
- **Vite 8**: Next-generation frontend tooling for rapid development
- **CSS3**: Custom styling with CSS variables for theming
- **ESLint**: Code quality and consistency

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AnmolCanCodes/restaurent-demo.git
cd restaurent-demo/restaurant-website
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the website in your browser.

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
restaurant-website/
├── public/
│   ├── images/           # Static images for dishes and restaurant
│   ├── favicon.svg       # Site favicon
│   └── icons.svg         # Icon set
├── src/
│   ├── components/       # Reusable React components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   └── ui/           # UI components (Button, SectionHeading)
│   ├── data/             # JSON data files
│   │   ├── menu.json     # Menu items and pricing
│   │   └── restaurantInfo.json  # Restaurant details and reviews
│   ├── hooks/            # Custom React hooks
│   ├── sections/         # Page sections (Hero, Menu, About, etc.)
│   ├── styles/           # Global styles and CSS variables
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── .env.example          # Environment variables template
├── .gitignore           # Git ignore rules
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## Customization

### Menu Items

Edit `src/data/menu.json` to add, remove, or modify menu items:

```json
{
  "id": 1,
  "name": "Dish Name",
  "price": 25,
  "category": "Category",
  "dietaryTags": ["VEGETARIAN", "GLUTEN-FREE"],
  "image": "/images/dishes/dish-image.jpg"
}
```

### Restaurant Information

Update restaurant details in `src/data/restaurantInfo.json` including:
- Restaurant name and tagline
- Operating hours
- Address and contact information
- Customer reviews

### Styling

Modify CSS variables in `src/styles/variables.css` to customize:
- Color scheme
- Typography
- Spacing
- Border radius

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration
4. Deploy with one click

### Netlify

1. Run `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your GitHub repository for automatic deployments

### GitHub Pages

1. Update `vite.config.js` to set the correct base path
2. Run `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## License

This project is open source and available for personal and commercial use.

## Support

For questions or issues, please open an issue on the GitHub repository.
