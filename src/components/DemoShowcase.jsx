import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { PlayCircle, Pause } from 'lucide-react'

const demoScenes = [
  {
    title: '场景一：企业全球拓展决策',
    description: '智能体协作分析全球市场机会、竞争对手、风险评估，辅助高管决策'
  },
  {
    title: '场景二：供应链优化管理',
    description: '多Agent协同管理库存、物流、供应商关系，实现端到端优化'
  },
  {
    title: '场景三：客户智能服务',
    description: '智能体理解客户意图，跨界协同完成复杂业务流程'
  }
]

export const DemoShowcase = () => {
  const [activeScene, setActiveScene] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            应用场景演示
          </h2>
          <p className="text-gray-400 text-lg">智能体在真实业务中的创新应用</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {demoScenes.map((scene, idx) => (
            <motion.div
              key={idx}
              onClick={() => setActiveScene(idx)}
              className={`p-6 rounded-lg cursor-pointer transition-all ${
                activeScene === idx
                  ? 'glass border-cyan-400/60 bg-cyan-500/10'
                  : 'glass border-cyan-400/20 hover:border-cyan-400/40'
              }`}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={`font-semibold mb-2 transition-colors ${
                activeScene === idx ? 'text-cyan-300' : 'text-white'
              }`}>
                {scene.title}
              </h3>
              <p className="text-gray-400 text-sm">{scene.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Demo visualization */}
        <motion.div
          className="glass rounded-lg p-8 md:p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* Animated demo background */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
              transition={{ duration: 20, repeat: Infinity }}
              style={{
                backgroundImage: 'linear-gradient(45deg, #0ea5e9, #00d4ff)',
                backgroundSize: '400% 400%'
              }}
            />

            <div className="relative z-10 text-center">
              {isPlaying ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex flex-col items-center gap-4"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 rounded-full border-4 border-cyan-400 border-t-transparent"
                  />
                  <p className="text-cyan-300 font-semibold">演示场景加载中...</p>
                </motion.div>
              ) : (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-all"
                >
                  <PlayCircle size={24} />
                  开始演示
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-cyan-400/20">
            <p className="text-gray-300 text-sm">
              <span className="text-cyan-400 font-semibold">演示说明：</span>
              {demoScenes[activeScene].description}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
    </section>
  )
}

export default DemoShowcase