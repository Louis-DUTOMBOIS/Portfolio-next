import React from 'react';
import Image from 'next/image';

const Page = () => {
    return (
        <section id="hero" className="relative bg-cover bg-center h-screen -mt-12">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
                <Image src="/pp.png" alt="Profile Photo" width={300} height={200} className="rounded-full mb-10" />
                <h1 className="text-5xl font-bold mb-4">Louis DUTOMBOIS</h1>
                <p className="text-2xl text-violet animate-pulse">Developpeur Informatique</p>
            </div>
        </section>
    );
};

export default Page;