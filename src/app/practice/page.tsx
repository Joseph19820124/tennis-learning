'use client';

import Image from 'next/image';
import Link from 'next/link';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function PracticePage() {
  return (
    <div className="min-h-screen">
      {/* Hero with Background Image */}
      <section className="relative text-white py-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551773188-d4f5b2e1dc4e?w=1920&h=600&fit=crop"
            alt="网球练习场"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-700/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">练习方法与进阶技巧</h1>
          <p className="text-xl text-green-100">
            科学的练习方法让你的正手进步更快
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Practice Levels */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">分阶段练习计划</h2>

          {/* Beginner */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="bg-green-500 text-white px-6 py-4">
              <h3 className="text-xl font-bold">初级阶段：建立基础（0-6个月）</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                这个阶段的目标是建立正确的动作框架，不追求力量和速度。
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">练习内容</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>* 握拍和准备姿势练习</li>
                    <li>* 空挥拍练习（每天100次）</li>
                    <li>* 近距离喂球练习</li>
                    <li>* 墙壁练习（站近距离）</li>
                    <li>* 基础步法练习</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">重点关注</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>* 正确的握拍位置</li>
                    <li>* 转体而非只用手臂</li>
                    <li>* 击球点在身前</li>
                    <li>* 完整的随挥</li>
                    <li>* 稳定而非力量</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Intermediate */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="bg-green-600 text-white px-6 py-4">
              <h3 className="text-xl font-bold">中级阶段：提高稳定性（6-18个月）</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                动作基本定型后，着重提高连续性和稳定性，开始加入旋转。
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">练习内容</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>* 连续对拉练习（目标50板）</li>
                    <li>* 墙壁练习（加大距离）</li>
                    <li>* 定点落点练习</li>
                    <li>* 上旋球练习</li>
                    <li>* 移动中击球练习</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">重点关注</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>* 击球的连续性</li>
                    <li>* 上旋的稳定产生</li>
                    <li>* 移动后的击球质量</li>
                    <li>* 不同高度球的处理</li>
                    <li>* 深度控制</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-700 text-white px-6 py-4">
              <h3 className="text-xl font-bold">高级阶段：变化与攻击（18个月以上）</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                在稳定的基础上，发展变化和攻击能力，提高比赛实战水平。
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">练习内容</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>* 角度变化练习</li>
                    <li>* inside-out正手练习</li>
                    <li>* 加速进攻练习</li>
                    <li>* 接发球正手练习</li>
                    <li>* 比赛模式练习</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-800 mb-2">重点关注</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>* 战术意识</li>
                    <li>* 节奏变化</li>
                    <li>* 关键分的处理</li>
                    <li>* 压力下的稳定</li>
                    <li>* 制胜分能力</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">具体练习方法</h2>

          <div className="space-y-6">
            {/* Wall Practice */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">&#x1F9F1;</span>
                墙壁练习
              </h3>
              <p className="text-gray-600 mb-4">
                墙壁是最好的练习伙伴，永远不会失误，还会把球打回来。适合各个水平的练习。
              </p>

              {/* Wall Practice Video */}
              <div className="mb-4">
                <YouTubeEmbed videoId="QZtxvwHvNe4" title="墙壁练习方法教学" />
              </div>

              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-bold text-gray-700 mb-2">练习要点</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>* <strong>初学者：</strong>站在离墙3-4米处，轻击保持连续</li>
                  <li>* <strong>进阶者：</strong>站在6-8米处，模拟实际击球距离</li>
                  <li>* <strong>高级者：</strong>加入移动、变换角度和力量</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <h4 className="font-bold text-green-700 mb-2">推荐练习</h4>
                <p className="text-gray-600 text-sm">
                  设定目标：连续击球50次不失误。达到后增加到100次。
                  这个练习能很好地培养节奏感和稳定性。
                </p>
              </div>
            </div>

            {/* Multi-ball */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">&#x1F3BE;</span>
                多球训练
              </h3>
              <p className="text-gray-600 mb-4">
                教练或同伴连续喂球，你专注于击球动作和落点。是提高技术的最有效方法之一。
              </p>

              {/* Multi-ball Training Video */}
              <div className="mb-4">
                <YouTubeEmbed videoId="YqgcykDGB2A" title="多球训练教学" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-700 mb-2">定点练习</h4>
                  <p className="text-gray-600 text-sm">
                    站在固定位置，专注于击球动作的正确性。
                    适合纠正动作和建立肌肉记忆。
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-gray-700 mb-2">移动练习</h4>
                  <p className="text-gray-600 text-sm">
                    喂球到不同位置，你需要移动到位后击球。
                    提高步法和移动中击球的能力。
                  </p>
                </div>
              </div>
            </div>

            {/* Rally Practice */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">&#x1F465;</span>
                对拉练习
              </h3>
              <p className="text-gray-600 mb-4">
                和伙伴进行对拉是最接近实战的练习。可以设定不同的主题来针对性提高。
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-bold text-gray-700">深度对拉</h4>
                    <p className="text-gray-600 text-sm">双方都打深球，目标是让球落在底线附近</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-bold text-gray-700">斜线对拉</h4>
                    <p className="text-gray-600 text-sm">只打斜线，提高角度控制能力</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-bold text-gray-700">直线对拉</h4>
                    <p className="text-gray-600 text-sm">只打直线，要求更高的精准度</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-2 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-bold text-gray-700">全场对拉</h4>
                    <p className="text-gray-600 text-sm">随意变化落点，更接近比赛</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shadow Swing */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">&#x1F3C3;</span>
                影子练习
              </h3>
              <p className="text-gray-600 mb-4">
                不用球，只做挥拍动作。可以在家里或任何空旷的地方进行。
                是固定动作和建立肌肉记忆的好方法。
              </p>
              <div className="bg-yellow-50 p-4 rounded">
                <h4 className="font-bold text-yellow-700 mb-2">每日建议</h4>
                <p className="text-gray-600 text-sm">
                  每天进行100-200次空挥拍练习，分成几组完成。
                  注意每一次都要做标准动作，不要为了数量而降低质量。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Videos Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">正手练习教学视频</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">正手练习方法详解</h3>
            <p className="text-gray-600 mb-4">
              系统学习正手练习的各种方法，从基础动作到进阶技巧，帮助你更快提升水平。
            </p>
            <YouTubeEmbed videoId="8V_KWh1Uoeo" title="正手练习方法详解" />
          </div>
        </section>

        {/* Advanced Techniques */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">进阶技巧</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">Inside-Out正手</h3>
              <p className="text-gray-600 text-sm mb-3">
                绕到反手位用正手击球，是很多球员的杀手锏。需要良好的步法和提前判断。
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>练习方法：</strong>让伙伴喂球到反手位，你用交叉步移动后用正手斜线攻击
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">正手变线</h3>
              <p className="text-gray-600 text-sm mb-3">
                在对拉中突然改变球的方向，打对手一个措手不及。需要良好的控制能力。
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>练习方法：</strong>斜线对拉中，每5球尝试一次直线变向
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">正手上旋高球</h3>
              <p className="text-gray-600 text-sm mb-3">
                被动防守时使用，打出高弧度强上旋球，给自己争取时间回位。
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>练习方法：</strong>从底线后1-2米处练习打高弧度上旋球过网
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">正手加速</h3>
              <p className="text-gray-600 text-sm mb-3">
                在对拉中突然加大力量和速度，打出制胜分。需要良好的时机判断。
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>练习方法：</strong>对拉中遇到浅球时练习加速进攻
              </div>
            </div>
          </div>
        </section>

        {/* Training Schedule */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">建议训练安排</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">每周频率</th>
                  <th className="px-4 py-3 text-left">练习内容</th>
                  <th className="px-4 py-3 text-left">时长建议</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">每天</td>
                  <td className="px-4 py-3 text-gray-600">空挥拍/影子练习</td>
                  <td className="px-4 py-3 text-gray-600">15-20分钟</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">2-3次/周</td>
                  <td className="px-4 py-3 text-gray-600">墙壁练习</td>
                  <td className="px-4 py-3 text-gray-600">30-45分钟</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">1-2次/周</td>
                  <td className="px-4 py-3 text-gray-600">多球训练</td>
                  <td className="px-4 py-3 text-gray-600">1小时</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">2-3次/周</td>
                  <td className="px-4 py-3 text-gray-600">对拉/实战练习</td>
                  <td className="px-4 py-3 text-gray-600">1-2小时</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            * 以上为参考建议，请根据个人时间和身体状况调整
          </p>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">下一步：学习职业选手</h2>
          <p className="text-gray-300 mb-6">
            看看费德勒、纳达尔等顶尖选手是如何打正手的，从他们身上学习。
          </p>
          <Link
            href="/pros"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
          >
            分析职业选手 &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
