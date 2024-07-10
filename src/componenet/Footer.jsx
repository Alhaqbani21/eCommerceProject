import React from 'react';

export default function Footer() {
  return (
    <footer className="footer footer-center bg-[#0a1120]  text-white p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Team 4
        </p>
      </aside>
    </footer>
  );
}
