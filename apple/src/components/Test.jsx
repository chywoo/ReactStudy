import { useEffect, useRef } from "react";
import { heroVideo, smallHeroVideo } from '../utils';

function VideoPlayer() {
    const videoRef = useRef(null);

    // This will run once when the component mounts
    useEffect(() => {
        console.log("On mount duration:", videoRef.current.duration); // Probably NaN
    }, []);

    const handleLoadedMetadata = () => {
        console.log("After metadata loaded:", videoRef.current.duration); // Actual duration!
    };

    return (
        <video
            ref={videoRef}
            src={heroVideo}
            onLoadedMetadata={handleLoadedMetadata}
        />
    );
}

export default VideoPlayer;