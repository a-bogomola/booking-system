export default function BookSection() {
  return (
    <section
      className="
        h-[20vh]
        flex items-center
        bg-orange-50/90 shadow-xl border-b-2 border-orange-300/80
        px-6
      "
      id="booking"
    >
      <div
        className="
          mx-auto 
          w-full
          flex flex-col md:flex-row 
          items-center justify-center 
          gap-6 md:gap-12   /* controls distance between text & button */
          max-w-xl          /* makes the content stay close to center */
          text-center md:text-left
        "
      >
        {/* Phrase */}
        <h2 className="text-lg md:text-xl font-semibold">
          Velti SEV laiku jau tagad 💅
        </h2>

        {/* Button */}
        <a
          href="/login" 
          className="
            bg-black text-white px-6 py-3 rounded-full 
            hover:bg-gray-800 transition 
            text-sm md:text-base
            shadow-md
          "
        >
          Pierakstīties
        </a>
      </div>
    </section>
  );
}

