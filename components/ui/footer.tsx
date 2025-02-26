import { FaLinkedin, FaXTwitter, FaGithub, FaSlack } from "react-icons/fa6";

const navigation = {
  company: [
    { name: "Product", href: "https://www.preswald.com" },
    { name: "Contact", href: "mailto:founders@structuredlabs.com" },
    { name: "Blog", href: "https://www.blog.structuredlabs.com/" },
    { name: "Documentation", href: "https://docs.preswald.com" },
  ],
  social: [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/structuredlabs/",
      icon: () => <FaLinkedin className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      href: "https://www.x.com/structuredlabs",
      icon: () => <FaXTwitter className="h-6 w-6" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/StructuredLabs/preswald",
      icon: () => <FaGithub className="h-6 w-6" />,
    },
    {
      name: "Slack",
      href: "https://preswald-community.slack.com/join/shared_invite/zt-265ong01f-UHP6BP3FzvOmMQDIKty_JQ",
      icon: () => <FaSlack className="h-6 w-6" />,
    },
  ],
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <div className="border-t border-gray-900/10 py-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* First row (Links) */}
        <div className="flex flex-wrap justify-center gap-4">
          {navigation.company.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Second row (Socials) */}
        <div className="flex justify-center gap-4">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
