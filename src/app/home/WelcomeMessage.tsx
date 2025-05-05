'use client';

interface WelcomeMessageProps {
  username: string | null;
}

export default function WelcomeMessage({ username }: WelcomeMessageProps) {
  return (
    <div className="font-semibold text-2xl text-amber-600 mb-4">
      Welcome, {username ? username : 'Guest'}!
    </div>
  );
}
