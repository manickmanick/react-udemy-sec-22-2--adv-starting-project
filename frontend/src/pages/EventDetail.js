import EventItem from "../components/EventItem";
import { useRouteLoaderData, redirect } from "react-router-dom";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return (
    <>
      <EventItem event={event} />
    </>
  );
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const res = await fetch("http://localhost:8080/events/" + id);
  if (!res.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details for selected events.",
      }),
      {
        status: 500,
      },
    );
  } else {
    return res;
  }
}

export async function action({ params, req }) {
  const res = await fetch("http://localhost:8080/events/" + params.eventId, {
    method: req.method,
  });
  if (!res.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch delete event." }),
      {
        status: 500,
      },
    );
  } else {
    return redirect("/events");
  }
}
