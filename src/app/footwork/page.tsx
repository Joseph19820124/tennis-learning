import Link from 'next/link';

export default function FootworkPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">站位与步法</h1>
          <p className="text-xl text-green-100">
            正确的站位和步法是打好正手的基础保障
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Ready Position */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
            准备姿势（Ready Position）
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-6 leading-relaxed">
              准备姿势是所有击球的起点。正确的准备姿势能让你快速反应并移动到最佳击球位置。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-3">标准准备姿势要点</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">●</span>
                    <span className="text-gray-600"><strong>双脚分开</strong>与肩同宽或略宽，膝盖微屈</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">●</span>
                    <span className="text-gray-600"><strong>重心略向前</strong>落在前脚掌，随时准备移动</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">●</span>
                    <span className="text-gray-600"><strong>双手持拍</strong>在身前，非持拍手托住拍颈</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">●</span>
                    <span className="text-gray-600"><strong>拍头朝上</strong>约与眼睛平齐</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">●</span>
                    <span className="text-gray-600"><strong>目视前方</strong>注意观察对手和来球</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">●</span>
                    <span className="text-gray-600"><strong>身体放松</strong>但保持警觉状态</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-green-800 mb-3">常见错误</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    站得太直，膝盖没有弯曲
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    重心后坐，脚跟着地
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    球拍垂在身侧，反应慢
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    身体过于紧张僵硬
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stances */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
            击球站位类型
          </h2>
          <div className="space-y-6">
            {/* Open Stance */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-3">
                <h3 className="text-xl font-bold">开放式站位（Open Stance）</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  双脚平行面向球网，不需要侧身转体。这是现代网球最常用的站位方式，
                  特别适合快速移动和击打高球。
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">优点</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 快速回位</li>
                      <li>• 适合宽角度球</li>
                      <li>• 便于急停急起</li>
                      <li>• 处理高球更轻松</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">缺点</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 力量传递稍弱</li>
                      <li>• 需要更强的核心力量</li>
                      <li>• 低球处理较难</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">适用场景</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 被动防守时</li>
                      <li>• 处理宽角度球</li>
                      <li>• 快速对攻回合</li>
                      <li>• 大多数现代正手</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Semi-Open Stance */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-500 text-white px-6 py-3">
                <h3 className="text-xl font-bold">半开放式站位（Semi-Open Stance）</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  介于开放式和封闭式之间，前脚略微指向侧面。这种站位结合了两者的优点，
                  是很多职业选手的首选。
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">优点</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 平衡力量和恢复</li>
                      <li>• 转体更自然</li>
                      <li>• 适应性强</li>
                      <li>• 便于发力</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">缺点</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 需要一定练习</li>
                      <li>• 移动时间稍长</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">适用场景</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 有充足准备时间</li>
                      <li>• 进攻性击球</li>
                      <li>• 中等高度球</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Closed Stance */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-400 text-white px-6 py-3">
                <h3 className="text-xl font-bold">封闭式站位（Closed Stance）</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  传统的侧身站位，前脚跨过身体指向侧面。这种站位能产生最大的力量，
                  但在现代快节奏比赛中使用较少。
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">优点</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 力量传递最充分</li>
                      <li>• 身体转动完整</li>
                      <li>• 平衡性好</li>
                      <li>• 适合初学者理解发力</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">缺点</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 回位较慢</li>
                      <li>• 不适合宽角度球</li>
                      <li>• 高球处理困难</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-bold text-gray-800 mb-2">适用场景</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 上步进攻</li>
                      <li>• 短球处理</li>
                      <li>• 低球反击</li>
                      <li>• 接发球后上网</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footwork Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
            步法模式
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">分腿垫步（Split Step）</h3>
                <p className="text-gray-600 mb-2">
                  对手击球瞬间进行的小跳动作，是所有移动的起点。双脚同时轻轻跳起，
                  落地时膝盖弯曲，重心降低，随时准备向任何方向移动。
                </p>
                <div className="bg-yellow-50 p-3 rounded text-sm">
                  <strong>关键点：</strong>在对手击球时起跳，落地时判断来球方向
                </div>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">侧滑步（Side Shuffle）</h3>
                <p className="text-gray-600 mb-2">
                  用于短距离横向移动。保持面向球网，双脚交替侧向滑动，
                  始终保持准备姿势。
                </p>
                <div className="bg-yellow-50 p-3 rounded text-sm">
                  <strong>关键点：</strong>保持重心低，脚不要交叉
                </div>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">交叉步（Crossover Step）</h3>
                <p className="text-gray-600 mb-2">
                  用于快速长距离移动。外侧脚跨过内侧脚，快速向击球点移动。
                  比侧滑步更快，但需要更多练习。
                </p>
                <div className="bg-yellow-50 p-3 rounded text-sm">
                  <strong>关键点：</strong>第一步要快且大，保持身体平衡
                </div>
              </div>

              <div className="border-b pb-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">调整步（Adjustment Steps）</h3>
                <p className="text-gray-600 mb-2">
                  到达击球区域后的小碎步调整，确保最佳击球位置。
                  这些微小的步伐调整对击球质量影响很大。
                </p>
                <div className="bg-yellow-50 p-3 rounded text-sm">
                  <strong>关键点：</strong>小而快的步伐，持续到击球前一刻
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">回位步（Recovery Steps）</h3>
                <p className="text-gray-600 mb-2">
                  击球后快速回到场地中心位置。通常使用侧滑步或交叉步，
                  边观察对手边移动。
                </p>
                <div className="bg-yellow-50 p-3 rounded text-sm">
                  <strong>关键点：</strong>击球后立即启动回位，不要欣赏自己的击球
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Movement Sequence */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
            完整移动流程
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center flex-1">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">1</div>
                <h3 className="font-bold text-gray-800">准备姿势</h3>
                <p className="text-sm text-gray-600">保持警觉等待</p>
              </div>
              <div className="text-green-600 text-2xl hidden md:block">→</div>
              <div className="text-center flex-1">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">2</div>
                <h3 className="font-bold text-gray-800">分腿垫步</h3>
                <p className="text-sm text-gray-600">对手击球时起跳</p>
              </div>
              <div className="text-green-600 text-2xl hidden md:block">→</div>
              <div className="text-center flex-1">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">3</div>
                <h3 className="font-bold text-gray-800">移动到位</h3>
                <p className="text-sm text-gray-600">侧滑或交叉步</p>
              </div>
              <div className="text-green-600 text-2xl hidden md:block">→</div>
              <div className="text-center flex-1">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">4</div>
                <h3 className="font-bold text-gray-800">调整站位</h3>
                <p className="text-sm text-gray-600">小碎步微调</p>
              </div>
              <div className="text-green-600 text-2xl hidden md:block">→</div>
              <div className="text-center flex-1">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">5</div>
                <h3 className="font-bold text-gray-800">击球回位</h3>
                <p className="text-sm text-gray-600">完成并恢复</p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">5</span>
            步法训练建议
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-3">场上练习</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    影子练习：不用球，只练习移动和挥拍
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    多球训练：教练喂球，专注步法
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    锥桶练习：绕锥桶做各种步法
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    绳梯训练：提高脚步灵活性
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3">场下练习</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    跳绳：提高脚踝力量和协调性
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    深蹲：增强腿部力量
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    侧向跳跃：模拟场上移动
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    敏捷梯练习：提高步频
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">下一步：学习挥拍动作</h2>
          <p className="text-gray-300 mb-6">
            掌握了站位和步法后，让我们深入学习正手挥拍的完整动作分解。
          </p>
          <Link
            href="/swing"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
          >
            学习挥拍动作 →
          </Link>
        </section>
      </div>
    </div>
  );
}
