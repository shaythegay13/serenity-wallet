import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-serenity-50 via-white to-mint-50 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-glow p-8 w-full max-w-md border border-white/20">
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: "serenity-button w-full py-3 rounded-2xl font-semibold shadow-glow",
              card: "bg-transparent shadow-none p-0",
              headerTitle: "text-2xl font-bold bg-gradient-to-r from-serenity-700 to-mint-700 bg-clip-text text-transparent mb-2",
              headerSubtitle: "text-sage-600",
              formFieldInput: "serenity-input w-full pl-10 pr-4",
              formFieldLabel: "block text-sm font-medium text-gray-700",
              footerActionLink: "text-serenity-600 hover:text-serenity-700 font-medium transition-colors"
            }
          }}
        />
      </div>
    </div>
  );
}
