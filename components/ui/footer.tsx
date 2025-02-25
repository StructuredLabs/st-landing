import { FaLinkedin, FaXTwitter, FaGithub, FaSlack } from "react-icons/fa6";
import { AiFillSlackCircle } from "react-icons/ai";

const navigation = {
  company: [
    { name: 'Product', href: 'https://www.preswald.com' },
    { name: 'Contact', href: 'mailto:founders@structuredlabs.com' },
    { name: 'Blog', href: 'https://www.blog.preswald.com/' },
    { name: 'Documentation', href: 'https://docs.preswald.com' },
  ],
  social: [
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/company/structuredlabs/',
      icon: (props: any) => <FaLinkedin className="h-6 w-6" />,
    },
    {
      name: 'Twitter',
      href: 'https://www.x.com/structuredlabs',
      icon: (props: any) => <FaXTwitter className="h-6 w-6" />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/StructuredLabs/preswald',
      icon: (props: any) => <FaGithub className="h-6 w-6" />,
    },
    {
      name: 'Slack',
      href: 'https://preswald-community.slack.com/join/shared_invite/zt-265ong01f-UHP6BP3FzvOmMQDIKty_JQ',
      icon: (props: any) => <FaSlack className="h-6 w-6" />,
    },
  ],
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <div className="border-t border-gray-900/10 py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          {navigation.company.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
