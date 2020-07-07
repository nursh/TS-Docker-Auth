import React from 'react';
import { useLocation } from 'react-router-dom';

export function NotFound() {
  let location = useLocation();
  const openQuote = String.fromCharCode(0x201C);
  const closeQuote = String.fromCharCode(0x201D);

  return (
    <div>
      Path - {`${openQuote} ${location.pathname} ${closeQuote}`} - Not Found
    </div>
  )
}
