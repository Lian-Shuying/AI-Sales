import { motion } from 'framer-motion'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: '技术文档', href: '#' },
    { label: '项目代码', href: '#' },
    { label: '联系方式', href: '#' },
    { label: '关于团队', href: '#' }
  ]

  return (
    <footer className="border-t border-blue-500/30 bg-blue-950/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              企<span className="text-cyan-400">航</span>云帆
            </h3>
            <p className="text-gray-400 text-sm">
              AI决策智能体创新项目
            </p>
            <p className="text-gray-500 text-xs mt-2">
              面向企业全球拓展的创新竞赛项目
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">资源链接</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">项目信息</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-cyan-400">项目类型：</span>竞赛创新项目
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400">技术栈：</span>React + Three.js
              </p>
              <p className="text-gray-400">
                <span className="text-cyan-400">主题：</span>蓝色科技风格
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-blue-500/30 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} 企航云帆 AI Decision Intelligence Platform. 创新项目展示
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer