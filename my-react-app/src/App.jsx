
import { useState } from "react";
import './App.css';

// Parent component
function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      category: "CULTURE",
      title: "Cultural Day",
      description: "Celebrate music, dance, art, and culture from across campus.",
      date: "November 12, 2026",
      venue: "Open Air Stage",
      registrations: 0,
    },
    {
      id: 2,
      category: "TECHNOLOGY",
      title: "Tech Fest",
      description: "Explore coding, innovation, and exciting technology projects.",
      date: "November 18, 2026",
      venue: "Main Auditorium",
      registrations: 5,
    },
    {
      id: 3,
      category: "SPORTS",
      title: "Sports Day",
      description: "Participate in games, competitions, and team activities.",
      date: "November 25, 2026",
      venue: "College Ground",
      registrations: 10,
    },
  ]);

  const [favorites, setFavorites] = useState([]);

  // Register for an event
  function handleRegister(id) {
    setEvents((previousEvents) =>
      previousEvents.map((event) =>
        event.id === id
          ? { ...event, registrations: event.registrations + 1 }
          : event
      )
    );
  }

  // Add or remove a favorite
  function handleFavorite(id) {
    setFavorites((previousFavorites) =>
      previousFavorites.includes(id)
        ? previousFavorites.filter((eventId) => eventId !== id)
        : [...previousFavorites, id]
    );
  }

  // Remove an event
  function handleRemove(id) {
    setEvents((previousEvents) =>
      previousEvents.filter((event) => event.id !== id)
    );

    setFavorites((previousFavorites) =>
      previousFavorites.filter((eventId) => eventId !== id)
    );
  }

  return (
    <div className="app">
      {/* Navigation bar */}
      <nav className="navbar">
        <h2>CampusConnect</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#about">About</a>
        </div>
      </nav>

      {/* Welcome section */}
      <section className="hero" id="home">
        <p className="eyebrow">YOUR CAMPUS, YOUR COMMUNITY</p>

        <h1>
          Make Your Campus
          <br />
          <span>Experience Count.</span>
        </h1>

        <p className="hero-description">
          Discover exciting events, meet new people, and make the most
          of your college life.
        </p>

        <a className="explore-btn" href="#events">
          Explore Events
        </a>
      </section>

      {/* Events section */}
      <section className="events-section" id="events">
        <p className="eyebrow">DISCOVER YOUR CAMPUS</p>
        <h2>Upcoming Events</h2>

        <p className="section-description">
          Find opportunities to learn, connect, and participate.
        </p>

        <div className="event-list">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isFavorite={favorites.includes(event.id)}
              onRegister={handleRegister}
              onFavorite={handleFavorite}
              onRemove={handleRemove}
            />
          ))}

          {events.length === 0 && (
            <p>No events available right now.</p>
          )}
        </div>
      </section>

      {/* About section */}
      <footer id="about">
        <h3>CampusConnect</h3>
        <p>Connect with your campus community.</p>
      </footer>
    </div>
  );
}

// Reusable child component using PROPS
function EventCard({
  event,
  isFavorite,
  onRegister,
  onFavorite,
  onRemove,
}) {
  return (
    <article className="event-card">
      <div className="event-image">
        <span>{event.category}</span>
      </div>

      <div className="event-details">
        <p className="category">{event.category}</p>

        <h3>{event.title}</h3>

        <p className="event-description">{event.description}</p>

        <p>
          <strong>Date:</strong> {event.date}
        </p>

        <p>
          <strong>Venue:</strong> {event.venue}
        </p>

        <p>
          <strong>Registrations:</strong> {event.registrations}
        </p>

        <div className="event-buttons">
          <button
            className="register-btn"
            onClick={() => onRegister(event.id)}
          >
            Register
          </button>

          <button
            className="favorite-btn"
            onClick={() => onFavorite(event.id)}
          >
            {isFavorite ? "★ Favorited" : "☆ Add Favorite"}
          </button>

          <button
            className="remove-btn"
            onClick={() => onRemove(event.id)}
          >
            Remove Event
          </button>
        </div>
      </div>
    </article>
  );
}

export default App;
