'use client';

export default function AppScreenshot() {
  return (
    <div className="mt-10 mb-2 flow-root sm:mt-20">
      <div className="mt-10 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
        <img
          alt={'screenshot'}
          src={'/images/hero/connect.png'} 
          width={2432}
          height={1442}
          className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
        />
      </div>
    </div>
  );
}
