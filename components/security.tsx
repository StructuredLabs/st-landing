import { LockClosedIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'SOC 2 Type 1 Certified',
    description: '',
    href: 'https://www.structuredlabs.com/blog/Structured%20is%20now%20SOC%202%20Type%201%20Compliant',
    icon: null, // No icon here since it's an image now
    imageSrc: 'images/soc2type1-badge.png', // Replace this with the actual path to your SOC 2 badge image
  },
  {
    name: 'End-to-End Encryption',
    description:
      'Protect your data with enterprise-grade AES-256 encryption. Whether in transit or at rest, your sensitive information remains secure, ensuring compliance and peace of mind. Our encryption protocols, including regular key rotations, are designed to meet the most stringent security standards.',
    href: 'https://docs.structuredlabs.com/datapolicy',
    icon: LockClosedIcon,
  },
  {
    name: 'Compliant Data Retention',
    description:
      'Data retention policies are built to meet SOC 2 Type I standards, automatically managing data retention periods and secure disposal. When data is no longer needed, it is irreversibly deleted using NIST-compliant methods, ensuring no traces remain and protecting your business from compliance risks.',
    href: 'https://docs.structuredlabs.com/datapolicy',
    icon: ShieldCheckIcon,
  },
]

export default function Security() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Putting Security First
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We take security seriously. Our platform ensures your data is protected with best-in-class compliance, access control, and reporting features.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`${
                  index === 0 ? '' : 'border border-gray-200 rounded-lg hover:bg-gray-50'
                } p-6 transition`}
              >
                {index === 0 ? (
                    <img src={feature.imageSrc} alt="SOC 2 Type 1 Badge" className="w-40 h-40 mx-auto object-contain" />
                ) : (
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                        {feature.icon && (
                          <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <h3 className="ml-4 text-lg font-semibold text-gray-900">{feature.name}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                    <a href={feature.href} className="mt-4 inline-block text-blue-600 font-semibold">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
