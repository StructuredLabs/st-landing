import { ShieldCheckIcon, DocumentTextIcon, PresentationChartBarIcon, UsersIcon } from '@heroicons/react/24/outline'

const HEADING_TITLE = '😎 Too cool for data chaos';
const HEADING_SUBTITLE = 'Analytics in code, not in 20 different tools';
const HEADING_DESCRIPTION = 'Preswald is designed to help you create a lightweight, flexible analytics stack—all in code and ready to be shaped into whatever you need.';

const FEATURE_1_NAME = 'Cut costs by catching issues early';
const FEATURE_1_DESCRIPTION = 'Broken pipelines wreck dashboards, mess up metrics, and waste everyone\'s time. Preswald catches issues before they go live, saving you from costly production firefights and keeping your data reliable.';
const FEATURE_2_NAME = 'Avoid knowledge bottlenecks';
const FEATURE_2_DESCRIPTION = 'Tribal knowledge shouldn\'t be the backbone of your data stack. Preswald generates clear, automatic documentation, so anyone can step in and keep things running.';
const FEATURE_3_NAME = 'Build trust in your data';
const FEATURE_3_DESCRIPTION = 'Data quality issues can make your team doubt the numbers. Preswald helps you build trust in your data. Catch issues early and easily understand what’s going on.';
const FEATURE_4_NAME = 'Do more with the team you have';
const FEATURE_4_DESCRIPTION = 'You don\'t need to hire a big team or buy a patchwork of SaaS tools to get the simple metrics and numbers you need right away. Uplevel your existing talent with Preswald.';

const features = [
  {
    name: FEATURE_4_NAME,
    description: FEATURE_4_DESCRIPTION,
    icon: UsersIcon,
  },
  {
    name: FEATURE_3_NAME,
    description: FEATURE_3_DESCRIPTION,
    icon: PresentationChartBarIcon,
  },
  {
    name: FEATURE_1_NAME,
    description: FEATURE_1_DESCRIPTION,
    icon: ShieldCheckIcon,
  },
  {
    name: FEATURE_2_NAME,
    description: FEATURE_2_DESCRIPTION,
    icon: DocumentTextIcon,
  }
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-blue-600">{HEADING_TITLE}</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {HEADING_SUBTITLE}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            {HEADING_DESCRIPTION}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/5 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
