import Image from "next/image";
import bgImage from './bg.jpg';

import imagaPlaceholder from '/public/love.svg';
import { flushAllTraces } from "next/dist/trace";
import React, { useState, useEffect } from "react";


export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-2xl bg-red-200 text-black p-4">I Love You</p>
            <audio src="song-bg.mp3" controls autoPlay></audio>

        </div>
    )
}

