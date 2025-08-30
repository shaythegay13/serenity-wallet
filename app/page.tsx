'use client'

import { SignInButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-serenity-50 via-white to-mint-50 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-glow p-8 w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-serenity-500 to-mint-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-glow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-white">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-serenity-700 to-mint-700 bg-clip-text text-transparent mb-2">
            Serenity Wallet
          </h1>
          <p className="text-sage-600">
            A mindful approach to financial wellness
          </p>
        </div>

        <SignedOut>
          <div className="space-y-4">
            <SignInButton mode="modal">
              <button className="serenity-button w-full py-3 rounded-2xl font-semibold shadow-glow">
                Sign In
              </button>
            </SignInButton>
            
            <div className="text-center">
              <p className="text-sage-600">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-serenity-600 hover:text-serenity-700 font-medium transition-colors">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="space-y-4">
            <div className="text-center mb-4">
              <p className="text-sage-600 mb-2">Welcome back, {user?.firstName || 'User'}!</p>
            </div>
            
            <Link href="/dashboard">
              <button className="serenity-button w-full py-3 rounded-2xl font-semibold shadow-glow">
                Go to Dashboard
              </button>
            </Link>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
