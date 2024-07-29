export default function Integrations() {
    return (
      <>
      <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Integrations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Effortlessly consolidate your data with our seamless integration solution. Sync data from all your sources in real time. Ensure your information is always up-to-date and accessible.
          </p>
        </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            <div className="bg-gray-400/5 p-8 sm:p-10">
              <img
                alt="Excel"
                src="images/excel.png"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </div>
            <div className="bg-gray-400/5 p-6 sm:p-10">
              <img
                alt="Google Sheets"
                src="images/sheets.png"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </div>
            <div className="bg-gray-400/5 p-6 sm:p-10">
              <img
                alt="Calendar"
                src="images/calendar.png"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </div>
            <div className="bg-gray-400/5 p-6 sm:p-10">
              <img
                alt="Salesforce"
                src="images/salesforce.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </div>
            <div className="bg-gray-400/5 p-6 sm:p-10">
              <img
                alt="PostgrseSQL"
                src="images/postgres.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </div>
            <div className="bg-gray-400/5 p-6 sm:p-10">
              <img
                alt="bigquery"
                src="images/bigquery.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </div>
            <div className="bg-gray-400/5 p-6 sm:p-10">
              <img
                alt="Hubspot"
                src="images/hubspot.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </div>
            <div className="bg-gray-400/5 p-6 sm:p-10">
              <img
                alt="Intercom"
                src="images/intercom.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </div>
            <div className="bg-gray-400/5 p-6 sm:p-10">
              <img
                alt="Snowflake"
                src="images/snowflake.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
  