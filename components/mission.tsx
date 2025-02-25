import React from 'react';

export default function Mission() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-black text-2xl font-serif text-center px-6 leading-relaxed">
            <div className="max-w-3xl w-full">
                <img src="/images/high-contrast-logo.png" alt="Logo" className="w-48 h-auto mt-12 mb-12 mx-auto" />

                <p className="italic mb-6 text-gray-600 border-l-4 border-gray-400 pl-4 text-xl">"The limit of our intelligence is not what we know, but how we think."</p>
                <p className="mb-6">---</p>
                <p className="mb-6">
                    We are an applied AI lab building a <strong>new medium for thought</strong>: a new way to explore and reason with data.
                </p>

                <p className="mb-6">
                    We are the makers of{' '}
                    <a href="https://github.com/StructuredLabs/preswald" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline font-bold"> Preswald</a>,
                    an agentic data workspace for analysts and engineers to explore data, test ideas, share learnings, and uncover meaning. It is an interface where human and machine intelligence collaborate to push the boundaries of discovery.
                </p>

                <p className="mb-6">
                    We are backed by <strong>Y Combinator</strong>, <strong>General Catalyst</strong>, <strong>Z Fellows</strong>, and more.
                </p>

                <p className="mb-6">
                    We're a fully in-person team based in San Francisco, building from first principles at the frontier of AI and interactive computing. If you're interested in joining us, get in touch:
                    <a href="mailto:founders@structuredlabs.com" className="text-blue-500 underline"> founders@structuredlabs.com</a>
                </p>

                <p className="mt-6 text-lg text-gray-800">
                    —
                    <a href="https://linkedin.com/in/amruthagujjar" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline font-bold"> Amrutha</a>,
                    <a href="https://linkedin.com/in/shivam-singhal" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline font-bold"> Shivam</a>,
                    and the Structured Labs team
                </p>
            </div>
        </div>
    );
}
