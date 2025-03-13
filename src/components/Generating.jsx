import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import loading from "../assets/loading.png";

const Generating = ({ className, messages, customPrompt }) => {
    const textRef = useRef(null);
    const timeline = useRef(null);

    useGSAP(() => {
        if (textRef.current) {
            timeline.current = gsap.timeline({ repeat: -1 });

            messages.forEach((msg, index) => {
                timeline.current
                    .set(textRef.current, {
                        opacity: 1,
                        y: 0,
                        innerHTML: msg
                    })
                    .to(textRef.current, {
                        y: -10,
                        opacity: 0,
                        duration: 0.5,
                        delay: 3
                    })
                    .set(textRef.current, {
                        y: 10,
                        innerHTML: messages[(index + 1) % messages.length]
                    })
                    .to(textRef.current, {
                        y: 0,
                        opacity: 1,
                        duration: 0.5
                    });
            });
        }
    }, []);

    return (
        <div className={`flex items-center justify-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
            <img src={loading} className="w-5 h-5 mr-3 animate-spin" alt="Loading" />
            {customPrompt ? <span>{customPrompt}</span> : <span ref={textRef} />}
        </div>
    );
};

export default Generating;