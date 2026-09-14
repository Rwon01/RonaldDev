import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

export default function BackgroundEffect() {
    const canvasRef = useRef(null);
    const characters = ["*"]
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio || 1;

        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.scale(dpr, dpr);

        ctx.font = "12px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        const noise2D = createNoise2D();
        
        for (let x = 0; x < width; x += 8) {
            for (let y = 0; y < height; y += 8) {
                const v = noise2D(x * 0.01, y * 0.01);
                ctx.fillStyle = `oklch(0.76 0.03 258 / ${v-0.85})`;
                let character = characters[Math.floor(Math.random() * characters.length)]
                ctx.fillText(character, x, y);
            }
        }
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-screen h-screen pointer-events-none" />
}