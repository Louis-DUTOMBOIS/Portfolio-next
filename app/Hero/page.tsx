// Page.tsx
import React from 'react';

const Page = () => {
    return (
        <section id="hero" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('images/background.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                <h1 className="text-5xl font-bold mb-4">Louis DUTOMBOIS</h1>
                <p className="text-2xl animate-pulse">Web Developpeur</p>
            </div>
        </section>
    );
};

export default Page;