"use client";

import { useState } from 'react';
import {setLocalStorage} from '../../lib/localStorage';
import { useRouter } from 'next/navigation';

import {HiOutlineUser} from 'react-icons/hi';

type HistoryItem = {
  id: string;
  title: string;
  url: string;
  createdAt: string;
}

type userProps = {
  id: string
  name: string
  createdAt: string
  interests: {
    politics: number,
    sports: number,
    tech: number,
    health: number,
    economy: number
  },
  history: HistoryItem[]
}

const page = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUserData: userProps = {
      id: '1',
      name: `${name} ${surname}`,
      createdAt: new Date().toISOString(),
      interests: {
        politics: 0,
        sports: 0,
        tech: 0,
        health: 0,
        economy: 0
      },
      history: []
    }

    setLocalStorage('userData', newUserData);

    router.push('/');
  }

  return (
    <main className="flex items-center justify-center h-screen">
      <form className="max-w-[32.5rem] p-10 shadow-lg bg-white rounded-xl" onSubmit={(e) => handleSubmit(e)}>
        <header className="flex flex-col items-center gap-4">
          <div className="logo ">
            <span className="text-2xl font-bold w-[4rem] aspect-square flex items-center justify-center bg-azul-500 text-branco-500 rounded-2xl">
              JN
            </span>
          </div>
          <div className="text flex flex-col gap-1 items-center">
            <h2 className="text-2xl font-bold">Criar Conta</h2>
            <p>Junte-se à nossa comunidade</p>
          </div>
        </header>
        <div className="inputs">
          <div className="name-field flex gap-4  py-8 sm:flex-row flex-col">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Nome</span>
              <input
                type="text"
                placeholder="Digite seu nome"
                required
                value={name || ''}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 rounded-xl bg-branco-500"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Sobrenome</span>
              <input
                type="text"
                placeholder="Digite seu sobrenome"
                required
                value={surname || ''}
                onChange={(e) => setSurname(e.target.value)}
                className="px-4 py-2 rounded-xl bg-branco-500"
              />
            </label>
          </div>
          <div className="preferences"></div>
        </div>
        <div className="actions flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-azul-500 text-branco-500 w-full flex items-center justify-center gap-2"
          >
            <HiOutlineUser />
            <span>Criar Conta</span>
          </button>
        </div>
      </form>
    </main>
  );
};

export default page;
