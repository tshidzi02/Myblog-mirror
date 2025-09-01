// SUMMARY: Split hero — left portrait, right “Hello!” with brush and intro

import portrait from "../assets/portrait.jpg";

export default function Hero(){
  return (
    
    <header className="relative overflow-hidden">
      {}
      <div
        
        className="pointer-events-none absolute -left-6 top-52 size-28 rounded-full
                   bg-gradient-to-br from-pink-300 to-lilac opacity-70"
      ></div>

      {}
      <div
        className="pointer-events-none absolute -right-10 bottom-10 size-60 rounded-full
                   bg-gradient-to-br from-pink-300 to-lilac opacity-60 blur-sm"
      ></div>

      {}
      <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-4 pb-16">
        {}
        <img
          src={portrait}                      
          alt="Portrait of Olivia smiling"    
          className="w-[520px] max-w-full rounded-3xl object-cover justify-self-center drop-shadow-xl"
        />

        {}
        <div className="text-left">
          {}
          <h1 className="font-display text-[110px] leading-[0.8] tracking-tight">
            {}
            He
            <span className="relative">
              llo
              {}
              <span aria-hidden className="brush absolute left-0 right-0 -bottom-3"></span>
            </span>
            !
          </h1>

          {}
          <p className="mt-8 text-xl font-semibold max-w-xl">
            I&apos;m Olivia. Photographer and designer. Welcome to my personal blog
          </p>
        </div>
      </section>
    </header>
  );
}
