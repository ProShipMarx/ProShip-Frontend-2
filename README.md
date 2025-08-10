# ProShip Frontend (Vite + React + Tailwind)

## Quick Start
```bash
# 1) set API base for your backend
echo "VITE_API_BASE=https://YOUR-RENDER-URL.onrender.com" > .env

# 2) install & run
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Notes
- Pages: Landing, Loads, Trucks, Post Load, Post Truck, Signup
- API base reads from `import.meta.env.VITE_API_BASE` (see `.env`)
- If your backend lacks `/api/posts/loads` or `/api/posts/trucks`, component will fallback to mock data and log a warning in the console.
