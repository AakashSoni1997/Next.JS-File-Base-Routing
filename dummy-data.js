const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/extrovert-event.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Mobile App Development Bootcamp",
    description:
      "Accelerate your mobile app development skills in this intensive bootcamp. Learn about iOS and Android app development from industry experts.",
    location: "App Studio, 101 App Avenue, AppCity",
    date: "2022-06-25",
    image: "images/coding-event.jpg",
    isFeatured: true,
  },
  {
    id: "e5",
    title: "Code Challenge Hackathon",
    description:
      "Get ready for a coding challenge! Join our hackathon to solve real-world problems using your coding skills. Exciting prizes await the winners.",
    location: "Code Arena, 321 Challenge Street, CodeCity",
    date: "2022-11-10",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e6",
    title: "Python Workshop for Beginners",
    description:
      "If you're new to programming, this workshop is perfect for you! Learn the basics of Python and start your journey into the world of coding.",
    location: "Python Place, 456 Python Road, Pythontown",
    date: "2022-04-05",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e7",
    title: "Blockchain Technology Seminar",
    description:
      "Discover the power of blockchain technology. Join experts as they discuss the applications, challenges, and future trends in the blockchain space.",
    location: "Blockchain Center, 555 Chain Lane, Blockburg",
    date: "2023-02-18",
    image: "images/coding-event.jpg",
    isFeatured: true,
  },
  {
    id: "e8",
    title: "Java Development Masterclass",
    description:
      "Take your Java skills to the next level in this masterclass. Explore advanced concepts, best practices, and build scalable Java applications.",
    location: "Java Junction, 789 Java Street, Javatown",
    date: "2022-09-30",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e9",
    title: "Cybersecurity Conference",
    description:
      "Join cybersecurity experts as they share insights on the latest threats, vulnerabilities, and strategies to protect digital assets in the modern age.",
    location: "Cyber Center, 123 Secure Street, SecureCity",
    date: "2023-05-08",
    image: "images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e10",
    title: "Agile Project Management Workshop",
    description:
      "Learn the principles of agile project management and how to lead successful agile teams. Gain practical insights into agile methodologies and tools.",
    location: "Agile Hub, 987 Agile Avenue, Agiletown",
    date: "2023-07-22",
    image: "images/coding-event.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
