'use client';

import { useEffect, useState } from 'react';

export default function AuthForm({ children, className = '' }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div suppressHydrationWarning={true} className={className}>
      {children}
    </div>
  );
}
