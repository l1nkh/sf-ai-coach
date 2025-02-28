import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import loading from "../assets/loading.png";

const messages = [
    "Use your drive meter to perform the <b class='animate-pulse text-yellow-300'>ULTRA</b> at the end of the combo",
    "<b class='animate-pulse text-yellow-300'>Don't</b> overcommit to heavy punches, it’s easy to punish",
    "You’re too predictable with the fireballs, vary the <b class='animate-pulse text-yellow-300'>SPEED</b>"
];

const Generating = ({ className }) => {
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
            <span ref={textRef} />
        </div>
    );
};

export default Generating;