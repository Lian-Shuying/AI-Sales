import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'

export const HeroSection = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Three.js setup for tech background
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    camera.position.z = 5

    // Create animated particles representing AI network
    const geometry = new THREE.BufferGeometry()
    const particleCount = 1000
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 20
      positions[i + 2] = (Math.random() - 0.5) * 20
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0x00d4ff,
      size: 0.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      particles.rotation.x += 0.0001
      particles.rotation.y += 0.0002
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      renderer.dispose()
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      <motion.div
        className="relative z-10 text-center px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            企航云帆
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            面向企业全球拓展的
          </p>
          <p className="text-2xl md:text-3xl text-cyan-400 font-bold mb-8">
            AI 决策智能体创新平台
          </p>
          <p className="text-gray-400 text-lg">竞赛创新项目展示</p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            浏览创新点
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all"
          >
            查看演示
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-float"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ animationDelay: '1s' }}
        />
      </motion.div>
    </div>
  )
}

export default HeroSection