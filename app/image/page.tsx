import Image from "next/image";
import bgImage from './bg.jpg';
import imagePlaceholder from '/public/love.svg';


export default function Page() {

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="font-bold text-2xl bg-red-200 text-black p-4">I Love You</p>
            <audio className="pt-10" src="song-bg.mp3" typeof="audio/mpeg" controls autoPlay>Play</audio>
        </div>
    )
}

