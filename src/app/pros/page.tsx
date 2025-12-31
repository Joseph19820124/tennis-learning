import Link from 'next/link';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YouTubeEmbed';

const players = [
  {
    name: '罗杰·费德勒',
    english: 'Roger Federer',
    country: '瑞士',
    titles: '20个大满贯',
    grip: '东方式/半西方式',
    style: '优雅流畅型',
    image: '🇨🇭',
    youtubeId: 'QZtxvwHvNe4',
    characteristics: [
      '动作极其流畅优雅，被誉为"史上最美正手"',
      '使用偏东方式握拍，击球点较早',
      '平击为主，上旋适中，球速快',
      '引拍简洁，没有多余动作',
      '随挥自然放松，延伸充分',
    ],
    strengths: ['节奏控制', '角度变化', '时机把握', '技术全面'],
    learnFrom: '学习他流畅的转体和简洁的引拍动作，注意他击球时的放松感',
  },
  {
    name: '拉斐尔·纳达尔',
    english: 'Rafael Nadal',
    country: '西班牙',
    titles: '22个大满贯',
    grip: '半西方式/西方式',
    style: '强力上旋型',
    image: '🇪🇸',
    youtubeId: 'IbLqTVTZO3s',
    characteristics: [
      '标志性的超强上旋正手，有"纳达尔旋转"之称',
      '使用偏西方式握拍，击球点较高',
      '雨刷式随挥，产生极强上旋',
      '腿部驱动明显，整体发力充分',
      '击球非常有攻击性和穿透力',
    ],
    strengths: ['上旋强度', '防守转攻', '体能耐力', '红土统治力'],
    learnFrom: '学习他的腿部发力和雨刷式收拍，理解上旋的产生原理',
  },
  {
    name: '诺瓦克·德约科维奇',
    english: 'Novak Djokovic',
    country: '塞尔维亚',
    titles: '24个大满贯',
    grip: '半西方式',
    style: '稳定全面型',
    image: '🇷🇸',
    youtubeId: '32nyPw9YUEA',
    characteristics: [
      '正手稳定性极高，失误率低',
      '标准半西方式握拍，攻守兼备',
      '身体柔韧性好，击球范围大',
      '底线防守能力超强',
      '关键分正手可靠',
    ],
    strengths: ['稳定性', '防守能力', '身体柔韧', '关键分表现'],
    learnFrom: '学习他的准备姿势和步法，注意他如何保持击球的稳定性',
  },
  {
    name: '卡洛斯·阿尔卡拉斯',
    english: 'Carlos Alcaraz',
    country: '西班牙',
    titles: '4个大满贯（持续增加）',
    grip: '半西方式',
    style: '爆发进攻型',
    image: '🇪🇸',
    youtubeId: 'NsYdWHVfQKo',
    characteristics: [
      '年轻一代的正手代表，爆发力惊人',
      '能在高速移动中打出高质量正手',
      '正手变线能力出色',
      '经常打出不可思议的正手制胜分',
      '结合了力量和旋转的完美平衡',
    ],
    strengths: ['爆发力', '创造力', '攻击性', '年轻活力'],
    learnFrom: '学习他的进攻意识和果断性，观察他如何抓住机会加速进攻',
  },
  {
    name: '扬尼克·辛纳',
    english: 'Jannik Sinner',
    country: '意大利',
    titles: '2个大满贯（持续增加）',
    grip: '半西方式',
    style: '机械精准型',
    image: '🇮🇹',
    youtubeId: 'WPY0s9FQA4g',
    characteristics: [
      '动作标准教科书式，非常适合学习',
      '击球深度控制出色',
      '正手几乎没有多余动作',
      '发力顺序清晰，动力链完整',
      '在压力下保持技术不变形',
    ],
    strengths: ['技术标准', '深度控制', '心理稳定', '持续进步'],
    learnFrom: '非常适合初学者模仿的标准动作，学习他清晰的发力顺序',
  },
];

const videoTips = [
  {
    title: '观看慢动作回放',
    description: '在YouTube上搜索选手名字+forehand slow motion，观察每个技术细节',
  },
  {
    title: '对比不同选手',
    description: '比较不同选手的正手差异，理解没有唯一正确的动作，但有共同的原则',
  },
  {
    title: '关注关键时刻',
    description: '观察选手在关键分时的正手，学习他们如何在压力下保持技术',
  },
  {
    title: '注意步法配合',
    description: '不只看手上动作，更要观察脚步如何配合击球',
  },
];

