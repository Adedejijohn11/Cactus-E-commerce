# Deploy Convex Functions - Step by Step Guide

## Problem
The error `Could not find public function for 'frontend/orders:getByOrderId'` means the function exists in your code but hasn't been deployed to your Convex deployment.

## Solution: Deploy Functions

### Step 1: Navigate to Store-front Directory
```bash
cd /Users/sundayochuko/Desktop/Ecomms/store-front
```

### Step 2: Verify Convex is Configured
Check that you have a `.env.local` file with:
```env
NEXT_PUBLIC_CONVEX_URL=https://different-leopard-911.convex.cloud
CONVEX_DEPLOYMENT=dev:different-leopard-911
```

### Step 3: Sync Functions (Generate Types)
```bash
npx convex dev --once
```

**What this does:**
- Connects to your Convex deployment
- Syncs your functions
- Generates TypeScript types in `convex/_generated/`

**Expected output:**
```
✓ Synced functions
✓ Generated types
```

### Step 4: Deploy Functions to Production
```bash
npx convex deploy
```

**What this does:**
- Deploys all functions in `convex/frontend/` to your Convex deployment
- Makes `frontend/orders:getByOrderId` available in production

**Expected output:**
```
✓ Deployed successfully
```

### Step 5: Verify Deployment
1. Go to https://dashboard.convex.dev
2. Select your deployment: `dev:different-leopard-911`
3. Go to **Functions** tab
4. Look for `frontend/orders:getByOrderId` in the list
5. It should show as a **Query** function

## Troubleshooting

### If `npx convex dev` fails:
- Make sure you're logged in: `npx convex login`
- Check your `.env.local` has the correct URL
- Try: `npx convex dev --once --url https://different-leopard-911.convex.cloud`

### If `npx convex deploy` fails:
- Make sure functions are synced first (`npx convex dev`)
- Check you have write permissions to the deployment
- Verify you're deploying to the correct deployment

### If function still not found after deployment:
1. **Check deployment URL matches:**
   - Your `.env.local`: `NEXT_PUBLIC_CONVEX_URL=https://different-leopard-911.convex.cloud`
   - Your Vercel env var: `NEXT_PUBLIC_CONVEX_URL=https://different-leopard-911.convex.cloud`
   - They must match!

2. **Clear browser cache** and reload the page

3. **Check Convex Dashboard:**
   - Go to Functions tab
   - Verify `frontend/orders:getByOrderId` exists
   - Click on it to see if there are any errors

4. **Redeploy your Next.js app:**
   - After deploying Convex functions, redeploy on Vercel
   - This ensures the frontend uses the updated Convex deployment

## Quick Command Reference

```bash
# From store-front directory
cd store-front

# Sync and generate types
npx convex dev --once

# Deploy to production
npx convex deploy

# Check deployment status
npx convex dashboard
```

## Important Notes

- **Always deploy from the `store-front` directory** (not from root)
- **Both dashboard and store-front can use the same Convex deployment** - they just use different API paths (`api.dashboard.*` vs `api.frontend.*`)
- **After deploying Convex functions, you may need to wait 10-30 seconds** for the deployment to propagate
- **Redeploy your Next.js app on Vercel** after deploying Convex functions to ensure everything is in sync

