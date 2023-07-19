import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export const Home = () => {
  const cubeRef = useRef();
  const rotationAmount = Math.PI / 2;
  const rotationDuration = 20;

  useEffect(() => {
    const rotateClockwise = () => {
      gsap.to(cubeRef.current.rotation, {
        y: rotationAmount,
        duration: rotationDuration,
        onComplete: rotateCounterClockwise,
      });
    };

   

    
  useFrame(() => {
    // Additional animation logic if needed
  });

  return (
    <mesh ref={cubeRef} position={[0, -6, 1]}>
      <MoonHalf scale={0.8} rotation={[0, 0, 5]} />
    </mesh>
  );
};
