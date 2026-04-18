import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, OrbitControls, Environment } from '@react-three/drei'

const AnimatedSphere = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Sphere visible args={[1, 100, 200]} scale={2.2} ref={meshRef}>
      <MeshDistortMaterial 
        color="#8b5cf6" 
        emissive="#4c1d95"
        attach="material" 
        distort={0.4} 
        speed={1.5} 
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

const Canvas3D = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full opacity-50 mix-blend-screen pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#e879f9" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#38bdf8" />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5}/>
      </Canvas>
    </div>
  )
}

export default Canvas3D
