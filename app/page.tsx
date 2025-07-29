'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Redux Thunk Demo</h1>
        <p className="text-gray-600 text-lg mb-6">
          This app demonstrates fetching quotes using Redux Toolkit & Thunk.
        </p>
        <Link
          href="/quotes"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Go to Quotes Page
        </Link>
      </div>
    </main>
  );
}
