This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

🎬 Storybit — Movie Discovery App

A modern movie browsing application built with Next.js, TMDB API, and Tailwind CSS.
Search movies, explore details, and enjoy a fast, clean UI — deployed on Vercel.

🚀 Features
🔎 Search Movies

Easily search any movie using TMDB’s powerful database.

🖼️ High-quality Movie Posters

Optimized with Next.js <Image /> for fast loading.

🎞️ Movie Details Page

See:

Poster

Title

Rating

Overview

Release date

📱 Fully Responsive UI

Works on mobile, tablet, and desktop.

⚡ Performance Optimized

Next.js Image Optimization

API caching

Lighthouse-tested

🌐 Production Deployment

Hosted on Vercel with automatic CI/CD using GitHub.

🛠️ Tech Stack

Next.js 14 / App Router

React

Tailwind CSS

TMDB API

Vercel Hosting

📂 Folder Structure
storybit/
│── app/
│   ├── page.js
│   ├── movie/
│   │   └── [id]/page.js
│   └── globals.css
│
│── components/
│   └── MovieCard.jsx
│
│── public/
│
│── .env.local
│── next.config.js
│── package.json
│── README.md

🔧 Setup Instructions (Local Development)
1️⃣ Clone the Repo
git clone https://github.com/<your-username>/storybit-app.git
cd storybit-app

2️⃣ Install Dependencies
npm install

3️⃣ Add TMDB API Key

Create a file named:

.env.local


Add:

TMDB_API_KEY=your_api_key_here

4️⃣ Run Locally
npm run dev

🚀 Deployment (Vercel)

This project is fully optimized for Vercel.
Deployment steps:

Push code to GitHub

Go to vercel.com

Import your repo

Add environment variable:

TMDB_API_KEY


Deploy 🎉
