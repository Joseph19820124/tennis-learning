import Link from 'next/link';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default function BasicsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1920&h=600&fit=crop"
            alt="Tennis basics"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">正手基础知识</h1>
          <p className="text-xl text-green-100">
            了解正手击球的基本概念，为后续学习打下坚实基础
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro Video */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">入门视频教程</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <YouTubeEmbed videoId="8V_KWh1Uoeo" title="正手入门教学" />
              <p className="mt-2 text-gray-600 text-center text-sm">正手击球5步完整教学</p>
            </div>
            <div>
              <YouTubeEmbed videoId="YqgcykDGB2A" title="初学者正手" />
              <p className="mt-2 text-gray-600 text-center text-sm">初学者正手技术要点</p>
            </div>
          </div>
        </section>

        {/* What is Forehand */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
            什么是正手击球？
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="md:flex gap-6">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop"
                    alt="Tennis forehand"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  正手击球（Forehand）是网球中最基本也是最常用的击球方式。对于右手选手来说，
                  正手是指球从身体右侧过来时，用握拍手（右手）的正面击球的动作。
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  正手击球的特点是力量大、稳定性高、可控性强。在现代网球中，正手往往是球员的
                  主要进攻武器，许多顶尖球员都以其强大的正手著称。
                </p>
              </div>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
              <p className="text-green-800 font-medium">
                关键点：正手是大多数人的优势手，因为使用的是惯用手，更容易发力和控制。
              </p>
            </div>
          </div>
        </section>

        {/* Importance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
            正手为什么重要？
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=200&fit=crop"
                  alt="Tennis match"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">使用频率高</h3>
              <p className="text-gray-600">
                统计显示，职业比赛中正手击球占所有底线击球的60-70%。这意味着正手的稳定性
                直接决定了比赛的质量。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&h=200&fit=crop"
                  alt="Tennis power"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">主要得分手段</h3>
              <p className="text-gray-600">
                正手是制造winner（制胜分）的主要武器。强力的正手可以在关键时刻一击制胜，
                给对手造成巨大压力。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-800">建立节奏</h3>
              <p className="text-gray-600">
                稳定的正手帮助你控制比赛节奏。通过正手的深度和角度变化，可以调动对手，
                创造进攻机会。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2 text-gray-800">心理优势</h3>
              <p className="text-gray-600">
                拥有可靠的正手会增强自信心。当你知道自己的正手不会轻易失误时，
                整个比赛的心态都会更加放松。
              </p>
            </div>
          </div>
        </section>

        {/* Pro Demo Video */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">职业选手正手示范</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <YouTubeEmbed videoId="NsYdWHVfQKo" title="职业选手正手对比" />
            <p className="mt-4 text-gray-600 text-center">阿尔卡拉斯正手技术慢动作分析</p>
          </div>
        </section>

        {/* Basic Elements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
            正手的基本要素
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">握拍（Grip）</h3>
                  <p className="text-gray-600 mt-1">
                    握拍方式决定了击球点的位置和球的旋转。主要有东方式、半西方式和西方式三种，
                    每种都有其特点和适用场景。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">站位（Stance）</h3>
                  <p className="text-gray-600 mt-1">
                    正确的站位包括开放式、半开放式和封闭式。不同的站位适合不同的击球情况，
                    现代网球更多使用开放式站位。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">引拍（Backswing）</h3>
                  <p className="text-gray-600 mt-1">
                    引拍是准备击球的动作，包括转肩、转髋和拍头后摆。好的引拍能储存足够的能量，
                    为击球做好准备。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">击球点（Contact Point）</h3>
                  <p className="text-gray-600 mt-1">
                    理想的击球点在身体前方、腰部高度。击球点的位置直接影响击球的力量和控制。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">随挥（Follow Through）</h3>
                  <p className="text-gray-600 mt-1">
                    随挥是击球后的延续动作，通常结束于左肩上方。完整的随挥能确保力量的充分传递
                    和身体的平衡。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern vs Classic */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
            现代正手 vs 传统正手
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <YouTubeEmbed videoId="QZtxvwHvNe4" title="经典正手训练" />
              <p className="mt-2 text-gray-600 text-center text-sm">正手技术训练教学</p>
            </div>
            <div>
              <YouTubeEmbed videoId="IbLqTVTZO3s" title="现代正手技术" />
              <p className="mt-2 text-gray-600 text-center text-sm">现代正手技术慢动作分析</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">特征</th>
                  <th className="px-4 py-3 text-left">现代正手</th>
                  <th className="px-4 py-3 text-left">传统正手</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">握拍</td>
                  <td className="px-4 py-3 text-gray-600">半西方式/西方式</td>
                  <td className="px-4 py-3 text-gray-600">东方式</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">站位</td>
                  <td className="px-4 py-3 text-gray-600">开放式为主</td>
                  <td className="px-4 py-3 text-gray-600">封闭式为主</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">引拍</td>
                  <td className="px-4 py-3 text-gray-600">环形引拍</td>
                  <td className="px-4 py-3 text-gray-600">直线后拉</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">旋转</td>
                  <td className="px-4 py-3 text-gray-600">强烈上旋</td>
                  <td className="px-4 py-3 text-gray-600">平击/轻微上旋</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">击球点</td>
                  <td className="px-4 py-3 text-gray-600">更靠前、更高</td>
                  <td className="px-4 py-3 text-gray-600">身体侧面、腰部高度</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            * 现代正手更适合当今快节奏的比赛风格，但初学者可以从传统正手开始，
            逐步过渡到现代正手。
          </p>
        </section>

        {/* Tips for Beginners */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">5</span>
            初学者建议
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">
                  <strong>从简单开始：</strong>先用东方式握拍学习基本动作，熟练后再尝试其他握拍方式
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">
                  <strong>注重基础：</strong>不要急于追求力量，先确保动作的正确性和稳定性
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">
                  <strong>多球练习：</strong>通过大量的多球训练来固定动作，形成肌肉记忆
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">
                  <strong>观看示范：</strong>多观看职业选手的正手慢动作视频，模仿他们的动作
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-gray-700">
                  <strong>寻求反馈：</strong>如果可能，找教练或经验丰富的球友帮你纠正动作
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">下一步：学习握拍方式</h2>
          <p className="text-gray-300 mb-6">
            了解了正手的基础知识后，让我们深入学习不同的握拍方式，
            这是掌握正手技术的第一步。
          </p>
          <Link
            href="/grip"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
          >
            学习握拍方式 →
          </Link>
        </section>
      </div>
    </div>
  );
}
