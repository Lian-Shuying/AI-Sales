import { motion } from 'framer-motion'
import { Zap, Brain, Lightbulb, Cpu } from 'lucide-react'

const innovations = [
  {
    icon: Brain,
    number: '4.1',
    title: '创新一：Agent驱动',
    subtitle: '以Agent驱动的数据获取范式',
    description: '构建数据城堡，传统中的困境'
  },
  {
    icon: Lightbulb,
    number: '4.2',
    title: '创新二：可配置专家',
    subtitle: '对话式理度的人机作用模式',
    description: '能力的"原子化"与"可组合"'
  },
  {
    icon: Cpu,
    number: '4.3',
    title: '创新三：知识原子',
    subtitle: '因果可解释体系',
    description: '跨越知识原子与动态知识网络'
  },
  {
    icon: Zap,
    number: '4.4',
    title: '创新四：低成本部署',
    subtitle: '企业私有化领地支撑',
    description: '低成本基础与轻量化架构'
  }
]

export const InnovationOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)'
    }
  }

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            项目技术创新点
          </h2>
          <p className="text-gray-400 text-lg">五大核心创新驱动企业智能化转型</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon
            return (
              <motion.div
                key={index}
                className="p-6 rounded-xl glass border-cyan-400/30 hover:border-cyan-400/60 transition-all group"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={40} />
                  </motion.div>
                  <span className="text-2xl font-bold text-cyan-400/60 group-hover:text-cyan-400 transition-colors">
                    {innovation.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {innovation.title}
                </h3>
                <p className="text-sm text-cyan-300 mb-3 font-medium">
                  {innovation.subtitle}
                </p>
                <p className="text-gray-400 text-sm">
                  {innovation.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <div className="absolute top-20 left-5 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
    </section>
  )
}

export default InnovationOverview