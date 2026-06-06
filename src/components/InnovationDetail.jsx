import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle } from 'lucide-react'

const innovationDetails = [
  {
    id: 1,
    number: '4.1',
    title: '创新一：Agent驱动的数据获取范式',
    points: [
      { title: '传统困境', content: '数据孤岛、格式不一致、实时更新困难' },
      { title: '本项目突破', content: 'Agent自主采集、多源数据聚合、动态更新机制' }
    ]
  },
  {
    id: 2,
    number: '4.2',
    title: '创新二：可配置专家角色与对话式理度',
    points: [
      { title: '能力原子化', content: '将复杂能力分解为可组合的原子能力' },
      { title: '调度与对话', content: '通过对话实现能力的灵活调度与自主化' }
    ]
  },
  {
    id: 3,
    number: '4.3',
    title: '创新三：知识原子与因果可解释体系',
    points: [
      { title: '知识图谱', content: '构建动态知识图网络，支持多能体协同' },
      { title: '因果推理', content: '提升原子化与多能体协同能力的透明度' }
    ]
  },
  {
    id: 4,
    number: '4.4',
    title: '创新四：低成本部署与企业私有化',
    points: [
      { title: '轻量化架构', content: '支持小型企业快速集成部署' },
      { title: '数据安全', content: '企业私有化领地支撑，保护数据安全' }
    ]
  },
  {
    id: 5,
    number: '4.5',
    title: '创新五：业务反馈闭环与Agent自我迭代',
    points: [
      { title: '反馈机制', content: '从业务场景收集反馈，驱动Agent优化' },
      { title: '自主进化', content: '支持多业务优先级吸收，实现能力跨界协同' }
    ]
  }
]

export const InnovationDetail = () => {
  const [expanded, setExpanded] = useState(null)

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            创新点详解
          </h2>
          <p className="text-gray-400 text-lg">深入了解每项创新的核心突破</p>
        </motion.div>

        <div className="space-y-4">
          {innovationDetails.map((detail, index) => (
            <motion.div
              key={detail.id}
              className="glass rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setExpanded(expanded === detail.id ? null : detail.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-cyan-500/10 transition-colors"
              >
                <div className="text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{detail.number}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {detail.title}
                    </h3>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === detail.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-cyan-400" size={24} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {expanded === detail.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-cyan-400/30"
                  >
                    <div className="p-6 space-y-4">
                      {detail.points.map((point, idx) => (
                        <motion.div
                          key={idx}
                          className="flex gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                          <div>
                            <h4 className="text-cyan-300 font-semibold mb-1">{point.title}</h4>
                            <p className="text-gray-400">{point.content}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}

export default InnovationDetail