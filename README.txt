1. Install vite
npm init vite tailwindcss3

2. Go to folder

3. npm install -D tailwindcss postcss autoprefixer

4. npx tailwindcss init -p

5. Replace style.css with
@tailwind base;
@tailwind components;
@tailwind utilities;

6. Edit tailwind.config.js with
module.exports = {
  content: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

7. Create src folder and move index, main, style.css

8. Create new file outside src vite.config.js with the code below
export default {
    root: 'src',
    publicDir: 'public',
    outDir: '../docs',
    server: {
        open: true
    }
}

9. Create public folder outside src.

10. Move favicon to public folder

11. Edit the index.html file

12. npm run dev