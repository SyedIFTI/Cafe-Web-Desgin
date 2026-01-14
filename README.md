# Claric Cafe

## Description
Claric Cafe is a modern, interactive website for a premium coffee cafe experience. Built with React, it showcases the cafe's offerings through engaging animations, product galleries, and a user-friendly interface. The site highlights premium coffee beans, cozy ambiance, and affordable prices, inviting visitors to explore and enjoy the cafe's unique atmosphere.

## Features
- **Home Page**: Animated landing page with GSAP-powered text animations, coffee mug visuals, and circular text elements.
- **Brand Showcase**: Display of partnered brands and logos.
- **Recent Products**: Showcase of latest coffee products and offerings.
- **Infinite Slider**: Scrolling text animations for promotional messages.
- **Why We're Different**: Section highlighting unique selling points like premium beans, ambiance, and pricing.
- **Gallery**: Image gallery for cafe visuals and products.
- **Footer**: Contact and additional information section.
- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS.

## Technologies Used
- **React**: Frontend framework for building the user interface.
- **Vite**: Build tool for fast development and bundling.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **GSAP**: Animation library for advanced animations and effects.
- **Framer Motion**: Library for smooth animations and transitions.
- **Swiper**: Touch-enabled slider library for galleries.
- **Lucide React**: Icon library for UI elements.
- **LightGallery**: Responsive lightbox gallery plugin.
- **Remixicon**: Icon set for additional UI elements.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd coffeeDesign
   ```

2. Navigate to the client directory:
   ```
   cd client
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` (or the port specified by Vite).

## Usage
- Run `npm run dev` to start the development server.
- Run `npm run build` to build the project for production.
- Run `npm run lint` to check for linting errors.
- Run `npm run preview` to preview the production build.

## Project Structure
```
client/
├── public/          # Static assets
├── src/
│   ├── assets/      # Additional assets
│   ├── components/  # Reusable React components
│   │   ├── BrandShowcase.jsx
│   │   ├── CircularText.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── InfiniteSlider.jsx
│   │   ├── Navbar.jsx
│   │   ├── RecentProduct.jsx
│   │   ├── ScrollVelocity.jsx
│   │   └── WhyWeDifferent.jsx
│   ├── pages/       # Page components
│   │   └── Home.jsx
│   ├── App.jsx      # Main app component
│   ├── index.css    # Global styles
│   └── main.jsx     # Entry point
├── package.json     # Dependencies and scripts
└── vite.config.js   # Vite configuration
```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.
