# Damish Shah - Portfolio Website

A modern React-based portfolio website showcasing my work and experience.

## Features

- Modern React architecture with component-based design
- Responsive design for all devices
- Smooth scrolling and animations
- Experience section highlighting Roblox Trust & Safety platform work
- Project showcase with links to GitHub and live demos
- Contact information and resume download

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` directory.

## Deployment

The site is configured to be served via nginx using Docker Compose. 

### Building for Production

1. Build the React application:
```bash
npm run build
```

2. Copy the build contents to the root directory (or update nginx to serve from the build directory):
```bash
cp -r build/* .
```

3. Ensure static images are in the `static/images` directory (they should already be there).

4. Start the Docker containers:
```bash
docker-compose up -d
```

The nginx configuration is set up to serve the React app with proper routing support (all routes fall back to index.html for client-side routing).

## Technologies

- React 18
- CSS3 with modern features
- Docker & Docker Compose
- Nginx

