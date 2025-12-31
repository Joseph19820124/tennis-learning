import Link from 'next/link';

export default function SwingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">挥拍动作分解</h1>
          <p className="text-xl text-green-100">
            详细拆解正手挥拍的每个阶段，掌握标准动作
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">挥拍动作概述</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              正手挥拍可以分为四个主要阶段：准备、引拍、击球和随挥。每个阶段都有其关键要点，
              只有将这些阶段流畅地连接起来，才能打出高质量的正手击球。
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">1. 准备阶段</span>
              <span className="text-gray-400">→</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">2. 引拍阶段</span>
              <span className="text-gray-400">→</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">3. 击球阶段</span>
              <span className="text-gray-400">→</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">4. 随挥阶段</span>
            </div>
          </div>
        </section>

        {/* Phase 1: Preparation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg mr-3">1</span>
            准备阶段（Preparation）
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">动作要点</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-600">保持标准准备姿势，双脚与肩同宽</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-600">双手持拍，非持拍手托住拍颈</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-600">判断来球后进行分腿垫步</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-0.5">4</span>
                    <span className="text-gray-600">确认是正手球后开始转体</span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-bold text-yellow-800 mb-2">关键提示</h3>
                <p className="text-gray-600 text-sm">
                  准备阶段的关键是<strong>早判断、早准备</strong>。在球过网时就应该判断出
                  是正手还是反手，并开始相应的准备动作。判断越早，准备时间越充分。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2: Backswing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg mr-3">2</span>
            引拍阶段（Backswing）
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-6">
              引拍是储存击球能量的关键阶段。现代网球多采用环形引拍（loop backswing），
              比传统的直线后拉更流畅，能产生更大的拍头速度。
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">转肩转髋</h3>
                <p className="text-gray-600">
                  以转肩为主导开始引拍动作。肩膀转动约90度，让背部几乎对着球网。
                  髋部跟随肩膀转动，但幅度较小（约45度）。这种肩髋分离储存了扭转能量。
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">手臂与球拍轨迹</h3>
                <p className="text-gray-600">
                  非持拍手保持指向来球方向，帮助瞄准和保持平衡。持拍手随转体自然向后，
                  拍头通过环形轨迹（先上后下）达到后摆最低点。手腕保持放松但稳定。
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">重心转移</h3>
                <p className="text-gray-600">
                  重心随转体移到后脚（右脚）。膝盖保持弯曲，重心不要起伏太大。
                  这为之后的蹬地发力做好准备。
                </p>
              </div>
            </div>

            <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-bold text-red-800 mb-2">常见错误</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• 引拍过大或过晚</li>
                <li>• 只用手臂引拍，没有转体</li>
                <li>• 拍头下垂太多</li>
                <li>• 手腕过于僵硬或过于松散</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Phase 3: Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg mr-3">3</span>
            击球阶段（Contact）
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-6">
              击球阶段是整个挥拍动作的核心。这个阶段虽然只有几十毫秒，
              但决定了球的方向、速度和旋转。
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-800 mb-3">发力顺序（动力链）</h3>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">1</span>
                    蹬地 - 力量从地面开始
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                    转髋 - 髋部带动身体旋转
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">3</span>
                    转肩 - 肩膀跟随髋部转动
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">4</span>
                    挥臂 - 手臂随身体甩出
                  </li>
                  <li className="flex items-center">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2">5</span>
                    击球 - 拍面触球的瞬间
                  </li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-3">理想击球点</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>前后位置：</strong>身体前方约一臂距离</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>左右位置：</strong>略靠右侧（东方式较近身，西方式较远）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>高度：</strong>腰部到胸部之间（取决于握拍方式）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>拍面角度：</strong>垂直或略微关闭（产生上旋）</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">击球瞬间要点</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700">眼睛</h4>
                  <p className="text-gray-600">盯住击球点，不要过早看目标</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">握拍</h4>
                  <p className="text-gray-600">击球瞬间握紧，之前保持放松</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">手腕</h4>
                  <p className="text-gray-600">稳定但不僵硬，自然释放</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 4: Follow Through */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg mr-3">4</span>
            随挥阶段（Follow Through）
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-6">
              随挥是击球后的延续动作。虽然球已经离开球拍，但完整的随挥对于
              力量传递、身体平衡和防止受伤都非常重要。
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-gray-800">拍头轨迹</h3>
                  <p className="text-gray-600">
                    拍头继续向前上方挥动，最终绕过左肩结束。现代正手的随挥通常
                    结束在左肩上方或左侧，这有助于产生上旋。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-gray-800">身体旋转</h3>
                  <p className="text-gray-600">
                    身体继续旋转，击球结束时胸部面向球网或略偏向击球方向。
                    不要刻意停止旋转，让动作自然完成。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-gray-800">重心与平衡</h3>
                  <p className="text-gray-600">
                    重心完全转移到前脚，后脚可能会自然抬起。保持身体平衡，
                    随时准备进行回位移动。
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
                <div>
                  <h3 className="font-bold text-gray-800">回位准备</h3>
                  <p className="text-gray-600">
                    随挥结束后立即开始回位。将球拍收回到准备姿势，
                    观察对手的回球，准备下一次击球。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">不同随挥类型</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-gray-700">传统随挥</h4>
                  <p className="text-gray-600">拍头绕过头顶，结束在左肩后方</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">雨刷式随挥</h4>
                  <p className="text-gray-600">拍头快速向左横扫，结束在左侧腰部附近，产生更多上旋</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Swing Checklist */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">完整挥拍检查清单</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-green-600 mb-3">正确动作</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    早转体，用身体引导引拍
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    引拍时拍头自然下垂
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    从下往上刷球产生上旋
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    击球点在身体前方
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    完整的随挥动作
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    击球后快速回位
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-600 mb-3">避免错误</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    只用手臂打球，不转体
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    引拍过晚或过大
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    击球点太靠后
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    随挥中途停止
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    击球时看目标而非球
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-red-500 mr-2">✗</span>
                    击球后欣赏球路忘记回位
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">下一步：了解常见错误</h2>
          <p className="text-gray-300 mb-6">
            学习了正确的挥拍动作后，让我们看看初学者最常犯的错误以及如何纠正。
          </p>
          <Link
            href="/mistakes"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
          >
            了解常见错误 →
          </Link>
        </section>
      </div>
    </div>
  );
}
