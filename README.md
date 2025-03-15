# Kwill - Anonymous Journaling Platform

Kwill is a platform that allows users to journal their thoughts anonymously and optionally share them with others. It focuses on creating a space for authentic self-expression while maintaining user privacy.

## Features

- Anonymous journaling with public or private visibility options
- Landing page showing random public entries
- Personal profile with journal history
- Like system for public entries
- Clean, minimal user interface

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/EricLego/kwill.git
   cd kwill
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
kwill/
├── src/
│   ├── app/
│   │   ├── journal/
│   │   │   └── page.tsx       # Journal entry page
│   │   ├── profile/
│   │   │   └── page.tsx       # User profile page
│   │   ├── globals.css
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   └── Header.tsx         # Navigation header
│   └── lib/
│       └── types.ts           # TypeScript interfaces
├── public/
│   └── ...                    # Public assets
└── ...                        # Config files
```

## Future Enhancements

- Authentication system
- Backend integration
- Content moderation tools
- Real-time updates for likes
- Mobile app
