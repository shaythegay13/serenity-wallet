# Clerk Authentication Setup

## Prerequisites
1. Create a Clerk account at [https://clerk.com](https://clerk.com)
2. Create a new application in your Clerk dashboard

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Clerk Authentication
# Get these from your Clerk dashboard at https://dashboard.clerk.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## Getting Your Clerk Keys

1. Go to [https://dashboard.clerk.com](https://dashboard.clerk.com)
2. Select your application
3. Go to **API Keys** in the sidebar
4. Copy your **Publishable Key** and **Secret Key**
5. Replace the placeholder values in `.env.local`

## Features Implemented

- ✅ **Sign In Page** (`/sign-in`) - Uses Clerk's SignIn component
- ✅ **Sign Up Page** (`/sign-up`) - Uses Clerk's SignUp component  
- ✅ **Protected Dashboard** (`/dashboard`) - Requires authentication
- ✅ **Home Page** - Shows sign-in for unauthenticated users, dashboard link for authenticated users
- ✅ **User Button** - Displays user avatar and account management
- ✅ **Middleware** - Protects routes and handles authentication

## How It Works

1. **Unauthenticated users** see the home page with sign-in options
2. **Sign In/Up** redirects to Clerk's authentication flow
3. **After authentication** users are redirected to `/dashboard`
4. **Protected routes** automatically check authentication status
5. **User management** is handled through Clerk's UserButton component

## Customization

The Clerk components are styled to match your Serenity Wallet design using the `appearance` prop. You can customize colors, fonts, and layouts by modifying the appearance configuration in each component.

## Testing

1. Run `npm run dev`
2. Visit `http://localhost:3000`
3. Try signing up with a new account
4. Test the protected dashboard route
5. Verify the user button functionality

## Next Steps

- Add more protected routes as needed
- Customize the Clerk appearance further
- Implement user profile management
- Add role-based access control
