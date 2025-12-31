import Link from 'next/link';

const features = [
  {
    icon: '✋',
    title: '握拍方式',
    description: '详解东方式、半西方式、西方式握拍的特点和适用场景',
    href: '/grip',
  },
  {
    icon: '👣',
    title: '站位步法',
    description: '掌握正确的准备姿势和移动步法，为击球做好准备',
    href: '/footwork',
  },
  {
    icon: '🎯',
    title: '挥拍动作',
    description: '分解学习引拍、击球、随挥三个阶段的标准动作',
    href: '/swing',
  },
  {
    icon: '⚠️',
    title: '常见错误',
    description: '识别并纠正初学者最容易犯的正手错误',
    href: '/mistakes',
  },
  {
    icon: '📈',
    title: '练习方法',
    description: '科学的练习方案，从墙壁练习到实战对打',
    href: '/practice',
  },
  {
    icon: '🏆',
    title: '职业选手',
    description: '分析费德勒、纳达尔等顶尖选手的正手技术特点',
    href: '/pros',
  },
];

const steps = [
  { number: '01', title: '了解基础', description: '学习正手的基本概念和重要性' },
  { number: '02', title: '掌握握拍', description: '选择适合自己的握拍方式' },
  { number: '03', title: '练习站位', description: '建立正确的准备姿势' },
  { number: '04', title: '分解挥拍', description: '逐步掌握完整挥拍动作' },
  { number: '05', title: '持续练习', description: '通过反复练习形成肌肉记忆' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            网球正手技术
            <span className="block text-green-200">完全教学指南</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            专为右手选手打造的系统化正手教学，从零基础到进阶高手
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/basics"
              className="bg-white text-green-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-green-50 transition-colors"
            >
              开始学习
            </Link>
            <Link
              href="/pros"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-colors"
            >
              观看职业示范
            </Link>
          </div>
        </div>
      </section>

      {/* Why Forehand Matters */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              为什么正手如此重要？
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              正手是网球中最基础也是最重要的击球技术，掌握好正手是成为优秀球员的关键
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">使用频率最高</h3>
              <p className="text-gray-600">
                在一场比赛中，正手击球占所有击球的60%以上，是最常用的技术
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-2">进攻主要武器</h3>
              <p className="text-gray-600">
                正手是大多数球员的主要进攻武器，用于制造得分机会
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">建立信心基础</h3>
              <p className="text-gray-600">
                稳定的正手能给予球员信心，是其他技术的基础
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              系统化学习内容
            </h2>
            <p className="text-gray-600">
              从握拍到挥拍，从基础到进阶，全方位覆盖正手技术
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-500 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="mt-4 text-green-600 font-medium flex items-center">
                  了解更多
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              学习路径
            </h2>
            <p className="text-gray-600">
              按照这个步骤循序渐进，快速掌握正手技术
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex-1 text-center relative">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                  {step.number}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-green-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好提升你的正手了吗？</h2>
          <p className="text-gray-300 mb-8">
            从今天开始，跟随我们的教程系统学习，你将在短时间内看到明显的进步
          </p>
          <Link
            href="/basics"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-500 transition-colors"
          >
            立即开始学习
          </Link>
        </div>
      </section>
    </div>
  );
}
