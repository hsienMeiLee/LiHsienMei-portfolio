    import React, { useRef, useEffect } from "react";
    import './Language.css';
    const ProgressBar = ({
    finalPercent = 100,
    radius = 60,
    duration = 1500,
    skill = "listening",
    color = "#ffacac",
    }) => {
    const circleRef = useRef(null);
    const textRef = useRef(null);
    const containerRef = useRef(null); // the container for intersection
    const hasAnimated = useRef(false);

    // Circle circumference
    const CIRCUMFERENCE = 2 * Math.PI * radius;

    // Initialize strokeDasharray
    useEffect(() => {
        if (circleRef.current) {
        circleRef.current.style.strokeDasharray = CIRCUMFERENCE;
        circleRef.current.style.strokeDashoffset = CIRCUMFERENCE;
        }
    }, [CIRCUMFERENCE]);

    // This function runs the animation from 0% to finalPercent
    function animate() {
        let startTime = performance.now();

        function step(timestamp) {
        const elapsed = timestamp - startTime;
        let fraction = elapsed / duration;
        if (fraction > 1) fraction = 1;

        // fraction goes 0..1 => finalPercent * fraction
        const progress = fraction * finalPercent;

        // Update text
        if (textRef.current) {
            textRef.current.textContent = `${Math.floor(progress)}%`;
        }

        // partial fraction for offset
        const partial = fraction * (finalPercent / 100);
        const offset = CIRCUMFERENCE - partial * CIRCUMFERENCE;
        if (circleRef.current) {
            circleRef.current.style.strokeDashoffset = offset;
        }

        if (fraction < 1) {
            requestAnimationFrame(step);
        }
        }
        requestAnimationFrame(step);
    }

    // Intersection Observer Setup
    useEffect(() => {
        // Callback: if the container is in view and we haven't animated yet, run animate()
        const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true; 
            animate(); // run the progress animation once
            observer.unobserve(entry.target); // optional unobserve if only once needed
            }
        });
        };

        const observerOptions = {
        threshold: 0.5, // run the callback when 50% of the element is visible
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (containerRef.current) {
        observer.observe(containerRef.current);
        }

        return () => {
        if (containerRef.current) {
            observer.unobserve(containerRef.current);
        }
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
        {/* The container we watch with Intersection Observer */}
        <div className="relative" ref={containerRef}>
            <svg className="progress-ring" width={150} height={150}>
            <circle
                className="progress-ring__bg"
                cx={75}
                cy={75}
                r={60}
                strokeWidth={10}
                fill="none"
            />
            <circle
                ref={circleRef}
                className="progress-ring__value"
                cx={75}
                cy={75}
                r={60}
                strokeWidth={10}
                fill={color}
                stroke={color}
            />
            </svg>
            <div
            className="absolute flex items-center justify-center"
            style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
            ref={textRef}
            >
            0%
            </div>
        </div>
        <p>{skill}</p>
        </div>
    );
    };

    export default ProgressBar;
