# Serenity Wallet

A mindful approach to financial wellness built with Next.js, React, and TypeScript.

## Features

- **Financial Dashboard** - Track your balance, transactions, and budget progress
- **CBT Tools** - Mood tracking and journaling for financial wellness
- **Educational Content** - Financial education and self-guided learning
- **Community Hub** - Connect with others on their financial wellness journey
- **Crisis Support** - Resources for financial emergencies

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Authentication**: Clerk (coming soon)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd serenity-wallet
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
app/
├── components/          # React components
│   ├── Auth/           # Authentication components
│   ├── CBT/            # Cognitive Behavioral Therapy tools
│   ├── Dashboard/      # Main dashboard components
│   ├── Education/      # Financial education
│   ├── Finances/       # Financial management
│   ├── Layout/         # Layout components (Header, Sidebar)
│   └── Profile/        # User profile components
├── utils/              # Utility functions and mock data
├── types/              # TypeScript type definitions
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx            # Home page
```

## Development

This project uses:
- **Next.js App Router** for file-based routing
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **ESLint** for code quality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
