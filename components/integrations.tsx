import React from 'react';

const integrations = [
  { src: '/images/integrations/motherduck.png', alt: 'Motherduck' },
  { src: '/images/integrations/cube.svg', alt: 'Cube' },
  { src: '/images/integrations/dbt.png', alt: 'DBT' },
  { src: '/images/integrations/postgres.svg', alt: 'PostgreSQL' },
  { src: '/images/integrations/bigquery.svg', alt: 'BigQuery' },
  { src: '/images/integrations/snowflake.svg', alt: 'Snowflake' },
  { src: '/images/integrations/redshift.svg', alt: 'Redshift' },
  { src: '/images/integrations/databricks.svg', alt: 'Databricks' },
  { src: '/images/integrations/notion.png', alt: 'Notion' },
  { src: '/images/integrations/clickhouse.svg', alt: 'Clickhouse' },
  { src: '/images/integrations/github.svg', alt: 'GitHub' },
  { src: '/images/integrations/slack.svg', alt: 'Slack' },
];

const Integrations = () => {
  const radiusX = 320; // Increase horizontal radius for more space around the text
  const radiusY = 200; // Increase vertical radius for more space around the text
  const centerX = 350;
  const centerY = 350;
  const iconSize = 80;

  const randomOffset = (range: number) => Math.random() * range - range / 2;

  return (
    <div className="relative py-6 w-full flex flex-col items-center justify-center">
      {/* Text for mobile (above the grid) */}
      <div className="text-center z-10 w-[80%] sm:hidden mb-6">
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900">
          Integrations
        </h2>
        <p className="mt-4 sm:mt-6 text-md sm:text-xl text-gray-600">
          Define your metrics once, trust them everywhere. One platform, consistent definitions.
        </p>
      </div>

      {/* Grid for mobile (visible only on mobile screens) */}
      <div className="w-full sm:hidden">
        <div className="grid grid-cols-3 gap-4 p-4">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex justify-center items-center border rounded-lg p-2 hover:bg-gray-200"
            >
              <img
                src={integration.src}
                alt={integration.alt}
                className="h-12 w-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Oval layout for larger screens (text in center, icons in a circle) */}
      <div className="hidden relative sm:block w-[700px] h-[700px]">
        {/* Text for larger screens (centered within the oval, with margin) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-24"> {/* Add padding */}
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Integrations
          </h2>
          <p className="mt-4 sm:mt-6 text-md sm:text-xl text-gray-600">
            Define your metrics once, trust them everywhere. One platform, consistent definitions.
          </p>
        </div>

        {integrations.map((integration, index) => {
          // Calculate angle and position for each integration
          const angle = (index / integrations.length) * 2 * Math.PI;
          const x =
            centerX +
            radiusX * Math.cos(angle) +
            randomOffset(20) - // Add less randomness
            iconSize / 2;
          const y =
            centerY +
            radiusY * Math.sin(angle) +
            randomOffset(20) - // Add less randomness
            iconSize / 2;

          return (
            <div
              key={index}
              className="absolute transition-transform duration-200 ease-in-out hover:animate-pulse"
              style={{
                top: `${y}px`,
                left: `${x}px`,
              }}
            >
              <div className="w-20 h-20 border rounded-lg flex items-center justify-center p-2 hover:bg-gray-200">
                <img
                  src={integration.src}
                  alt={integration.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Integrations;
