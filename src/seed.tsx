// src/setup/Seed.tsx (or anywhere temporary)
import { useEffect } from 'react';
import { dummyBooks } from '../src/data/dummyData'; // adjust path if needed

export default function Seed() {
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(dummyBooks));
    console.log('Dummy books added to localStorage');
  }, []);

  return <></>;
}
