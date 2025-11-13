import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Correllene Ira Salar. All rights reserved.</p>
      <div>
        <a href="https://github.com/ira-slr" target="_blank" rel="noopener noreferrer">GITHUB</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        <a href="https://facebook.com/crrllnr.slr" target="_blank" rel="noopener noreferrer">FACEBOOK</a>
      </div>
    </footer>
  );
}

export default Footer;