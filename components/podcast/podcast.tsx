"use client";

const people = [
    {
        name: 'Ajay Uppaluri',
        role: 'Head of Revenue Ops @SourceGraph',
        imageUrl:
            '/images/podcast/1.png',
        xUrl: '#',
        linkedinUrl: '#',
        youtubeUrl: 'https://youtu.be/rnNQ0l1ONQs?si=DePAIkTgSVJEphRu',
    },
    {
        name: 'Theo Gordon-Moritz',
        role: 'VP of Growth @Certa',
        imageUrl:
            '/images/podcast/2.png',
        xUrl: '#',
        linkedinUrl: '#',
        youtubeUrl: 'https://youtu.be/HjZ_0ww61ic?si=9zM5Fn3X8onmtRSa',
    },
    {
        name: 'Rahil Jetly',
        role: 'Sales Ops @Carta',
        imageUrl:
            '/images/podcast/3.png',
        xUrl: '#',
        linkedinUrl: '#',
        youtubeUrl: 'https://youtu.be/a4z_ajNa-WU?si=6k9UbuOm8IpgqtbO',
    },
    {
        name: 'Greg Larsen',
        role: 'VP, RevOps @ Eltropy',
        imageUrl:
            '/images/podcast/4.png',
        xUrl: '#',
        linkedinUrl: '#',
        youtubeUrl: 'https://www.youtube.com/watch?v=ArftxNWi-Nc',
    },
    {
        name: 'Stephanie Reck',
        role: 'RevOps Growth Leader',
        imageUrl:
            '/images/podcast/5.png',
        xUrl: '#',
        linkedinUrl: '#',
        youtubeUrl: '#',
    },
    {
        name: 'Drake Senter',
        role: 'RevOps Growth Leader',
        imageUrl:
            '/images/podcast/6.png',
        xUrl: '#',
        linkedinUrl: '#',
        youtubeUrl: 'https://www.youtube.com/watch?v=CePcj9dF2qM',
    },
]

export default function Podcast() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Structured Podcast</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Come join us as we pick the brains of industry pros on all things data, metrics, and more—prepare for insights and discoveries!
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
                >
                    {people.map((person) => (
                        <li key={person.name} className="border border-gray-200 rounded-lg p-6">
                            <img alt="" onClick={
                                () => {
                                    // open a link in a new tab
                                    window.open(person.youtubeUrl)
                                }
                            } src={person.imageUrl} className="aspect-[16/9] w-full rounded-2xl object-cover cursor-pointer" />
                            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                            <p className="text-base leading-7 text-gray-600">{person.role}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
