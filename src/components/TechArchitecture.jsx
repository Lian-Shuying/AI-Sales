import { motion } from 'framer-motion'
import { Database, Zap, Network, Shield, RefreshCw } from 'lucide-react'

const techComponents = [
  {
    icon: Database,
    name: '数据聚合层',
    description: 'Agent驱动的多源数据采集与融合'
  },
  {
    icon: Zap,
    name: '能力编排层',
    description: '可配置的专家角色与动态能力调度'
  },
  {
    icon: Network,
    name: '知识推理层',
    description: '知识原子与因果推理网络'
  },
  {
    icon: Shield,
    name: '隐私保护层',
    description: '企业私有化与数据安全保障'
  },
  {
    icon: RefreshCw,
    name: '反馈演进层',
    description: 'Agent自主学习与能力迭代'
  }
]

export const TechArchitecture = () => {
  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            技术架构体系
          </h2>
          <p className="text-gray-400 text-lg">五层协同的智能体技术栈</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {techComponents.map((component, index) => {
            const Icon = component.icon
            return (
              <motion.div
                key={index}
                className="glass rounded-lg p-6 flex flex-col items-center text-center group hover:border-cyan-400/60 transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={48} />
                </motion.div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                  {component.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {component.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Architecture flow visualization */}
        <motion.div
          className="mt-16 p-8 glass rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {['用户输入', 'Agent分发', '能力执行', '知识推理', 'Agent优化'].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <motion.div
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-400/50 text-white font-semibold min-w-[120px] text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {step}
                </motion.div>
                {idx < 4 && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-cyan-400 font-bold"
                  >
                    →
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
    </section>
  )
}

export default TechArchitecture