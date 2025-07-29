'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchQuotes } from '@/lib/features/quoteSlice';
import {  Quote } from 'lucide-react';

const bgClasses = [
  'bg-quote-card-1',
  'bg-quote-card-2',
  'bg-quote-card-3',
  'bg-quote-card-4',
];

export default function QuotesPage() {
  const dispatch = useAppDispatch();
  const { quotes, loading, error } = useAppSelector((state) => state.quotes);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800 flex items-center justify-center gap-3">
         
          Inspirational Quotes
        </h1>

        {loading && (
          <p className="text-center text-gray-500 text-xl font-medium">Loading quotes...</p>
        )}

        {error && (
          <p className="text-center text-red-500 text-xl font-medium">Error: {error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {quotes.map((quote: any, index: number) => (
              <div
                key={quote.id || index}
                className={`flex flex-col justify-between h-full p-8 rounded-3xl shadow-lg transition-transform hover:scale-105 border border-gray-200 text-gray-800 ${bgClasses[index % bgClasses.length]}`}
              >
                <div>
                  <Quote className="w-7 h-7 text-gray-600 opacity-80 mb-4" />
                  <p className="text-xl font-semibold leading-relaxed tracking-wide mb-6">
                    “{quote.quote}”
                  </p>
                </div>
                <p className="text-right text-md font-bold tracking-wide">
                  — {quote.author || 'Unknown'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
