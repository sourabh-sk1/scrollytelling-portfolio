"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

interface ScrollyCanvasProps {
  frameCount: number;
}

export default function ScrollyCanvas({ frameCount }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const currentIndexRef = useRef(0);
  const drawImageRef = useRef<(index: number) => void>();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const drawImage = useCallback((index: number) => {
    if (!canvasRef.current || images.length === 0 || !images[index]) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // If the image hasn't finished downloading yet, do not clear the canvas
    if (!img.complete || img.naturalWidth === 0) return;

    // Handle object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let renderWidth = canvas.width;
    let renderHeight = canvas.height;
    let renderX = 0;
    let renderY = 0;

    if (canvasRatio > imgRatio) {
      // Canvas is wider than image, scale image to canvas width
      renderHeight = canvas.width / imgRatio;
      renderY = (canvas.height - renderHeight) / 2;
    } else {
      // Canvas is taller than image, scale image to canvas height
      renderWidth = canvas.height * imgRatio;
      renderX = (canvas.width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw with better quality
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, renderX, renderY, renderWidth, renderHeight);
  }, [images]);

  // Keep ref up to date
  useEffect(() => {
    drawImageRef.current = drawImage;
  }, [drawImage]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${frameNumber}_delay-0.041s.png`;
      
      img.onload = () => {
        // As soon as the first frame loads, dismiss the loading screen
        if (i === 0) {
          setImagesLoaded(true);
        }
        // If the user stopped scrolling on this frame, draw it immediately now that it's loaded
        if (currentIndexRef.current === i && drawImageRef.current) {
          drawImageRef.current(i);
        }
      };
      
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, [frameCount]);

  // Initial draw and handle resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      // Use devicePixelRatio for sharper canvas on high-DPI displays
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Scale down via CSS
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      
      // Redraw current frame
      const index = Math.floor(scrollYProgress.get() * (frameCount - 1));
      currentIndexRef.current = index;
      drawImage(index);
    };

    window.addEventListener("resize", resize);
    resize(); // call once to set up

    return () => window.removeEventListener("resize", resize);
  }, [imagesLoaded, frameCount, scrollYProgress, drawImage]);

  // Update frame on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (imagesLoaded) {
      // Calculate which frame to show
      const index = Math.floor(latest * (frameCount - 1));
      currentIndexRef.current = index;
      drawImage(index);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm tracking-widest uppercase z-0 font-light">
            Loading sequence...
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 pointer-events-none"
        />
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
