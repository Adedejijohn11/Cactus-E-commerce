#!/bin/bash

# Script to verify Convex deployment and function availability

echo "🔍 Verifying Convex Deployment Configuration..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Must run from store-front directory"
    exit 1
fi

# Check for .env.local
if [ ! -f ".env.local" ]; then
    echo "⚠️  Warning: .env.local not found"
else
    echo "✅ Found .env.local"
    if grep -q "NEXT_PUBLIC_CONVEX_URL" .env.local; then
        echo "   NEXT_PUBLIC_CONVEX_URL is set"
        grep "NEXT_PUBLIC_CONVEX_URL" .env.local
    else
        echo "   ❌ NEXT_PUBLIC_CONVEX_URL not found in .env.local"
    fi
fi

echo ""
echo "🔍 Checking function definition..."
if [ -f "convex/frontend/orders.ts" ]; then
    if grep -q "export const getByOrderId = query" convex/frontend/orders.ts; then
        echo "✅ Function getByOrderId is defined in convex/frontend/orders.ts"
    else
        echo "❌ Function getByOrderId not found in convex/frontend/orders.ts"
    fi
else
    echo "❌ convex/frontend/orders.ts not found"
fi

echo ""
echo "🔍 Checking generated API types..."
if [ -f "convex/_generated/api.d.ts" ]; then
    if grep -q "frontend_orders" convex/_generated/api.d.ts; then
        echo "✅ frontend/orders module is in generated API types"
    else
        echo "⚠️  frontend/orders module not in generated API types"
        echo "   Run: npx convex dev --once"
    fi
else
    echo "⚠️  Generated API types not found"
    echo "   Run: npx convex dev --once"
fi

echo ""
echo "📋 Next Steps:"
echo "1. Run: npx convex dev --once"
echo "2. Run: npx convex deploy"
echo "3. Verify in Convex Dashboard: https://dashboard.convex.dev"
echo "4. Check Functions tab for 'frontend/orders:getByOrderId'"

