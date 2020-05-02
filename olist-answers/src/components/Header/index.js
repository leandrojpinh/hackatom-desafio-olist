import React from 'react';

import './styles.css'

export default function Header({ title }) {
  return (
    <header>
      <span>{title}</span>
    </header>
  );
}
