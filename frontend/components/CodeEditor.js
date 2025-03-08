import { useState, useEffect } from "react";

export default function CodeEditor() {
  const [code, setCode] = useState("");  
  const [output, setOutput] = useState("");  
  const [pyodide, setPyodide] = useState(null);

  useEffect(() => {
    async function loadPyodide() {
      if (typeof window !== "undefined" && window.loadPyodide) {
        const py = await window.loadPyodide();
        setPyodide(py);
      } else {
        console.error("Pyodide가 아직 로드되지 않았습니다.");
      }
    }
    loadPyodide();
  }, []);

  async function runCode() {
    if (!pyodide) return;
    try {
      const result = await pyodide.runPython(code);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error}`);
    }
  }

  return (
    <div className="w-1/2 p-6 bg-white border-l">
      <h2 className="text-xl font-bold">코드 실습</h2>
      <textarea
        className="w-full h-32 p-2 border rounded"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Python 코드를 입력하세요..."
      />
      <button
        onClick={runCode}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        실행하기
      </button>
      <pre className="mt-4 p-2 bg-gray-100 border rounded">{output}</pre>
    </div>
  );
}
