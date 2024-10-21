'use client';
import { useEffect, useState } from 'react';

/* App Screenshot Component with Tab-based Image Switching */

interface Tab {
  name: string;
  href: string;
  current: boolean;
  imageUrl: string;
}

const tabs: Tab[] = [
  { name: 'Connect', href: '#', current: true, imageUrl: '/images/hero.png' },
  { name: 'Explore', href: '#', current: false, imageUrl: '/images/datasources.png' },
  { name: 'Create', href: '#', current: false, imageUrl: '/images/metrics.png' },
  { name: 'Alert', href: '#', current: false, imageUrl: '/images/hero.png' },
  { name: 'Monitor', href: '#', current: false, imageUrl: '/images/hero.png' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function AppScreenshot() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]); // Initialize state with the first tab
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManualSelection, setIsManualSelection] = useState(false); // New state to track manual interaction

  useEffect(() => {
    if (!isManualSelection) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % tabs.length); // Cycle through the tabs
      }, 4000); // Change tab every 4 seconds

      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }
  }, [isManualSelection]); // Effect only runs when isManualSelection is false

  useEffect(() => {
    setSelectedTab(tabs[currentIndex]); // Update selected tab when currentIndex changes
  }, [currentIndex]);

  const handleTabClick = (tab: Tab, index: number) => {
    setSelectedTab(tab); // Set the selected tab when a tab is clicked
    setCurrentIndex(index); // Update the index to reflect manual selection
    setIsManualSelection(true); // Disable the interval after manual click
  };

  return (
    <div className="mt-10 mb-2 flow-root sm:mt-20">
      {/* Tabs Section */}
      <div className="hidden sm:block">
        <div className="mb-6"> {/* Add mb-6 here to increase bottom margin */}
          <nav aria-label="Tabs" className="-mb-px flex">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab, index)}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  selectedTab.name === tab.name
                    ? 'bg-blue-100 text-blue-700 rounded-lg'
                    : 'text-gray-500 hover:text-gray-700 rounded-lg',
                  'w-full text-center py-2 text-sm font-medium' // Make each button take full width with text centered
                )}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Screenshot Section */}
      <div className="mt-10 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
        <img
          alt={selectedTab.name + ' screenshot'}
          src={selectedTab.imageUrl} // Image URL based on selected tab
          width={2432}
          height={1442}
          className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
        />
      </div>
    </div>
  );
}
