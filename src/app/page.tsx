'use client'
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { date: '2024-06-01', price: 180 },
  { date: '2024-06-02', price: 182 },
  { date: '2024-06-03', price: 185 },
  { date: '2024-06-04', price: 181 },
  { date: '2024-06-05', price: 190 }
];

export default function Dashboard() {
  const [symbol, setSymbol] = useState("AAPL");

  return (
    <main className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">📈 Stock Analyzer Dashboard</h1>
      </div>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData}>
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="h-[400px] w-full"></div>
    </main>
  );
}
