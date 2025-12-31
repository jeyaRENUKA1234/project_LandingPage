import { useState, useEffect } from "react";
import "./Style.css";

function LandingPage() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const t = setInterval(() =>
      setValue(v => (v < 100 ? v + 1 : 100)), 60);
    return () => clearInterval(t);
  }, []);
  const codeLines = [
    {
      no: "01",
      parts: [
        { type: "comment", text: "// The next generation of blockchain" }
      ]
    },
    {
      no: "02",
      parts: [
        { type: "keyword", text: "class " },
        { type: "class-name", text: "BlockchainInnovation" },
        { type: "brace", text: " {" }
      ]
    },
    {
      no: "03",
      parts: [
        { type: "method", text: "  build" },
        { type: "paren", text: "(" },
        { type: "string", text: `"next-gen solutions"` },
        { type: "paren", text: ");" }
      ]
    },
    {
      no: "04",
      parts: [
        { type: "brace", text: "}" }
      ]
    }
  ];


  return (
    <div className="hero">
      <div className="logo-box">
        <img src="/logo.webp" alt="0x logo" className="logo-img" />
      </div>
      <h1 className="brand">
        <span className="green">0</span><span className="blue">x</span>
      </h1>
      <h2 className="title">TECHNOLOGIES</h2>
      <div className="progress">
        <div className="bar" style={{ width: `${value}%` }} />
      </div>
      <p className="percent">{value}%</p>
      <div className="code-wrapper">
        <pre className="code-container">
          {codeLines.map(line => (
            <div key={line.no} className="code-line">
              <span className="line-number">{line.no}</span>
              <span className="line-text">
                {line.parts.map((part, i) => (
                  <span key={i} className={part.type}>{part.text}</span>
                ))}
              </span>
            </div>
          ))}
        </pre>
      </div>
      <ul className="particles">
        {Array.from({ length: 10 }).map((_, i) => <li key={i} />)}
      </ul>
    </div>
  );
}

export default LandingPage;
