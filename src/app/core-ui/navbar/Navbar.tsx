'use client';

import './navbar.css';
import {Text} from '../text/Text';
import Button from '../button/Button';
import {useState} from 'react';

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({behavior: 'smooth'});
  }
}

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiD8hLv20DJIwesYmpIPHwoU4456ppTvj6g&s"
          alt="Logo"
        />
      </div>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <button
          className={`menu ${isSidebarOpen ? 'opened' : ''}`}
          aria-label="Main Menu"
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <Text
          size="normal"
          title="Services"
          className="nav-text"
          onClick={() => scrollToId('services')}
        />
        <Text
          size="normal"
          title="Prices"
          className="nav-text"
          onClick={() => scrollToId('prices')}
        />
        <Text
          size="normal"
          title="Work"
          className="nav-text"
          onClick={() => scrollToId('work')}
        />
        <Text
          size="normal"
          title="Tech"
          className="nav-text"
          onClick={() => scrollToId('tech')}
        />
      </div>
      <div className="navigation">
        <Text
          size="normal"
          title="Services"
          className="nav-text"
          onClick={() => scrollToId('services')}
        />
        <Text
          size="normal"
          title="Prices"
          className="nav-text"
          onClick={() => scrollToId('prices')}
        />
        <Text
          size="normal"
          title="Work"
          className="nav-text"
          onClick={() => scrollToId('work')}
        />
        <Text
          size="normal"
          title="Tech"
          className="nav-text"
          onClick={() => scrollToId('tech')}
        />
      </div>
      <div className="login">
        <Button
          type="secondary"
          title="Login"
          onClick={() => {
            console.log('clicked');
          }}
        />
      </div>
    </div>
  );
}
