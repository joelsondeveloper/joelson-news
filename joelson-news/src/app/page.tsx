"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {getLocalStorage} from '../lib/localStorage';
import Card from '@/components/Card';

export default function Home() {

  // const router = useRouter();
  const [userData, setUserData] = useState({});

  const router = useRouter();
  
  useEffect(() => {
    const data = getLocalStorage('userData');
    
    if (!data) {
      router.push('/login');
    }

    setUserData(data);

    console.log(data);

  }, []);


  return (

    <main className="pt-[11rem] px-10 pb-10 flex flex-col gap-12">
      <section className="hero flex flex-col gap-8">
        <h2 className='text-3xl font-extrabold'>Destaques</h2>
        <div className="carousel flex gap-6 flex-wrap justify-center
        ">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}
