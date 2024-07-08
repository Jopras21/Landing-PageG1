'use client';

import './navbar.css';
import {Text} from '../text/Text';
import Button from '../button/Button';
import {useState, useEffect} from 'react';

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({behavior: 'smooth'});
  } else {
    console.warn(`Element with ID '${id}' not found.`);
  }
}

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSidebarOpen]);

  const handleOutsideClick = (event: MouseEvent) => {
    const sidebarElement = document.querySelector('.sidebar');
    if (sidebarElement && !sidebarElement.contains(event.target as Node)) {
      closeSidebar();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeSidebar();
    }
  };

  return (
    <div className="navbar">
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <button
          className={`menu ${isSidebarOpen ? 'opened' : ''}`}
          aria-label="Main Menu"
        >
          <svg width="60" height="60" viewBox="0 0 100 100">
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
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiD8hLv20DJIwesYmpIPHwoU4456ppTvj6g&s"
          alt="Logo"
        />
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <button
          className={`menu close-menu ${isSidebarOpen ? 'opened' : ''}`}
          onClick={closeSidebar}
          aria-label="Close Menu"
        >
          <svg width="60" height="60" viewBox="0 0 100 100">
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
        <div className="sidebar-content">
          <Text
            size="normal"
            title="Services"
            className="nav-text"
            onClick={() => {
              scrollToId('services');
              closeSidebar();
            }}
          />
          <Text
            size="normal"
            title="Prices"
            className="nav-text"
            onClick={() => {
              scrollToId('prices');
              closeSidebar();
            }}
          />
          <Text
            size="normal"
            title="Work"
            className="nav-text"
            onClick={() => {
              scrollToId('work');
              closeSidebar();
            }}
          />
          <Text
            size="normal"
            title="Tech"
            className="nav-text"
            onClick={() => {
              scrollToId('tech');
              closeSidebar();
            }}
          />
        </div>
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
          style={{width: "6rem"}}
        />
      </div>
    </div>
  );
}