export default function ProsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-16">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=1920&h=600&fit=crop"
            alt="Tennis background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-700/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">职业选手正手分析</h1>
          <p className="text-xl text-green-100">
            向顶尖高手学习，汲取他们正手技术的精华
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">为什么要学习职业选手？</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              职业选手的正手技术经过千锤百炼，代表了当今网球技术的最高水平。
              虽然我们不可能完全复制他们的动作，但可以从中学习基本原则和技术理念。
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-800">
                <strong>重要提示：</strong>每个职业选手的正手都有其独特之处，这与他们的
                身体条件、训练背景和打法风格有关。学习时要理解原理，而非机械模仿。
              </p>
            </div>
          </div>
        </section>

        {/* Players */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">顶尖选手正手特点</h2>
          <div className="space-y-6">
            {players.map((player) => (
              <div key={player.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-4xl mr-4">{player.image}</span>
                      <div>
                        <h3 className="text-xl font-bold">{player.name}</h3>
                        <p className="text-green-100 text-sm">{player.english} · {player.country}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {player.titles}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded">
                      <span className="text-gray-500">握拍方式</span>
                      <p className="font-medium text-gray-800">{player.grip}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <span className="text-gray-500">风格类型</span>
                      <p className="font-medium text-gray-800">{player.style}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <span className="text-gray-500">主要优势</span>
                      <p className="font-medium text-gray-800">{player.strengths.join('、')}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">技术特点</h4>
                    <ul className="space-y-1">
                      {player.characteristics.map((char) => (
                        <li key={char} className="text-gray-600 text-sm flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-bold text-green-800 mb-1">可以学习的点</h4>
                    <p className="text-gray-600 text-sm">{player.learnFrom}</p>
                  </div>

                  {/* YouTube Video */}
                  <div className="mt-6">
                    <h4 className="font-bold text-gray-800 mb-3">正手技术视频</h4>
                    <YouTubeEmbed
                      videoId={player.youtubeId}
                      title={`${player.name}正手技术分析`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Principles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">职业选手正手的共同点</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              尽管每位选手的正手各有特色，但他们都遵循一些共同的技术原则：
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800">早准备</h3>
                <p className="text-gray-600 text-sm">
                  所有顶尖选手都在球过网前就开始准备动作，给自己充足的时间
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800">用身体打球</h3>
                <p className="text-gray-600 text-sm">
                  力量来自于腿部和身体的转动，而非单纯的手臂
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800">击球点靠前</h3>
                <p className="text-gray-600 text-sm">
                  击球点都在身体前方，这样能打出最有力、最可控的球
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800">完整随挥</h3>
                <p className="text-gray-600 text-sm">
                  从不中途停止挥拍，让动作自然完成
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800">放松与爆发</h3>
                <p className="text-gray-600 text-sm">
                  准备时放松，击球瞬间爆发，张弛有度
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-gray-800">盯球到最后</h3>
                <p className="text-gray-600 text-sm">
                  眼睛跟踪球到击球瞬间，不过早看目标
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Watch */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">如何有效地学习职业选手</h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {videoTips.map((tip) => (
                <div key={tip.title} className="bg-white p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Style Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">不同风格对比</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">特征</th>
                  <th className="px-4 py-3 text-left">平击型（费德勒）</th>
                  <th className="px-4 py-3 text-left">上旋型（纳达尔）</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">握拍</td>
                  <td className="px-4 py-3 text-gray-600">东方式/半西方式</td>
                  <td className="px-4 py-3 text-gray-600">半西方式/西方式</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">击球点高度</td>
                  <td className="px-4 py-3 text-gray-600">腰到胸部</td>
                  <td className="px-4 py-3 text-gray-600">胸到肩部</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">随挥方式</td>
                  <td className="px-4 py-3 text-gray-600">绕过肩膀</td>
                  <td className="px-4 py-3 text-gray-600">雨刷式收拍</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">球的轨迹</td>
                  <td className="px-4 py-3 text-gray-600">低平快速</td>
                  <td className="px-4 py-3 text-gray-600">高弧度重旋转</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">适合场地</td>
                  <td className="px-4 py-3 text-gray-600">草地、硬地</td>
                  <td className="px-4 py-3 text-gray-600">红土、硬地</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">对体能要求</td>
                  <td className="px-4 py-3 text-gray-600">相对较低</td>
                  <td className="px-4 py-3 text-gray-600">较高</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">选手模仿建议</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-bold text-gray-800">初学者</h3>
                  <p className="text-gray-600">
                    推荐学习<strong>辛纳</strong>或<strong>德约科维奇</strong>的正手。
                    他们的动作标准规范，没有太多个人化的元素，容易模仿和学习。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-bold text-gray-800">追求优雅</h3>
                  <p className="text-gray-600">
                    如果你追求流畅优雅的正手，可以学习<strong>费德勒</strong>。
                    但要注意他的动作需要很好的时机感和手感，难度较高。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-bold text-gray-800">追求力量</h3>
                  <p className="text-gray-600">
                    如果你想打出强力上旋球，可以学习<strong>纳达尔</strong>或<strong>阿尔卡拉斯</strong>。
                    但要注意这种风格对体能要求较高。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">恭喜完成学习！</h2>
          <p className="text-gray-300 mb-6">
            你已经完成了网球正手的系统学习。记住，理论学习只是开始，
            真正的进步来自于持续的练习。现在就拿起球拍，开始练习吧！
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/basics"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
            >
              回顾基础知识
            </Link>
            <Link
              href="/practice"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-800 transition-colors"
            >
              查看练习方法
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
