import Image from "next/image";
import bgImage from './bg.jpg';
import imagaPlaceholder from '/public/love.svg';
import { flushAllTraces } from "next/dist/trace";
import React, { useState, useEffect } from "react";
import useSound from 'use-sound';
import mySound from '/song.mp3';



export default function Page() {



    return (
        <div className="flex flex-row items-center justify-center">
            <span className="font-bold text-2xl bg-red-200 text-black p-4">I Love You</span>



        </div>

    )
}

