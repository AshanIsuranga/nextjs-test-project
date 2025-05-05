'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <Link href="/home" style={{ marginRight: '10px' }}>Home</Link>
      <Link href="/home/about" style={{ marginRight: '10px' }}>About</Link>
      <Link href="/home/contact">Contact</Link>
    </nav>
  );
}
