import React, { useEffect, useRef } from 'react';

export default function KeyFeatures() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const featureCards = entry.target.querySelectorAll('.feature-card');
          if (entry.isIntersecting) {
            featureCards.forEach((el, index) => {
              el.style.transitionDelay = `${index * 0.2}s`;
              el.classList.add('animate-reveal');
              el.classList.remove('animate-hide');
            });
          } else {
            featureCards.forEach((el) => {
              el.classList.remove('animate-reveal');
              el.classList.add('animate-hide');
            });
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "fas fa-user-shield",
              title: "Personal Branding",
              description: "Build a professional digital identity with personalized branding tools.",
            },
            {
              icon: "fas fa-dollar-sign",
              title: "Monetization Tools",
              description: "Unlock multiple revenue streams through innovative tools.",
            },
            {
              icon: "fas fa-cloud",
              title: "Cloud Hub",
              description: "Securely store and manage your digital assets with ease.",
            },
            {
              icon: "fas fa-chart-line",
              title: "Data Analytics",
              description: "Gain insights to grow your influence and revenue.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`p-6 bg-white shadow rounded opacity-0 transform translate-y-10 feature-card`}
            >
              <i className={`${feature.icon} text-4xl text-purple-600 mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
