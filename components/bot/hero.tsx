import { featuresPageSubtitle } from "../pageContent";

export default function Hero() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl tracking-wide font-bold tracking-tight text-gray-900 sm:text-5xl">Features</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            {featuresPageSubtitle}
            </p>
          </div>
        </div>
      </div>
    )
  }
  