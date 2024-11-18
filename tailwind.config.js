/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to all your components
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #FFD700' },
          '50%': { boxShadow: '0 0 20px #FFD700' },
        },
      },
      animation: {
        glow: 'glow 1.5s ease-in-out infinite',
      },
      colors: {
        // 'dark-navy': '#001F54',   // Deep navy blue for dark sections or headers
        // 'accent': '#40E0D0',      // Teal for highlights and accents
        // 'light-grey': '#E5E4E2',  // Silver-like light grey for main section backgrounds
        // 'dark-grey': '#4B4B4B',   // Neutral dark grey for text and readability
        // 'highlight-blue': '#FFD700', // Bright blue for secondary highlights
        // Primary Dark Theme Colors
      'dark-navy': '#0A1128',     // Rich navy blue for background and sections
      'gold': '#FFD700',          // Gold for highlights and text accents
      
      // Supporting Colors
      'midnight-blue': '#001845', // Deeper blue for contrast and borders
      'steel-grey': '#1C2833',    // Dark grey for subtle backgrounds or cards
      'shadow-grey': '#3B3B3B',   // Muted grey for text and secondary elements

      // Lighter Variants for Text and Highlights
      'soft-gold': '#FFC94B',     // Softer gold for hover effects or buttons
      'light-navy': '#23395D',    // Lighter navy for mild backgrounds
      'accent': '#40E0D0',      // Teal
      'light-grey': '#E5E4E2',  // Silver-like grey
      'dark-grey': '#4B4B4B',   // Neutral dark grey
      'highlight-blue': '#FFD700', // Bright blue
      'charcoal': '#2C2C2C',    // Rich charcoal grey
    
      },
    },
  },
  plugins: [],
}

