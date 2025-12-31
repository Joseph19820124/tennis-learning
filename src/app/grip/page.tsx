import Link from 'next/link';

const grips = [
  {
    name: '大陆式握拍',
    english: 'Continental Grip',
    description: '手掌根部放在拍柄第二斜面上，像握锤子一样。主要用于发球、截击和削球，不太适合正手底线击球。',
    pros: ['适合发球和截击', '便于切换握拍', '适合削球和挑高球'],
    cons: ['正手击球力量不足', '难以产生上旋', '击球点较低'],
    usage: '发球、截击、削球',
    difficulty: '初级',
  },
  {
    name: '东方式正手握拍',
    english: 'Eastern Forehand Grip',
    description: '手掌根部放在拍柄第三斜面上，像握手一样自然。这是最传统的正手握拍方式，易于学习。',
    pros: ['容易上手', '击球稳定', '适合平击球', '便于变换握拍'],
    cons: ['上旋不如西方式强', '高球处理较难', '现代比赛中逐渐减少'],
    usage: '初学者入门、平击型正手',
    difficulty: '初级',
  },
  {
    name: '半西方式握拍',
    english: 'Semi-Western Grip',
    description: '手掌根部放在拍柄第四斜面上，是目前职业网坛最流行的正手握拍方式，兼顾力量和旋转。',
    pros: ['容易产生上旋', '击球力量大', '高低球都能处理', '攻守兼备'],
    cons: ['低球处理稍难', '需要更多练习', '对时机要求较高'],
    usage: '现代正手主流、进阶选手',
    difficulty: '中级',
  },
  {
    name: '西方式握拍',
    english: 'Western Grip',
    description: '手掌根部放在拍柄第五斜面上，能产生极强的上旋。常见于红土场地选手。',
    pros: ['极强的上旋', '高弹跳球处理好', '进攻性强', '适合红土'],
    cons: ['低球很难处理', '平击困难', '体力消耗大', '转换握拍慢'],
    usage: '红土专家、强上旋型选手',
    difficulty: '高级',
  },
];

