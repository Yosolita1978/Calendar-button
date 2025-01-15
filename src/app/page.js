'use client';

import { useState } from "react";
import { google, outlook, office365, yahoo, ics } from "calendar-link";
import Image from "next/image";

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
    <section>
    {/* <!-- Navbar --> */}
    <nav className="navbar">
      <div className="logo">4 Femme</div>
      <div>
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </div>
    </nav>
  
    <section className="hero-section flex flex-col md:flex-row items-center">
  <div className="hero-text md:w-1/2">
    <h1>4 Femme Open House</h1>
    <p>Join us for an evening of trendy apparel, gifts, and fun!</p>
    <p>
      <strong>Location:</strong> Seattle, WA<br />
      <strong>Date:</strong> February 22, 2025<br />
      <strong>Time:</strong> 5:00 PM - 7:00 PM (PST)
    </p>
    <div onClick={() => setIsOpen(!isOpen)} className="relative inline-block">
          <button className="inline-block w-full px-4 py-3 bg-orange-950 border text-white border-zinc-500 shadow-lg rounded">
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
  </div>

  <div className="illustration-container relative w-full md:w-1/2 h-[400px] lg:h-[600px]">
    <Image
      src="/4femme.png"
      alt="Stylish open house display"
      fill
      className="object-cover rounded-lg"
    />
  </div>
</section>
  </section>
  );
}
