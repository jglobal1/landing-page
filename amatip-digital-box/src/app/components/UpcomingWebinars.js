export default function UpcomingWebinars() {
    const webinars = [
      {
        date: "Dec 15 - 10:00 AM - EST",
        status: "In 3 Days",
        title: "Digital Transformation and Monetization Strategies",
        presenter: "John Doe",
        buttonText: "Enroll Now",
      },
      {
        date: "Dec 18 - 2:00 PM - EST",
        status: "In 6 Days",
        title: "Building Your Digital Identity with Amatip Box",
        presenter: "Jane Smith",
        buttonText: "Enroll Now",
      },
    ];
  
    return (
      <div className="py-10 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Upcoming Webinars</h2>
        </div>
  
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {webinars.map((webinar, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white"
            >
              <p className="text-sm text-gray-500">{webinar.date}</p>
              <p className="text-sm text-red-500 font-semibold">{webinar.status}</p>
              <h3 className="mt-2 text-lg font-bold text-gray-800">
                {webinar.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">Presenter: {webinar.presenter}</p>
              <button className="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-700 text-white font-semibold rounded-md shadow-md">
                {webinar.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    );
  }
  