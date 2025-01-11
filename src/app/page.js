'use client';

import { useState } from "react";
import { google, outlook, office365, yahoo, ics } from "calendar-link";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const event = {
    title: 'Treasures 4 Femme Open House',
    description: 'Join us for an evening of trendy apparel, gifts, and fun!',
    location: 'Seattle, WA',
    start: '2025-02-22T17:00:00-08:00',
    end: '2025-02-22T19:00:00-08:00',
  };


  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Treasures 4 Femmes</h1>
        <nav>
          <a href="#about" className="nav-link">About</a>
          <a href="#event" className="nav-link">Open House</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      <section className="hero-section">
        <h2 className="hero-text">Celebrate Women’s Style & Empowerment</h2>
        <p className="hero-subtext">
          Join us for an exclusive open house event with trendy apparel & gifts!
        </p>
        <div onClick={() => setIsOpen(!isOpen)} className="relative inline-block">
          <button className="inline-block w-full px-4 py-3 border border-zinc-500 shadow-lg rounded">
            Add to your Calendar!
          </button>
          <ul
            className={`absolute top-full left-0 w-full bg-white shadow-lg rounded py-3 transition-all duration-300 ease-in-out transform ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
              } origin-top z-10`}
          >
            <li>
              <a className="block px-4 py-2" href={google(event)} target="_blank" rel="noopener noreferrer">
                Google
              </a>
            </li>
            <li>
              <a className="block px-4 py-2" href={outlook(event)} target="_blank" rel="noopener noreferrer">
                Outlook
              </a>
            </li>
            <li>
              <a className="block px-4 py-2" href={yahoo(event)} target="_blank" rel="noopener noreferrer">
                Yahoo
              </a>
            </li>
            <li>
              <a className="block px-4 py-2" href={ics(event)} target="_blank" rel="noopener noreferrer">
                Other Calendar
              </a>
            </li>
          </ul>
        </div>


      </section>

      <section id="about" className="section">
        <h2 className="section-title">About Treasures 4 Femmes</h2>
        <p className="text">
          Treasures 4 Femmes is a boutique for modern women who love trendy and
          unique gifts, clothing, and accessories. We’re committed to offering
          chic, stylish, and memorable treasures.
        </p>
      </section>

      <section id="event" className="section">
        <h2 className="section-title">Open House Event Details</h2>
        <p className="text">
          <strong>Date:</strong> February 22, 2025 <br />
          <strong>Time:</strong> 5:00 PM <br />
          <strong>Location:</strong> Seattle, WA
        </p>
        <p className="highlight">Enjoy refreshments, special deals, and giveaways!</p>
      </section>

      <section id="contact" className="section">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text">We’d love to hear from you! Email us at:</p>
        <a href="mailto:info@treasures4femmes.com" className="email-link">info@treasures4femmes.com</a>
      </section>

      <footer className="footer">
        <p className="footer-text">© 2025 Treasures 4 Femmes. All rights reserved.</p>
      </footer>
    </div>
  );
}
