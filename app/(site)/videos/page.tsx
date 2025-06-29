// app/(site)/videos/page.tsx

// Let's define our video data here for easy management
const videos = [
  {
    id: "NxfcupBQnIc", // The part of the YouTube URL after "v="
    title: "Kalis Power Weeder: Unboxing & First Impressions",
    description: "See the Kalis Power Weeder right out of the box. We'll show you what's included and our initial thoughts on the build quality."
  },
  {
    id: "QE1i2XF0ijs", // A classic placeholder ;)
    title: "Tackling Overgrown Weeds - A Real-World Test",
    description: "We put the Kalis Power Weeder to the ultimate test against a patch of tough, overgrown weeds. Does it stand up to the challenge?"
  },
  {
    id: "XKs0TH8vScQ", 
    title: "Customer Testimonial: Sarah's Garden Transformation",
    description: "Hear directly from one of our happy customers, Sarah, as she shows how the Kalis Power Weeder has saved her time and effort."
  },
  {
    id: "d-8l8bnRWFw",
    title: "Maintenance & Care: Keep Your Weeder Running Smoothly",
    description: "A quick guide on how to clean and maintain your Kalis Power Weeder to ensure it lasts for years to come."
  },
];

export default function VideosPage() {
  return (
    <div className="bg-slate-50">
      <div className="container py-12 md:py-16">
        
        {/* --- PAGE HEADER --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">
            See It In Action
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            From unboxing to tough real-world tests, see why the Kalis Power Weeder is the best choice for your garden.
          </p>
        </div>

        {/* --- VIDEO GALLERY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Responsive YouTube Embed */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Video Title & Description */}
              <div className="p-6">
                <h2 className="text-xl font-bold tracking-tight">{video.title}</h2>
                <p className="mt-2 text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}