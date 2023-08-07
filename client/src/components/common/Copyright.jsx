import React from 'react';
const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="copyright">
        &copy; {currentYear} Matias Arroyo. All rights reserved.
      </div>
    </footer>
  );
};

export default Copyright;
