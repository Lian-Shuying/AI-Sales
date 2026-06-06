import { motion } from 'framer-motion'
import { Github, Mail, ExternalLink } from 'lucide-react'

export const CallToAction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            参与我们的创新之旅
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            了解更多关于企航云帆AI决策智能体的技术细节、应用场景和未来规划
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              <span>查看完整文档</span>
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span>查看代码</span>
            </motion.button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="mt-12 p-6 glass rounded-lg flex flex-col sm:flex-row items-center justify-center gap-8"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-400" size={24} />
              <div className="text-left">
                <p className="text-gray-400 text-sm">联系我们</p>
                <p className="text-white font-semibold">contact@qihang-yunfan.com</p>
              </div>
            </div>
            <div className="h-12 hidden sm:block border-r border-cyan-400/30" />
            <p className="text-gray-400">欢迎参加竞赛、技术交流、合作洽谈</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
}

export default CallToAction