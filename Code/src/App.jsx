// SUMMARY: Root page that renders Navbar and Hero
/*
  import: relative paths starting with "./" refer to local files.
  CSS import: brings our Tailwind + custom CSS into the bundle.
  <main>: semantic wrapper around primary document content.
*/
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";

export default function App(){
  /* React component returns JSX fragment with our two child components */
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}
