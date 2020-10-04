import React, { useState,useEffect } from 'react';
import Editor from './components/Editor'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [html,setHtml] = useLocalStorage("html","")
  const [js,setJs] = useLocalStorage("js","")
  const [css,setCss] = useLocalStorage("css","")
  const [srcDoc,setSrcDoc] = useState("")

  useEffect(()=>{
    setTimeout(()=>{
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
    `)
    },250)
  },[html,css,js])



  return (
    <>
    <div className="pane top-pane">
    <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
    <Editor language="javascript" displayName="JavaScript" value={js} onChange={setJs} />
    <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
    </div>
    <div className="pane">
      <iframe 
        title="Ouput" 
        sandbox="allow-scripts" 
        frameBorder="0" 
        width="100%"
        height="100%"
        srcDoc={srcDoc}
        />
    </div>
    </>
  );
}

export default App;
