// import {  } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  // const events = useLoaderData();

  return (
    <>
      <EventsList />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return {isError:true,message:"could not fetch data"}
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
    // return json({ message: "Could not fetch events." },{status:500})
  } else {
    return response;
  }
}
