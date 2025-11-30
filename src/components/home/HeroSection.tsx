// src/components/home/HeroSection.tsx
export default function HeroSection() {
  return (
    <section
      id="booking"
      className="
        pt-16 h-[80vh] bg-cover bg-center bg-no-repeat
        border-b-2 border-lime-600
      "
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="text-white p-8 max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Nail Studio Booking
        </h1>
        <p className="text-lg mb-6">
          Beautiful nails, easy online booking.
        </p>
        <button className="px-6 py-3 bg-green-600 rounded-full text-white">
          Book appointment
        </button>
      </div>
    </section>
  );
}



