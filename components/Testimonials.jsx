export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "Sarah Johnson", text: "Best bookshop I've ever used. The selection is incredible!" },
    { id: 2, name: "Michael Chen", text: "Fast delivery and great customer service. Highly recommend!" },
    { id: 3, name: "Emma Williams", text: "I love the personalized recommendations. Found so many great reads!" },
  ];

  return (
    <section className="py-16 px-4 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          What Our Readers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-zinc-800 p-6 rounded-lg">
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-zinc-900 dark:text-white">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
