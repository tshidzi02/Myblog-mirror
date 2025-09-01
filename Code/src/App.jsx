// SUMMARY: Sanity check — render simple text to prove mount works
/*
  export default function App(): defines a React component named App.
  returns: JSX (<div>...</div>) which the browser renders as HTML.
*/
export default function App(){
  return (
    <div style={{padding: "2rem", fontSize: "1.5rem"}}>
      It works 🎉 (React is mounted)
    </div>
  );
}
