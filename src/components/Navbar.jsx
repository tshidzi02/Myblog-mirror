// SUMMARY: Top navigation bar with brand on the left and 5 links on the right
/*
  import/export: ES Modules are standard in Vite.
  React component: a function that returns JSX markup.
  <nav>: semantic landmark for accessibility.
  Utility classes: Tailwind strings that style spacing, layout, and fonts.
*/
export default function Navbar(){
  /* Return JSX to render */
  return (
    /* max-w-6xl: set readable line length; mx-auto: center; flex: horizontal layout;
       items-center: vertically center items; justify-between: space brand vs links;
       py-6 px-4: padding for breathing room */
    <nav className="max-w-6xl mx-auto flex items-center justify-between py-6 px-4">
      {/* Brand name: font-display (Poppins), bold, tight tracking */}
      <a href="#" className="font-display text-2xl font-extrabold tracking-tight">
        Olivia Wilson
      </a>

      {/* Right list of links: horizontal gap-10, semi-bold */}
      <ul className="flex items-center gap-10 font-semibold">
        {/* Active link: underline using bottom border */}
        <li><a className="pb-1 border-b-2 border-ink" href="#">HOME</a></li>
        {/* hover:opacity-70 = subtle fade on hover */}
        <li><a className="hover:opacity-70" href="#">BLOG</a></li>
        <li><a className="hover:opacity-70" href="#">PODCAST</a></li>
        <li><a className="hover:opacity-70" href="#">PORTFOLIO</a></li>
        <li><a className="hover:opacity-70" href="#">CONTACT</a></li>
      </ul>
    </nav>
  );
}
