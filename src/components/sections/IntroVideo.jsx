import introVideo from "@assets/videos/intro-video.mp4";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function IntroVideo() {
    const videoRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const play = React.useCallback(() => videoRef.current.play(), []);
    const pause = React.useCallback(() => videoRef.current.pause(), []);
    const toggle = React.useCallback(() => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
        setIsPlaying(prev => !prev);
    }, [isPlaying, pause, play]);

    return (
        <section className="intro-video-section py-5 md:py-10" id="introVideo">
            <div className="container">
                <div className="content-wrapper aspect-video relative">
                    <video
                        ref={videoRef}
                        src={introVideo}
                        controls={false}
                        loop={true}
                        muted={true}
                        className="rounded-lg w-full h-full object-cover"
                    ></video>
                    <button
                        type="button"
                        onClick={toggle}
                        aria-label={isPlaying ? "Pause" : "Play"}
                        title={isPlaying ? "Pause" : "Play"}
                        className="contollers-overlay rounded-lg w-full h-full absolute z-1 left-0 top-0 flex items-center justify-center group"
                    >
                        <div className={`${isPlaying ? "opacity-0" : "opacity-100"} group-hover:opacity-100 transition duration-200 ease-out w-15 h-15 sm:w-20 sm:h-20 md:w-25 md:h-25 rounded-full flex items-center justify-center bg-white/99/30 backdrop-blur-sm text-white text-xl sm:text-2xl md:text-3xl border-4 border-white/20`}>
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                            <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default IntroVideo;