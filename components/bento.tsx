"use client";
import React, { useState, useEffect } from "react";

const AssistanceComponent = () => {
  const [typedText, setTypedText] = useState("");
  const [showAutoComplete, setShowAutoComplete] = useState(false);

  const fullQuery = `
  SELECT u.id, u.name, COALESCE(SUM(t.revenue), 0) AS revenue
  FROM {{ ref('users') }} u
  LEFT JOIN {{ ref('transactions') }} t 
  ON u.id = t.user_id AND t.status = 'completed'
  WHERE u.status = 'active'
  GROUP BY u.id, u.name, u.email
  LIMIT 10;
  `;
  
  const autoCompleteOptions = ["LIMIT 5", "LIMIT 10", "LIMIT 50"];

  useEffect(() => {
    let index = 0;
    const typeText = () => {
      const interval = setInterval(() => {
        setTypedText(fullQuery.slice(0, index));
        index++;

        if (index > fullQuery.length) {
          clearInterval(interval);
          setShowAutoComplete(true);

          setTimeout(() => {
            setTypedText("");
            setShowAutoComplete(false);
            index = 0;
            typeText();
          }, 2000);
        }
      }, 100);

      return interval;
    };

    const intervalId = typeText();
    return () => clearInterval(intervalId);
  }, []);

  const getHighlightedText = (text: string) => {
    return text.split("\n").map((line, lineIndex) => (
      <React.Fragment key={lineIndex}>
        {line.split(/(\s+|,|;|\(|\))/).map((word, wordIndex) => {
          let colorClass = "text-gray-900";

          if (["SELECT", "FROM", "WHERE", "LIMIT", "COALESCE", "SUM", "AS", "LEFT", "JOIN", "ON", "AND", "GROUP", "BY"].includes(word.toUpperCase())) {
            colorClass = "text-blue-500";
          } else if (["id", "name", "email", "users", "status"].includes(word)) {
            colorClass = "text-green-600";
          } else if (["=", ">", "<"].includes(word)) {
            colorClass = "text-pink-500";
          } else if (word.startsWith("'") && word.endsWith("'")) {
            colorClass = "text-purple-500";
          } else if ([",", ";"].includes(word)) {
            colorClass = "text-gray-500";
          }

          return (
            <span key={wordIndex} className={colorClass}>
              {word}
            </span>
          );
        })}
        {lineIndex < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="w-full h-full rounded-lg bg-gray-50">
      <div className="relative bg-gray-100 text-gray-900 rounded-md p-4 w-full h-72 font-mono text-sm leading-6 overflow-hidden whitespace-pre-wrap">
        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <span>SQL Editor</span>
          <span>example.sql</span>
        </div>

        <div>
          {getHighlightedText(typedText)}
          {!showAutoComplete && <span className="bg-gray-900 text-white animate-pulse">&nbsp;</span>}
        </div>

        {showAutoComplete && (
          <div className="absolute bottom-4 left-4 bg-white border border-gray-300 rounded-md w-64 text-sm">
            <ul>
              {autoCompleteOptions.map((option, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 text-gray-500 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};


const TestingComponent = () => {
  const [highlightedRow, setHighlightedRow] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedRow((prev) => (prev === 1 ? null : 1)); // Highlight row 2 on a loop
    }, 4000); // Animation every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const dataset = [
    {
      id: 1,
      product: "A",
      region: "NA",
      revenue: "$12340",
      transformed_revenue: "$12,340",
      status: "✅",
    },
    {
      id: 2,
      product: "B",
      region: "EU",
      revenue: "$8120",
      transformed_revenue: "Error: Negative value",
      status: "❌",
    },
    {
      id: 3,
      product: "C",
      region: "APAC",
      revenue: "$4980",
      transformed_revenue: "$4980",
      status: "✅",
    },
    {
      id: 4,
      product: "D",
      region: "LATAM",
      revenue: "$6550",
      transformed_revenue: "$6550",
      status: "✅",
    },
  ];

  return (
    <div className="w-full h-full p-6 rounded-lg bg-white">
      {/* Visualization */}
      <div className="relative bg-gray-50 text-gray-800 rounded-md p-4 w-full h-72 font-mono text-xs md:text-xs lg:text-sm leading-6 overflow-hidden">
        {/* Dataset Header */}
        <div className="grid grid-cols-5 font-bold text-gray-600 text-xs border-b border-gray-300 pb-2 mb-2">
          <div>ID</div>
          <div>Product</div>
          <div>Region</div>
          <div>Revenue</div>
          <div>Status</div>
        </div>

        {/* Dataset Rows */}
        <div className="divide-y divide-gray-200">
          {dataset.map((row, index) => (
            <div
              key={row.id}
              className={`grid grid-cols-5 py-2 px-2 rounded-md transition-all duration-300 ${
                highlightedRow === index
                  ? "bg-red-50 animate-pulse"
                  : row.status === "Failed"
                  ? "bg-red-100 text-red-600"
                  : "hover:bg-gray-100"
              } text-xs sm:text-xs md:text-sm`}
            >
              <div>{row.id}</div>
              <div>{row.product}</div>
              <div>{row.region}</div>
              <div>{row.revenue}</div>
              <div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    row.status === "Success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const EfficiencyComponent = () => {
  const pipelineStages = [
    { id: 1, stage: "Ingestion", rows: 5000000, efficiency: 95 },
    { id: 2, stage: "Transformation", rows: 4800000, efficiency: 67 },
    { id: 3, stage: "Loading", rows: 4500000, efficiency: 92 },
    { id: 4, stage: "Visualization", rows: 4000000, efficiency: 89 },
  ];

  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev === pipelineStages.length - 1 ? 0 : prev + 1));
    }, 1500); // Update stage every 1.5 seconds

    return () => clearInterval(interval);
  }, [pipelineStages.length]);

  const getBarColor = (efficiency:any) => {
    if (efficiency >= 90) return "bg-green-400";
    if (efficiency >= 70) return "bg-yellow-400";
    return "bg-red-400";
  };

  return (
    <div className="w-full h-80 bg-white rounded-lg p-6 pb-4 flex flex-col justify-between">
      {/* Bar Chart */}
      <div className="space-y-4 flex-1">
        {pipelineStages.map((stage, index) => (
          <div key={stage.id} className="flex items-center space-x-4">
            {/* Stage Name */}
            <div className="w-32 text-sm text-gray-600">{stage.stage}</div>
            {/* Bar Container */}
            <div className="relative flex-1 h-6 bg-gray-200 rounded overflow-hidden">
              <div
                className={`absolute h-6 rounded ${getBarColor(stage.efficiency)} transition-all duration-700`}
                style={{
                  width: currentStage === index ? `${(stage.rows / 5000000) * 100}%` : "0%",
                }}
              ></div>
            </div>
            {/* Row Count */}
            <div className="w-20 text-right text-sm text-gray-600">
              {stage.rows.toLocaleString()} rows
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DashboardStats = () => {
  const initialIssues = [
    { id: 1, label: "Redundant 'customer_segmentation_v3' model", type: "warning", detected: false },
    { id: 2, label: "Fragmentation: pipeline 'stg_data_normalization'", type: "error", detected: false },
    { id: 3, label: "Unused transformation 'calculate_discount_rate'", type: "warning", detected: false },
    { id: 4, label: "Pipeline Healthy 'order_processing_stage'", type: "success", detected: false },
  ];

  const [issues, setIssues] = useState(initialIssues);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < issues.length) {
        setIssues((prevIssues) => {
          const newIssues = [...prevIssues];
          newIssues[currentIndex].detected = true;
          return newIssues;
        });
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Reset detection after all issues have been processed
        setTimeout(() => {
          setIssues(initialIssues); // Reset issues
          setCurrentIndex(0); // Restart loop
        }, 2000); // Delay before restarting the loop
      }
    }, 1000); // Simulate issue detection every 1 second

    return () => clearInterval(interval);
  }, [currentIndex, issues.length]);

  return (
    <div className="bg-gray-50 p-2 md:p-3 rounded-xl max-w-5xl mx-auto w-full h-80">
      <div className="space-y-2 h-full flex flex-col">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className={`p-2 rounded-lg flex items-center gap-2 h-full md:h-14 ${
              issue.detected
                ? issue.type === "success"
                  ? "bg-green-50 border-green-300"
                  : issue.type === "warning"
                  ? "bg-yellow-50 border-yellow-300"
                  : "bg-red-50 border-red-300"
                : "bg-gray-100 border-gray-200"
            }`}
          >
            {/* Indicator */}
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                issue.detected
                  ? issue.type === "success"
                    ? "bg-green-500"
                    : issue.type === "warning"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                  : "bg-gray-400 animate-pulse"
              }`}
            ></div>
            {/* Issue Text */}
            <div className="flex-1 overflow-hidden">
              <p
                className={`text-xs sm:text-sm truncate ${
                  issue.detected ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {issue.label}
              </p>
            </div>
            {/* Status */}
            <div
              className={`text-xs px-2 py-0.5 rounded w-auto md:w-14 text-center ${
                issue.detected
                  ? issue.type === "success"
                    ? "bg-green-100 text-green-600"
                    : issue.type === "warning"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                  : "opacity-0"
              }`}
            >
              {issue.detected
                ? issue.type === "success"
                  ? "Healthy"
                  : issue.type === "warning"
                  ? "Detected"
                  : "Critical"
                : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DocsComponent = () => {
  const [generatedDocs, setGeneratedDocs] = useState<string[]>([]);
  const [currentDocIndex, setCurrentDocIndex] = useState<number>(0);

  // Only two definitions
  const docs = [
    "## 📈 Revenue Growth\n- **Desc**: YoY revenue % growth\n- **Src**: Transactions 🛒\n- **Formula**: `(Current - Prev) / Prev`\n- **Freq**: Monthly 📅",
    "## 👥 Active Users\n- **Desc**: Users with at least one activity\n- **Src**: Users 🙋‍♂️🙋‍♀️\n- **Formula**: `COUNT(DISTINCT user_id)`\n- **Freq**: Daily 🕒",
  ];

  useEffect(() => {
    // Start an interval that keeps generating the documentation one by one
    const interval = setInterval(() => {
      if (currentDocIndex < docs.length) {
        // Add the current document to the list
        setGeneratedDocs((prevDocs) => [...prevDocs, docs[currentDocIndex]]);
        setCurrentDocIndex((prev) => prev + 1);
      } else {
        // Once all documents are generated, reset the process
        setGeneratedDocs([]);
        setCurrentDocIndex(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentDocIndex]);

  return (
    <div className="w-full h-80 bg-white rounded-lg flex flex-col">
      {/* Docs Container */}
      <div className="p-6 h-full overflow-hidden bg-gray-50 rounded-b-lg flex flex-col gap-4">
        {generatedDocs.length === 0 ? (
          <p className="text-base text-gray-700 flex items-center justify-center h-full">
            <span className="flex items-center gap-2">
              <span className="spinner border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full w-5 h-5"></span>
              📄 Generating documentation...
            </span>
          </p>
        ) : (
          <div className="flex flex-col gap-4 overflow-hidden h-full">
            {generatedDocs.map((doc, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-md shadow-sm overflow-y-auto flex-1"
              >
                <pre className="text-[11px] text-gray-900 leading-relaxed whitespace-pre-wrap">
                  {doc}
                </pre>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .spinner {
          border-top-color: blue;
          border-style: solid;
          border-width: 4px;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

// Main content configuration
const TEXTS = {
  title: "Make data fun again",
  description: "Full-stack data solution. All in one box 📦",
  features: [
    {
      id: 1,
      title: "Assistance",
      subtitle: "Context-aware help while you code",
      
      description: "Preswald understands your entire data stack—from the structure of your tables to the quirks of your ETL logic. Get context-aware autocompletion, intelligent debugging, and real-time suggestions.",
      component: AssistanceComponent,
    },
    {
      id: 2,
      title: "Reliability",
      subtitle: "Fix problems before they impact production",
      description: "Test data transformations on local datasets to identify potential issues early. Avoid costly errors in production and minimize the risk of disrupting critical business metrics.",
      component: TestingComponent,
    },
    {
      id: 3,
      title: "Efficiency",
      subtitle: "Find and fix fragmentation",
      description: "Misaligned, redundant, or overly complex transformations can lead to delays, inconsistent outputs, and costly maintenance. Stop this in its tracks.",
      component: DashboardStats,
    },
    {
      id: 4,
      title: "Validation",
      subtitle: "Simulate production environments",
      description: "Replicate real production environments to test your data and catch issues before they arise. Catch issues early. Save time and resources.",
      component: EfficiencyComponent,
    },
    {
      id: 5,
      title: "Documentation",
      subtitle: "No more doc-writing stress",
      description: "Automatically generate clear and accurate documentation from your code, including data lineage, transformation logic, and dataset context.",
      component: DocsComponent,
    },
  ],
};

export default function Example() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-blue-600">{TEXTS.title}</h2>
        <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          {TEXTS.description}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {TEXTS.features.map((feature, index) => {
            const FeatureComponent = feature.component; // Extract the component
            return (
              <div
                key={feature.id}
                className={`relative ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${
                  index === 0 ? "max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" : ""
                } ${index === 1 ? "lg:rounded-tr-[2rem]" : ""} ${
                  index === 3 ? "lg:rounded-bl-[2rem]" : ""
                } ${index === 4 ? "max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" : ""}`}
              >
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                  <FeatureComponent />
                  <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-blue-600">{feature.title}</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                      {feature.subtitle}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">{feature.description}</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
