// SUMMARY: Top navigation bar with brand on the left and 5 links on the right

export default function Navbar(){
  
  return (
    
    <nav className="max-w-6xl mx-auto flex items-center justify-between py-6 px-4">
      {}
      <a href="#" className="font-display text-2xl font-extrabold tracking-tight">
        Olivia Wilson
      </a>

      {}
      <ul className="flex items-center gap-10 font-semibold">
        {}
        <li><a className="pb-1 border-b-2 border-ink" href="#">HOME</a></li>
        {}
        <li><a className="hover:opacity-70" href="#">BLOG</a></li>
        <li><a className="hover:opacity-70" href="#">PODCAST</a></li>
        <li><a className="hover:opacity-70" href="#">PORTFOLIO</a></li>
        <li><a className="hover:opacity-70" href="#">CONTACT</a></li>
      </ul>
    </nav>
  );
}
