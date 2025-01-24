'use client';

import {
  FolderIcon,
  MagnifyingGlassIcon,
  CodeBracketIcon,
  BugAntIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
  UserCircleIcon,
  CogIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const codeToType = `
<span class="text-gray-400 italic"># Step 1: Import Libraries</span>
<span class="text-blue-400 font-bold">from</span> preswald <span class="text-blue-400 font-bold">import</span> text, connect, transform, visualize
<span class="text-blue-400 font-bold">import</span> plotly.express <span class="text-blue-400 font-bold">as</span> px

<span class="text-gray-400 italic"># Step 2: Display Title</span>
text("<span class="text-green-400 font-bold"># Earthquake Data Analysis</span>")

<span class="text-gray-400 italic"># Step 3: Connect to Dataset</span>
data_conn = connect("<span class="text-green-400">earthquake_data.csv</span>", "<span class="text-green-400">earthquake_data</span>")

<span class="text-gray-400 italic"># Step 4: Transform Data</span>
filtered_data = transform(
    data_conn,
    pipeline=[
        {""operation"": ""filter"", ""condition"": ""magnitude >= 4.0""},
        {""operation"": ""select_columns"", ""columns"": [""Magnitude"", ""Depth"", ""Region""]}
    ]
)

<span class="text-gray-400 italic"># Step 5: Visualizations</span>

<span class="text-gray-400 italic"># Magnitude distribution</span>
fig_hist = px.histogram(
    filtered_data,
    x="<span class="text-green-400">Magnitude</span>",
    nbins=20,
    title="<span class="text-green-400">Distribution of Magnitudes</span>"
)
visualize(fig_hist)

<span class="text-gray-400 italic"># Depth vs. Magnitude scatter plot</span>
fig_scatter = px.scatter(
    filtered_data,
    x="<span class="text-green-400">Depth</span>",
    y="<span class="text-green-400">Magnitude</span>",
    color="<span class="text-green-400">Magnitude</span>",
    title="<span class="text-green-400">Depth vs Magnitude</span>",
    labels={"<span class="text-green-400">Depth</span>": "<span class="text-green-400">Depth (km)</span>", "<span class="text-green-400">Magnitude</span>": "<span class="text-green-400">Magnitude</span>"}
)
visualize(fig_scatter)
`;

/* TopBar Component */
const TopBar = () => (
  <header className="flex items-center justify-between bg-gray-800 px-2 md:px-4 py-2 text-xs md:text-sm">
    <div className="flex space-x-2">
      <span className="h-3 w-3 rounded-full bg-red-500"></span>
      <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
      <span className="h-3 w-3 rounded-full bg-green-500"></span>
    </div>
    <h1 className="text-xs md:text-sm text-gray-400">dashboard.py - MyProject - Visual Studio Code</h1>
  </header>
);

/* MenuBar Component */
const MenuBar = () => (
  <nav className="flex items-center bg-gray-800 px-4 py-1 text-sm text-gray-400">
    {['File', 'Edit', 'View', 'Go', 'Run', 'Help'].map((menu, index) => (
      <span key={index} className="mr-4 last:mr-0">
        {menu}
      </span>
    ))}
  </nav>
);

/* FileExplorer Component */
const FileExplorer = () => {
  const [isDataOpen, setIsDataOpen] = useState(false);
  const [isSrcOpen, setIsSrcOpen] = useState(true);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(true);
  const [isAskOpen, setIsAskOpen] = useState(true);

  const toggleFolder = (folder: any) => {
    if (folder === 'data') {
      setIsDataOpen(!isDataOpen);
    } else if (folder === 'src') {
      setIsSrcOpen(!isSrcOpen);
    } else if (folder === 'suggestions') {
      setIsSuggestionsOpen(!isSuggestionsOpen);
    } else if (folder === 'ask') {
      setIsAskOpen(!isAskOpen);
    }
  };

  return (
    <aside className="w-full md:w-1/5 bg-gray-800 p-3 md:block hidden">
     {/* Explorer Panel */}
      <h2 className="mb-2 text-xs text-gray-500">EXPLORER</h2>
      <ul className="text-sm mb-4">
        <li
          className="text-blue-400 hover:bg-gray-700 p-1 cursor-pointer rounded"
          onClick={() => toggleFolder('project')}
        >
          📂 preswald_project
        </li>
        <ul className="pl-4">
          {/* Data Folder */}
          <li
            className="text-blue-400 hover:bg-gray-700 p-1 cursor-pointer rounded"
            onClick={() => toggleFolder('data')}
          >
            {isDataOpen ? '📂' : '📁'} data
          </li>

          {/* Src Folder */}
          <li
            className="text-blue-400 hover:bg-gray-700 p-1 cursor-pointer rounded"
            onClick={() => toggleFolder('src')}
          >
            {isSrcOpen ? '📂' : '📁'} src
          </li>
          {isSrcOpen && (
            <ul className="pl-4">
              <li className="hover:bg-gray-700 p-1 cursor-pointer rounded">📄 dashboard.py</li>
            </ul>
          )}

          {/* Config Files */}
          <li className="hover:bg-gray-700 p-1 cursor-pointer rounded">📄 config.toml</li>
          <li className="hover:bg-gray-700 p-1 cursor-pointer rounded">📄 secrets.toml</li>
          <li className="hover:bg-gray-700 p-1 cursor-pointer rounded">📄 README.md</li>
          <li className="hover:bg-gray-700 p-1 cursor-pointer rounded">📄 requirements.txt</li>
        </ul>
      </ul>


      {/* Preswald Extension Panel */}
      <h2 className="mb-2 text-xs text-gray-500">PRESWALD</h2>
      <div className="bg-gray-700 p-2 rounded-lg">

        {/* Suggestions Section */}
        <div
          className="cursor-pointer hover:bg-gray-800 p-2 rounded mb-2"
          onClick={() => toggleFolder('suggestions')}
        >
          <h3 className="text-xs text-white font-semibold">💡⚡ AI Suggestions {isSuggestionsOpen ? '▼' : '▶'}</h3>
        </div>
        {isSuggestionsOpen && (
          <ul className="text-xs text-gray-300 space-y-1 pl-4">
            <li className="hover:bg-gray-800 p-1 cursor-pointer rounded">🔹 Detect missing values</li>
            <li className="hover:bg-gray-800 p-1 cursor-pointer rounded">🔹 Suggest transformations</li>
          </ul>
        )}

        {/* Ask Preswald Section */}
        <div
          className="cursor-pointer hover:bg-gray-800 p-2 rounded mt-4 mb-2"
          onClick={() => toggleFolder('ask')}
        >
          <h3 className="text-xs text-white font-semibold">🤖 Ask Preswald {isAskOpen ? '▼' : '▶'}</h3>
        </div>
        {isAskOpen && (
          <>
            <div className="bg-gray-800 p-2 rounded-lg text-xs text-gray-400 hover:bg-gray-600 cursor-pointer mb-2">
              <p>"How do I clean inconsistent date formats?"</p>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

const CodeEditor: React.FC<{ code: string }> = ({ code }) => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const [analyzeProgress, setAnalyzeProgress] = useState(0);
  const typingSpeed = 20; // Milliseconds per character
  const cursorBlinkSpeed = 500; // Cursor blinking speed

  useEffect(() => {
    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + code[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, code]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, cursorBlinkSpeed);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <main className="flex-1 bg-gray-900 p-4 text-sm overflow-auto font-mono text-white relative max-h-[500px]">
      <pre>
        <code dangerouslySetInnerHTML={{ __html: displayedCode }} />
        {isCursorVisible && <span className="animate-blink">|</span>}
      </pre>
    </main>
  );
};

/* VerticalExtensionsSidebar Component */
const VerticalExtensionsSidebar = () => {
  const extensions = [
    { name: 'Explorer', icon: FolderIcon },
    { name: 'Search', icon: MagnifyingGlassIcon },
    { name: 'Source Control', icon: CodeBracketIcon },
    { name: 'Debugger', icon: BugAntIcon },
    { name: 'Extensions', icon: PuzzlePieceIcon },
    { name: 'Testing', icon: ChartBarIcon },
    { name: 'Account', icon: UserCircleIcon },
    { name: 'Settings', icon: CogIcon },
  ];

  return (
    <div className="w-full md:w-16 bg-gray-800 flex md:flex-col flex-row items-center md:py-4 py-1 space-y-0 md:space-y-4 space-x-4 md:space-x-0 border-r border-gray-700">
      {extensions.map((ext, index) => (
        <button
          key={index}
          className="flex justify-center items-center w-10 h-10 text-gray-400 hover:bg-gray-700 hover:text-white rounded"
          title={ext.name}
        >
          <ext.icon className="h-6 w-6" />
        </button>
      ))}
    </div>
  );
};

/* Terminal Component */
const Terminal = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentLogIndex, setCurrentLogIndex] = useState<number>(0);
  const [isCursorVisible, setCursorVisible] = useState<boolean>(true);
  const [currentTypedLine, setCurrentTypedLine] = useState<string>("");

  const logMessages = [
    { type: "typed", message: "> pip install preswald" },
    { type: "log", message: "Collecting preswald" },
    { type: "log", message: "  Downloading preswald-1.2.3-py3-none-any.whl (45 kB)" },
    { type: "log", message: "Requirement already satisfied: pandas>=1.3.0 in /usr/local/lib/python3.9/site-packages (from preswald) (1.3.5)" },
    { type: "log", message: "Successfully installed preswald-1.2.3" },
    { type: "typed", message: "> preswald init preswald_project" },
    { type: "log", message: "Initializing a new Preswald project..." },
    { type: "log", message: "Created directory: preswald_project/" },
    { type: "log", message: "Done! Navigate to 'preswald_project/' to get started." },
    { type: "typed", message: "> preswald run dashboard.py" },
    { type: "log", message: "Starting Preswald development server..." },
    { type: "log", message: "Serving app at: http://localhost:8501" },
    { type: "typed", message: "> preswald deploy" },
    { type: "log", message: "Packaging app for deployment..." },
    { type: "log", message: "Deployment complete!" },
    { type: "log", message: "Your app is live at: https://preswald_project.preswald.com" },
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

useEffect(() => {
  if (currentLogIndex < logMessages.length) {
    const currentMessage = logMessages[currentLogIndex];

    if (currentMessage.type === "typed") {
      let charIndex = 0;
      let typedLine = ""; // Local variable to track typing progress
      setCurrentTypedLine(""); // Clear previous line

      const typeInterval = setInterval(() => {
        if (charIndex < currentMessage.message.length) {
          typedLine += currentMessage.message[charIndex];
          setCurrentTypedLine(typedLine); // Update state with the full typed line so far
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setLogs((prev) => [...prev, currentMessage.message]); // Add the fully typed line to logs
          setCurrentTypedLine(""); // Clear the typed line
          setCurrentLogIndex((prev) => prev + 1); // Move to the next log
        }
      }, 50); // Typing speed
      return () => clearInterval(typeInterval);
    } else {
      const logTimeout = setTimeout(() => {
        setLogs((prev) => [...prev, currentMessage.message]); // Add the log message
        setCurrentLogIndex((prev) => prev + 1); // Move to the next log
      }, 1000); // Delay for log messages
      return () => clearTimeout(logTimeout);
    }
  }
}, [currentLogIndex]);

  return (
    <footer
      className="border-t border-gray-700 bg-gray-800 p-4 text-xs font-mono text-white overflow-y-auto"
      style={{ height: "200px" }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-400">TERMINAL</span>
        <span className="text-gray-400">Problems | Output | Debug Console</span>
      </div>
      <div className="pl-4">
        {logs.map((log, index) => (
          <div key={index} className={logMessages[index]?.type === "typed" ? "font-bold" : ""}>
            {log}
          </div>
        ))}
        {currentTypedLine && (
          <div className="font-bold">
            {currentTypedLine}
            {isCursorVisible && <span className="animate-blink">|</span>}
          </div>
        )}
      </div>
    </footer>
  );
};

/* VscodeMockup Component */
const VscodeMockup = () => {
  return (
    <section
      className="relative mt-5 rounded-2xl bg-gray-900 text-white shadow-lg ring-1 ring-gray-900/10 overflow-hidden mx-auto w-full h-full"
    >
      <TopBar />
      <MenuBar />
      <div className="flex flex-col md:flex-row h-full">
        <VerticalExtensionsSidebar />
        <FileExplorer />
        <CodeEditor code={codeToType} />
      </div>
      <Terminal />
    </section>
  );
};

/* AppMockup Component */
const AppMockup = () => (
  <main className="mb-2 flow-root">
    <VscodeMockup />
  </main>
);

export default AppMockup;