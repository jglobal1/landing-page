import React, { useEffect, useRef } from 'react';

export default function PricingPlans() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
          } else {
            entry.target.classList.remove("animate-reveal");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const elements = sectionRef.current.querySelectorAll(".pricing-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Basic",
              description: "Perfect for beginners to establish an online presence.",
              price: "$9.99/month",
              buttonText: "Choose Basic",
              featured: false,
            },
            {
              title: "Premium",
              description: "For professionals ready to monetize their digital presence.",
              price: "$29.99/month",
              buttonText: "Choose Premium",
              featured: true,
            },
            {
              title: "Enterprise",
              description: "Ideal for businesses and organizations.",
              price: "$99.99/month",
              buttonText: "Choose Enterprise",
              featured: false,
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`pricing-card p-6 bg-white shadow rounded ${
                plan.featured ? "border-4 border-purple-600" : ""
              } opacity-0 transform translate-y-10 transition duration-700 ease-in-out`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <p className="mb-4">{plan.description}</p>
              <p className="text-2xl font-bold">{plan.price}</p>
              <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
