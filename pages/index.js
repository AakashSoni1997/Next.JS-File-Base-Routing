import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";
import Head from "next/head";
import NewsletterRegistration from "@/components/input/newsletter-registration";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Next.JS event</title>
        <meta name="description" content="Find lots of great events" />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1,
  };
}
export default HomePage;
