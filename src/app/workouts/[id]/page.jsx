// app/workouts/[id]/page.js

import WorkoutDetails from "@/app/components/workout/WorkoutDetails";

import { notFound } from "next/navigation";

const WorkoutPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`
  );

  if (!res.ok) {
    notFound();
  }

  const workout = await res.json();

  if (!workout || !workout.id) {
    notFound();
  }

  return (
    <div>
      <WorkoutDetails workout={workout} />
    </div>
  );
};

export default WorkoutPage;