# FITLOG — Workout Library

A dark, simple gym app built with Next.js. You can browse workouts, see
full details for each one, add workouts to Today's Plan, save workouts for
later, and track your totals.

Live site: https://assignment-06-kohl.vercel.app/
Repo: https://github.com/tahsinmesbhaturzo-blip/assignment-06

## Description

FITLOG shows a list of 12 workouts. Click any workout to see its full
details — equipment, difficulty, sets, reps, duration, calories, and
step-by-step instructions. You can add a workout to **Today's Plan** or
**Save it for later**. Both counts show live in the navbar, and the
**My Plan** page shows everything you've added, with totals for exercises,
minutes, and calories.

## Technologies Used

- **Next.js (App Router)** — pages and routing
- **React** — UI and state
- **Tailwind CSS** — styling and responsive design
- **DaisyUI** — extra styled components
- **React Context API** — shares Plan/Saved data across pages
- **react-toastify** — toast messages
- **react-icons** — icons
- **Cloudflare Workers API** — where the workout data comes from

## Features

1. **Workout library** — responsive grid of all workouts with image,
   tags, equipment, and stats (duration, calories, rating).
2. **Workout details page** — full info and instructions for each workout.
3. **Add to Plan / Save for Later** — updates the navbar badges instantly
   and shows a toast message.
4. **My Plan page** — tabs for Today's Plan and Saved, live stats,
   sort by Duration/Calories/Rating, and buttons to mark done or remove.
5. **Extra polish** — "Browse Workouts" button scrolls down to the
   library, a custom 404 page for bad links, and a loading message while
   data is fetching.

## Getting Started
```bash
npm install
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000).

## API

- All workouts: `GET /api/fitlog`
- One workout: `GET /api/fitlog/:id`
