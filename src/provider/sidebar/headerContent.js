import React from 'react';

const HeaderContent = () => (
  <div className="header-content">
    <span className="avatar">
      <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" stroke="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </span>
    <span className="name">Isabel De Rodt Gonzalez</span>
    <span className="role">Veterinaria</span>
  </div>
);

export default HeaderContent;