export default function GripPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">握拍方式详解</h1>
          <p className="text-xl text-green-100">
            选择适合自己的握拍方式是正手技术的第一步
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">理解握拍</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4 leading-relaxed">
              握拍方式决定了你击球时拍面的角度，从而影响球的旋转、力量和控制。
              不同的握拍方式各有优缺点，选择哪种取决于你的打法风格和场地类型。
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-800">
                <strong>如何找到正确的握拍位置：</strong>网球拍柄有8个斜面，从顶部顺时针数，
                分别是1-8面。右手选手找握拍位置时，看手掌根部（虎口下方的肉垫）放在哪个斜面上。
              </p>
            </div>
          </div>
        </section>

        {/* Grip Diagram */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">拍柄斜面图解</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48">
                {/* Octagon representation */}
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Octagon */}
                  <polygon
                    points="100,10 161,39 190,100 161,161 100,190 39,161 10,100 39,39"
                    fill="#f0fdf4"
                    stroke="#16a34a"
                    strokeWidth="2"
                  />
                  {/* Numbers */}
                  <text x="100" y="30" textAnchor="middle" className="text-sm font-bold fill-gray-700">1</text>
                  <text x="155" y="55" textAnchor="middle" className="text-sm font-bold fill-gray-700">2</text>
                  <text x="175" y="105" textAnchor="middle" className="text-sm font-bold fill-gray-700">3</text>
                  <text x="155" y="155" textAnchor="middle" className="text-sm font-bold fill-gray-700">4</text>
                  <text x="100" y="180" textAnchor="middle" className="text-sm font-bold fill-gray-700">5</text>
                  <text x="45" y="155" textAnchor="middle" className="text-sm font-bold fill-gray-700">6</text>
                  <text x="25" y="105" textAnchor="middle" className="text-sm font-bold fill-gray-700">7</text>
                  <text x="45" y="55" textAnchor="middle" className="text-sm font-bold fill-gray-700">8</text>
                  {/* Center text */}
                  <text x="100" y="100" textAnchor="middle" className="text-xs fill-gray-500">拍柄横截面</text>
                  <text x="100" y="115" textAnchor="middle" className="text-xs fill-gray-500">(从底部看)</text>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="bg-gray-100 p-2 rounded text-center">
                <span className="font-bold">斜面2:</span> 大陆式
              </div>
              <div className="bg-green-100 p-2 rounded text-center">
                <span className="font-bold">斜面3:</span> 东方式
              </div>
              <div className="bg-green-200 p-2 rounded text-center">
                <span className="font-bold">斜面4:</span> 半西方式
              </div>
              <div className="bg-green-300 p-2 rounded text-center">
                <span className="font-bold">斜面5:</span> 西方式
              </div>
            </div>
          </div>
        </section>

        {/* Grip Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">各种握拍方式详解</h2>
          <div className="space-y-6">
            {grips.map((grip, index) => (
              <div key={grip.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-600 text-white px-6 py-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold">{grip.name}</h3>
                      <p className="text-green-200 text-sm">{grip.english}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      grip.difficulty === '初级' ? 'bg-green-500' :
                      grip.difficulty === '中级' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}>
                      {grip.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{grip.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-green-600 mb-2">优点</h4>
                      <ul className="space-y-1">
                        {grip.pros.map((pro) => (
                          <li key={pro} className="text-gray-600 text-sm flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-600 mb-2">缺点</h4>
                      <ul className="space-y-1">
                        {grip.cons.map((con) => (
                          <li key={con} className="text-gray-600 text-sm flex items-center">
                            <span className="text-red-500 mr-2">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <span className="font-medium text-gray-700">适用场景：</span>
                    <span className="text-gray-600">{grip.usage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">握拍选择建议</h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-gray-800">初学者</h3>
                  <p className="text-gray-600">
                    建议从<strong>东方式握拍</strong>开始学习。它最接近自然握手的姿势，
                    容易上手，便于建立正确的击球感觉。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-gray-800">进阶选手</h3>
                  <p className="text-gray-600">
                    掌握基础后，可以过渡到<strong>半西方式握拍</strong>。
                    这是目前最主流的握拍方式，能很好地平衡力量和旋转。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-gray-800">特定风格</h3>
                  <p className="text-gray-600">
                    如果你主要在红土场打球，或者想发展强烈的上旋球风格，
                    可以考虑<strong>西方式握拍</strong>，但需要更多练习。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">握拍常见错误</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 text-xl mr-3">⚠️</span>
                <div>
                  <h3 className="font-bold text-gray-800">握得太紧</h3>
                  <p className="text-gray-600">
                    过紧的握拍会导致手臂僵硬，影响挥拍速度和控制。在准备和引拍阶段保持放松，
                    只在击球瞬间收紧握拍。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-xl mr-3">⚠️</span>
                <div>
                  <h3 className="font-bold text-gray-800">握拍位置不稳定</h3>
                  <p className="text-gray-600">
                    每次击球时握拍位置不一致会导致击球不稳定。养成固定握拍习惯，
                    可以在拍柄上做标记帮助定位。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 text-xl mr-3">⚠️</span>
                <div>
                  <h3 className="font-bold text-gray-800">食指和其他手指分开太远</h3>
                  <p className="text-gray-600">
                    食指应该自然弯曲贴在拍柄上，不要像扣扳机一样分开太远，
                    这会降低握拍的稳定性。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">下一步：学习站位和步法</h2>
          <p className="text-gray-300 mb-6">
            选择好握拍方式后，让我们学习正确的站位和移动步法，
            这是打好正手的关键基础。
          </p>
          <Link
            href="/footwork"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
          >
            学习站位步法 →
          </Link>
        </section>
      </div>
    </div>
  );
}
