// import React, { useState } from "react";

// function App() {
//   const [quote, setQuote] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [color, setColor] = useState("#FFFFFF");
//   const quoteRef = useRef(null);

//   // Fetch quote from API
//   const fetchQuote = async (category) => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         ` https://api.api-ninjas.com/v1/quotes?category=${category}`,
//         {
//           headers: { "X-Api-Key": "dNMrUiOsDb+RnDeeuyTWUA==tcnM8JGCJGZGgqCu" },
//         }
//       );
//       const data = await response.json();
//       if (data && data.length > 0) {
//         setQuote(data[0].quote); // Adjust based on the actual API response
//       } else {
//         setQuote("No quote found.");
//       }
//     } catch (error) {
//       setQuote("Sorry, unable to fetch quote.");
//     }
//     setLoading(false);
//   };
//   const copyQuoteToClipboard = useCallback(() => {
//     quoteRef.current?.select();
//     quoteRef.current?.setSelectionRange(0, 99);
//     window.navigator.clipboard.writeText(quote);
//   }, [quote]);

//   return (
//     <div
//       className="flex flex-col items-center justify-center min-h-screen p-4"
//       style={{ backgroundColor: color }}
//     >
//       <h1 className="text-4xl font-bold text-gray-800 mb-8">Quote Chat</h1>
//       <div className="space-x-4">
//         <button
//           onClick={() => {
//             fetchQuote("love");
//             setColor("#80deea");
//             {
//               copyQuoteToClipboard;
//             }
//           }}
//           className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//         >
//           Love Quotes
//         </button>
//         <button
//           onClick={() => {
//             fetchQuote("life");
//             setColor("#bbdefb"); // Optional: Set a color for this button
//           }}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Life Quotes
//         </button>
//         <button
//           onClick={() => {
//             fetchQuote("friendship");
//             setColor("#a7ffeb"); // Optional: Set a color for this button
//           }}
//           className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//         >
//           Friendship Quotes
//         </button>
//       </div>
//       <div className="mt-8 text-center text-lg text-gray-700 italic">
//         {loading ? <p>Loading...</p> : quote && <p>"{quote}"</p>}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useRef } from "react";

// function App() {
//   const [quote, setQuote] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [color, setColor] = useState("#FFFFFF");
//   const quoteRef = useRef(null);

//   // Fetch quote from API
//   const fetchQuote = async (category) => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.api-ninjas.com/v1/quotes?category=${category}`,
//         {
//           headers: { "X-Api-Key": "dNMrUiOsDb+RnDeeuyTWUA==tcnM8JGCJGZGgqCu" },
//         }
//       );
//       const data = await response.json();
//       if (data && data.length > 0) {
//         setQuote(data[0].quote);
//       } else {
//         setQuote("No quote found.");
//       }
//     } catch (error) {
//       setQuote("Sorry, unable to fetch quote.");
//     }
//     setLoading(false);
//   };

//   // Copy quote to clipboard
//   const copyQuoteToClipboard = () => {
//     if (quoteRef.current) {
//       quoteRef.current.select();
//       document.execCommand("copy");
//       alert("Quote copied to clipboard!");
//     }
//   };

//   return (
//     <div
//       className="flex flex-col items-center justify-center min-h-screen p-4"
//       style={{ backgroundColor: color }}
//     >
//       <h1 className="text-4xl font-bold text-gray-800 mb-8">Quote Chat</h1>
//       <div className="space-x-4">
//         <button
//           onClick={() => {
//             fetchQuote("love");
//             setColor("#80deea");
//           }}
//           className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//         >
//           Love Quotes
//         </button>
//         <button
//           onClick={() => {
//             fetchQuote("life");
//             setColor("#bbdefb"); // Optional: Set a color for this button
//           }}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Life Quotes
//         </button>
//         <button
//           onClick={() => {
//             fetchQuote("friendship");
//             setColor("#a7ffeb"); // Optional: Set a color for this button
//           }}
//           className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//         >
//           Friendship Quotes
//         </button>
//       </div>
//       <div className="mt-8 text-center text-lg text-gray-700 italic">
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           quote && (
//             <div className="flex flex-col items-center">
//               <textarea
//                 ref={quoteRef}
//                 className="p-4 border border-gray-300 rounded w-full max-w-md text-center"
//                 value={quote}
//                 readOnly
//                 rows="10"
//                 columns="4"
//               />
//               <button
//                 onClick={copyQuoteToClipboard}
//                 className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
//               >
//                 Copy to Clipboard
//               </button>
//             </div>
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useRef, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#FFFFFF");
  const quoteRef = useRef(null);

  // Fetch quote from API
  const fetchQuote = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        {
          headers: { "X-Api-Key": "dNMrUiOsDb+RnDeeuyTWUA==tcnM8JGCJGZGgqCu" },
        }
      );
      const data = await response.json();
      if (data && data.length > 0) {
        setQuote(data[0].quote);
      } else {
        setQuote("No quote found.");
      }
    } catch (error) {
      setQuote("Sorry, unable to fetch quote.");
    }
    setLoading(false);
  };

  // Copy quote to clipboard
  const copyQuoteToClipboard = () => {
    if (quoteRef.current) {
      quoteRef.current.select();
      document.execCommand("copy");
      alert("Quote copied to clipboard!");
    }
  };

  // Adjust the textarea height based on the content
  useEffect(() => {
    if (quoteRef.current) {
      // Reset height first so that the textarea can shrink when needed
      quoteRef.current.style.height = "auto";
      // Set the height to match the scroll height (content height)
      quoteRef.current.style.height = `${quoteRef.current.scrollHeight}px`;
    }
  }, [quote]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Quote Chat</h1>
      <div className="space-x-4">
        <button
          onClick={() => {
            fetchQuote("love");
            setColor("#80deea");
          }}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Love Quotes
        </button>
        <button
          onClick={() => {
            fetchQuote("life");
            setColor("#bbdefb"); // Optional: Set a color for this button
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Life Quotes
        </button>
        <button
          onClick={() => {
            fetchQuote("friendship");
            setColor("#a7ffeb"); // Optional: Set a color for this button
          }}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Friendship Quotes
        </button>
      </div>
      <div className="mt-8 text-center text-lg text-gray-700 italic">
        {loading ? (
          <p>Loading...</p>
        ) : (
          quote && (
            <div className="flex flex-col items-center">
              <textarea
                ref={quoteRef}
                className="p-4 border border-gray-300 rounded w-full max-w-md text-center resize-none overflow-hidden"
                value={quote}
                readOnly
                rows="1" // Start with a minimal row count
                style={{ minHeight: "40px" }} // Ensure there's always some height
              />
              <button
                onClick={copyQuoteToClipboard}
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
              >
                Copy to Clipboard
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
