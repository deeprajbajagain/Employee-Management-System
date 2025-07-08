import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed-bottom bg-dark text-light text-center py-2">
      <h6>Employee Management System &copy; {new Date().getFullYear()} by {}
      <a
        href="https://linkedin.com/in/deepraj-bajagain"
        target="_blank"
        rel="noreferrer"
        className="text-warning text-decoration-none"
      >
        Deepraj Bajagain
      </a>
      </h6>
    </footer>
  );
}
