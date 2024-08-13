import { integrations, integrationsPageTitle, integrationsPageSubtitle } from '../pageContent';

export default function Integrations() {
  return (
    <>
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {integrationsPageTitle}
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {integrationsPageSubtitle}
        </p>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-400/5 p-6 sm:p-10">
                <img
                  alt={integration.alt}
                  src={integration.src}
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
