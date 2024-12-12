import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-16 bg-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-purple-700 shadow rounded">
            <p className="mb-4">"Amatip Digital Box transformed my small baking business into an online sensation."</p>
            <h3 className="font-semibold">Sophia</h3>
          </div>
          <div className="p-6 bg-purple-700 shadow rounded">
            <p className="mb-4">"With the branding tools, I’ve attracted international clients for my graphic design services."</p>
            <h3 className="font-semibold">John</h3>
          </div>
          <div className="p-6 bg-purple-700 shadow rounded">
            <p className="mb-4">"The monetization features helped me generate passive income seamlessly."</p>
            <h3 className="font-semibold">Emily</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
