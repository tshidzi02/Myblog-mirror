// SUMMARY: Split hero — left portrait, right “Hello!” with brush and intro
/*
  import portrait: Webpack/Vite will copy this image into the final build.
  <header>: semantic region for page-intro content.
  absolute gradient circles: decorative shapes using Tailwind utilities.
  grid layout: stacks on small screens; becomes 2 columns on large screens (lg:).
*/
import portrait from "../assets/portrait.jpg";

export default function Hero(){
  return (
    /* relative: allow absolutely positioned circles to anchor to this container
       overflow-hidden: keeps circles from overflowing visually */
    <header className="relative overflow-hidden">
      {/* Decorative circle 1 — small, left side */}
      <div
        /* pointer-events-none: not clickable; absolute: take out of flow;
           -left-6 top-52: place it; size-28: w/h 7rem; rounded-full: circle;
           bg-gradient-to-br: diagonal gradient from pink to lilac;
           opacity-70: soften */
        className="pointer-events-none absolute -left-6 top-52 size-28 rounded-full
                   bg-gradient-to-br from-pink-300 to-lilac opacity-70"
      ></div>

      {/* Decorative circle 2 — large, bottom-right with blur for depth */}
      <div
        className="pointer-events-none absolute -right-10 bottom-10 size-60 rounded-full
                   bg-gradient-to-br from-pink-300 to-lilac opacity-60 blur-sm"
      ></div>

      {/* Content container: centered, two columns on large screens */}
      <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-4 pb-16">
        {/* LEFT: Portrait image — rounded corners + drop shadow */}
        <img
          src={portrait}                      /* file path imported above */
          alt="Portrait of Olivia smiling"    /* accessibility text */
          className="w-[520px] max-w-full rounded-3xl object-cover justify-self-center drop-shadow-xl"
        />

        {/* RIGHT: Heading + intro body */}
        <div className="text-left">
          {/* font-display: Poppins; text-[110px]: large; leading-[0.8]: tight lines */}
          <h1 className="font-display text-[110px] leading-[0.8] tracking-tight">
            {/* Trick: wrap 'llo' with a relative span; then add an absolutely
               positioned .brush under it for the painted swash */}
            He
            <span className="relative">
              llo
              {/* aria-hidden: decorative only; absolute + -bottom-3: place under text */}
              <span aria-hidden className="brush absolute left-0 right-0 -bottom-3"></span>
            </span>
            !
          </h1>

          {/* Bold intro line; mt-8 spacing; max-w for nice line length */}
          <p className="mt-8 text-xl font-semibold max-w-xl">
            I&apos;m Olivia. Photographer and designer. Welcome to my personal blog
          </p>
        </div>
      </section>
    </header>
  );
}
