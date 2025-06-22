# Vercel Deployment Guide

This guide explains how to deploy the frontend and backend separately on Vercel.

## Backend Deployment

### Option 1: Using Deploy Scripts
1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Deploy to production:**
   ```bash
   npm run deploy
   ```

3. **Deploy to staging:**
   ```bash
   npm run deploy:staging
   ```

4. **Deploy preview:**
   ```bash
   npm run deploy:preview
   ```

### Option 2: Manual Deployment
1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```

3. **Set environment variables in Vercel dashboard:**
   - Go to your project settings in Vercel
   - Add the following environment variables:
     - `MONGODB_URI`
     - `JWT_SECRET`
     - `STRIPE_SECRET_KEY`
     - `CLOUDINARY_CLOUD_NAME`
     - `CLOUDINARY_API_KEY`
     - `CLOUDINARY_API_SECRET`
     - `REDIS_URL` (if using Redis)
     - `NODE_ENV=production`
     - `FRONTEND_URL=https://your-frontend-app.vercel.app` (after frontend deployment)

4. **Note the backend URL** (e.g., `https://your-backend-app.vercel.app`)

## Frontend Deployment

### Option 1: Using Deploy Scripts
1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Set the backend URL environment variable:**
   Create a `.env` file in the frontend directory:
   ```
   VITE_BACKEND_URL=https://your-backend-app.vercel.app
   ```

3. **Deploy to production:**
   ```bash
   npm run deploy
   ```

4. **Deploy to staging:**
   ```bash
   npm run deploy:staging
   ```

5. **Deploy preview:**
   ```bash
   npm run deploy:preview
   ```

### Option 2: Manual Deployment
1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Set the backend URL environment variable:**
   Create a `.env` file in the frontend directory:
   ```
   VITE_BACKEND_URL=https://your-backend-app.vercel.app
   ```

3. **Deploy to Vercel:**
   ```bash
   vercel
   ```

4. **Set environment variables in Vercel dashboard:**
   - Go to your project settings in Vercel
   - Add the following environment variable:
     - `VITE_BACKEND_URL=https://your-backend-app.vercel.app`

5. **Note the frontend URL** (e.g., `https://your-frontend-app.vercel.app`)

6. **Update backend CORS configuration:**
   - Go back to your backend Vercel project settings
   - Update the `FRONTEND_URL` environment variable with your frontend URL

## Available Deploy Scripts

### Backend Scripts
- `npm run deploy` - Deploy to production
- `npm run deploy:staging` - Deploy to staging
- `npm run deploy:preview` - Deploy preview

### Frontend Scripts
- `npm run deploy` - Build and deploy to production
- `npm run deploy:staging` - Build and deploy to staging
- `npm run deploy:preview` - Deploy preview

## Configuration Files

### Backend (`backend/vercel.json`)
- Configures the Node.js serverless function
- Routes all API requests to `server.js`

### Frontend (`frontend/vercel.json`)
- Configures static site deployment
- Routes all requests to `index.html` for SPA routing
- Serves static assets from the `dist` directory

### Package.json Updates
- **Backend**: Added deployment scripts and updated Node.js version to 18.x
- **Frontend**: Added deployment scripts and build process

## Important Notes

1. **CORS Configuration**: The backend is configured to serve the frontend in production mode, but since they're deployed separately, you may need to add CORS configuration to the backend.

2. **Environment Variables**: Make sure all required environment variables are set in both Vercel projects.

3. **Domain Configuration**: You can set up custom domains for both frontend and backend in the Vercel dashboard.

4. **API Base URL**: The frontend will automatically use the backend URL specified in the `VITE_BACKEND_URL` environment variable.

## Troubleshooting

- If you encounter CORS issues, you may need to add CORS middleware to the backend
- Ensure all environment variables are properly set in Vercel
- Check the Vercel function logs for any deployment issues 