import React, { useEffect, useRef } from "react";

export default function LearningPaths() {
  const sectionRef = useRef(null);

  const learningPaths = [
    {
      image: "/images/Me and my friend Turn leads into loyal customers using our digital transformation strategies. more realistic.jpg",
      title: "Amatip Basics",
      rating: 4.6,
      description: "Learn the essentials of Amatip Digital Box to build your digital presence.",
    },
    {
      image: "/images/A guy enhance your brand visibility and trust. more realistic.jpg",
      title: "Build Brand Awareness",
      rating: 5.0,
      description: "Leverage the Amatip tools to enhance your brand visibility and trust.",
    },
    {
      image: "/images/A lady building digital presence.jpg",
      title: "Drive Conversions",
      rating: 4.8,
      description: "Turn leads into loyal customers using our digital transformation strategies.",
    },
    {
      image: "/images/I Discover the best practices to market your app effectively with Amatip..jpg",
      title: "Promote Your App",
      rating: 4.7,
      description: "Discover the best practices to market your app effectively with Amatip.",
    },
    {
      image: "/images/I Maximize lead generation with innovative tools and techniques..jpg",
      title: "Generate Leads",
      rating: 4.9,
      description: "Maximize lead generation with innovative tools and techniques.",
    },
  ];

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

    const elements = sectionRef.current.querySelectorAll(".learning-card");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-10 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 animate-fade-in">
          Explore Our Learning Paths
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {learningPaths.map((path, index) => (
          <div
            key={index}
            className="learning-card border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden opacity-0 transform translate-y-10 transition duration-700 ease-in-out"
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className="relative w-full h-48">
              <img
                src={path.image}
                alt={path.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{path.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{path.description}</p>
              <div className="mt-3 flex items-center">
                <p className="text-sm text-gray-500">Rating: {path.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
