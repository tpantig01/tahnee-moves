# Tahnee Moves Website

Movement that moves with you. A bold, energetic website for flexibility and pole dance classes.

## Local Development

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

This will start Eleventy's dev server at `http://localhost:8080` with live reload.

3. Build for production:
```bash
npm run build
```

This generates the static site in the `_site` folder.

## Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a new repository on GitHub (e.g., `tahnee-moves`)

2. Initialize git in your project:
```bash
git init
git add .
git commit -m "Initial commit"
```

3. Connect to your GitHub repository:
```bash
git remote add origin https://github.com/YOUR_USERNAME/tahnee-moves.git
git branch -M main
git push -u origin main
```

4. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click Settings > Pages
   - Under "Source", select "GitHub Actions"

5. Create `.github/workflows/deploy.yml` in your project:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./_site
```

6. Push the workflow file:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment"
git push
```

Your site will be live at: `https://YOUR_USERNAME.github.io/tahnee-moves/`

### Option 2: Netlify (Free, with custom domain)

1. Create a `netlify.toml` file:
```toml
[build]
  command = "npm run build"
  publish = "_site"
```

2. Push your code to GitHub (follow steps 1-3 from GitHub Pages)

3. Go to [Netlify](https://www.netlify.com/) and sign up

4. Click "Add new site" > "Import an existing project"

5. Connect your GitHub repository

6. Netlify will auto-detect the settings from `netlify.toml`

7. Click "Deploy site"

Your site will be live at a Netlify URL (e.g., `random-name-123.netlify.app`). You can:
- Change to a custom Netlify subdomain (e.g., `tahnee-moves.netlify.app`)
- Connect your own custom domain

### Option 3: Vercel (Free, similar to Netlify)

1. Push your code to GitHub (follow steps 1-3 from GitHub Pages)

2. Go to [Vercel](https://vercel.com/) and sign up

3. Click "Add New" > "Project"

4. Import your GitHub repository

5. Configure build settings:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `_site`

6. Click "Deploy"

## Project Structure

```
tahnee-moves-site/
├── src/
│   ├── _layouts/
│   │   └── base.njk          # Base template
│   ├── css/
│   │   └── styles.css        # All styles
│   ├── js/
│   │   └── main.js           # Interactive functionality
│   └── index.njk             # Homepage content
├── .eleventy.js              # Eleventy configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## Customization

- **Styles**: Edit `src/css/styles.css`
- **Content**: Edit `src/index.njk`
- **Layout**: Edit `src/_layouts/base.njk`
- **Colors**: Change CSS variables in `styles.css`:
  - `--lime: #CCFF00`
  - `--hot-pink: #FF006E`
  - `--sky-blue: #00D9FF`

## Support

For issues or questions, refer to:
- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com/)
