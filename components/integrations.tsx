import React from 'react';

const integrations = [
  { src: '/images/integrations/cube.svg', alt: 'Cube' },
  { src: '/images/integrations/dbt.png', alt: 'DBT' },
  { src: '/images/integrations/postgres.svg', alt: 'PostgreSQL' },
  { src: '/images/integrations/bigquery.svg', alt: 'BigQuery' },
  { src: '/images/integrations/motherduck.png', alt: 'Motherduck' },
  { src: '/images/integrations/snowflake.svg', alt: 'Snowflake' },
  { src: '/images/integrations/redshift.svg', alt: 'Redshift' },
  { src: '/images/integrations/databricks.svg', alt: 'Databricks' },
  { src: '/images/integrations/notion.png', alt: 'Notion' },
  { src: '/images/integrations/clickhouse.svg', alt: 'Clickhouse' },
  { src: '/images/integrations/github.svg', alt: 'GitHub' },
  { src: '/images/integrations/slack.svg', alt: 'Slack' },
];

const Integrations = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-[2fr_1fr]">
          <div className="mx-auto grid w-full max-w-xl grid-cols-4 items-center gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:pl-8">
            {integrations.map((integration, index) => (
              <img
                key={index}
                alt={integration.alt}
                src={integration.src}
                className="max-h-12 w-full object-contain object-left"
              />
            ))}
          </div>
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              1-Click Integrations
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Spend less time setting up and more time executing.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <a
                href="https://app.structuredlabs.com/settings/organization/connections"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get Started
              </a>
              <a href="https://docs.structuredlabs.com/integrations" className="text-sm font-semibold text-gray-900">
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;