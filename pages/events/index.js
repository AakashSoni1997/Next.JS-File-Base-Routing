import { Fragment } from "react";
import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { getAllEvents } from "../../helpers/api-util";
import { useRouter } from "next/router";

function AllEventsPage(props) {
  const { events } = props;
  const router = useRouter();
  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 1,
  };
}

export default AllEventsPage;
