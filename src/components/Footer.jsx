import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
      <p>Built with React, Vite, and GitHub Pages.</p>
    </footer>
  );
}