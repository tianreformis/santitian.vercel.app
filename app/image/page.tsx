import Image from "next/image";
import bgImage from './bg.jpg';
import imagePlaceholder from '/public/love.svg';

"use client";
import React, { useState, useEffect } from "react";

const useAudio = (url: string) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        setPlaying(!playing);
        playing ? audio.play() : audio.pause();
    };

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

export default function Page() {
    const [playing, toggle] = useAudio("./song-bg.ogg");

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-2xl bg-red-200 text-black p-4">I Love You</p>
         
            <button onClick={toggle} className="bg-white text-black font bold mt-7 p-4 rounded-lg">Play/Pause</button>
        </div>
    );
}