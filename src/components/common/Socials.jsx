import React from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://github.com/matiasarroyo1978/Movies"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
      <a
        href="https://www.linkedin.com/in/matias-arroyo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn />
      </a>
    </div>
  );
};

export default Socials;
