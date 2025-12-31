import Link from 'next/link';

const mistakes = [
  {
    id: 1,
    title: '只用手臂打球',
    description: '最常见的错误之一。很多初学者只用手臂发力，没有利用身体的转动。',
    symptoms: ['击球无力', '容易疲劳', '控制不稳定', '容易受伤'],
    causes: ['没有学会转体', '急于击球', '站位不正确'],
    corrections: [
      '练习空挥拍时注重转肩转髋',
      '想象用肚脐对准来球',
      '慢动作练习感受身体带动手臂的感觉',
      '让朋友从后面观察你是否在转体',
    ],
  },
  {
    id: 2,
    title: '击球点太靠后',
    description: '在球已经过了最佳击球位置时才击球，导致力量不足和控制困难。',
    symptoms: ['球经常下网', '无法发力', '被球顶住', '回球角度受限'],
    causes: ['引拍太晚', '移动不到位', '判断来球慢', '等球而不是迎球'],
    corrections: [
      '提前开始引拍，球过网时就开始准备',
      '主动向前迎球，不要等球来找你',
      '练习在身体前方击球的感觉',
      '可以让人喂球，专注练习击球点',
    ],
  },
  {
    id: 3,
    title: '引拍过大或过晚',
    description: '引拍动作太大导致时间不够，或者太晚开始引拍。',
    symptoms: ['经常来不及击球', '动作匆忙', '击球不稳定', '快球处理困难'],
    causes: ['对时机判断不准', '想要大力击球', '没有养成早准备的习惯'],
    corrections: [
      '简化引拍动作，不要过度后拉',
      '球过网时就开始转体引拍',
      '练习紧凑的现代式引拍',
      '多打快节奏的对拉，强迫自己加快准备',
    ],
  },
  {
    id: 4,
    title: '握拍太紧',
    description: '从始至终紧握球拍，导致手臂僵硬，影响挥拍速度和控制。',
    symptoms: ['手臂容易酸痛', '挥拍不流畅', '拍头速度慢', '手腕僵硬'],
    causes: ['紧张', '害怕球拍飞出', '没有正确的握拍习惯'],
    corrections: [
      '在准备和引拍时保持放松握拍',
      '只在击球瞬间握紧',
      '想象握着一只小鸟，不能捏死也不能让它飞走',
      '做放松练习，体会紧与松的区别',
    ],
  },
  {
    id: 5,
    title: '不看球',
    description: '击球时眼睛过早看向目标，而不是盯住球。',
    symptoms: ['击球不实', '经常打到拍框', '失误率高', '击球点不稳定'],
    causes: ['急于看球的落点', '对击球没有信心', '注意力不集中'],
    corrections: [
      '强迫自己看到球离开拍面',
      '练习时大声说出击球的声音',
      '让教练或朋友提醒你看球',
      '拍摄自己打球的视频检查',
    ],
  },
  {
    id: 6,
    title: '随挥不完整',
    description: '击球后动作中途停止，没有完成完整的随挥。',
    symptoms: ['球没有旋转', '力量传递不完整', '身体失去平衡', '容易受伤'],
    causes: ['害怕打出界', '急于回位', '没有正确的动作概念'],
    corrections: [
      '练习时强调随挥结束在左肩上方',
      '先不管球的落点，专注完成动作',
      '空挥拍练习完整的挥拍动作',
      '想象"甩鞭子"的感觉，让动作自然完成',
    ],
  },
  {
    id: 7,
    title: '脚步不动',
    description: '站在原地打球，不移动脚步去找最佳击球位置。',
    symptoms: ['经常够着打球', '击球点不固定', '难以处理各种来球', '容易失去平衡'],
    causes: ['懒惰', '体能不足', '判断来球位置不准', '没有步法训练'],
    corrections: [
      '养成每球必动的习惯',
      '练习分腿垫步反应',
      '加强体能训练',
      '多做多球训练，强迫自己移动',
    ],
  },
  {
    id: 8,
    title: '重心后坐',
    description: '击球时重心停留在后脚，没有向前转移。',
    symptoms: ['击球无力', '球容易下网', '没有攻击性', '身体后仰'],
    causes: ['害怕来球', '站位太近', '没有正确的发力习惯'],
    corrections: [
      '练习向前迎球的感觉',
      '击球时感受重心从后脚转移到前脚',
      '用身体推球而不是只用手臂',
      '练习上步正手，强化重心转移',
    ],
  },
];

export default function MistakesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">常见错误与纠正</h1>
          <p className="text-xl text-green-100">
            识别并改正这些常见错误，让你的正手更上一层楼
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">为什么要了解常见错误？</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              学习正手不仅要知道正确的做法，更要了解常见的错误以及如何避免。
              很多错误动作一旦形成习惯就很难纠正，因此早发现、早纠正非常重要。
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-800">
                <strong>提示：</strong>如果你发现自己有这些问题，不要气馁。
                即使是职业选手也会有技术上的小毛病。关键是要有意识地去改正。
              </p>
            </div>
          </div>
        </section>

        {/* Mistakes List */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">八大常见错误详解</h2>
          <div className="space-y-6">
            {mistakes.map((mistake) => (
              <div key={mistake.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-red-500 text-white px-6 py-4">
                  <div className="flex items-center">
                    <span className="bg-white text-red-500 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                      {mistake.id}
                    </span>
                    <h3 className="text-xl font-bold">{mistake.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{mistake.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-bold text-red-800 mb-2">症状表现</h4>
                      <ul className="space-y-1">
                        {mistake.symptoms.map((symptom) => (
                          <li key={symptom} className="text-gray-600 text-sm flex items-center">
                            <span className="text-red-500 mr-2">•</span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-bold text-orange-800 mb-2">可能原因</h4>
                      <ul className="space-y-1">
                        {mistake.causes.map((cause) => (
                          <li key={cause} className="text-gray-600 text-sm flex items-center">
                            <span className="text-orange-500 mr-2">•</span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">纠正方法</h4>
                    <ul className="space-y-2">
                      {mistake.corrections.map((correction, index) => (
                        <li key={correction} className="text-gray-600 text-sm flex items-start">
                          <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          {correction}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Self-Check */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">自我检查方法</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">📹</span>
                  视频分析
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  让朋友用手机拍摄你打球的视频，然后慢动作回放分析：
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 是否有充分的转体？</li>
                  <li>• 击球点在什么位置？</li>
                  <li>• 随挥是否完整？</li>
                  <li>• 脚步是否到位？</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">👥</span>
                  他人反馈
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  请教练或有经验的球友观察你的动作，重点关注：
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 准备是否及时？</li>
                  <li>• 动作是否流畅？</li>
                  <li>• 是否有明显的紧张？</li>
                  <li>• 哪些环节需要改进？</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">🪞</span>
                  镜子练习
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  在镜子前进行空挥拍练习，检查：
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 准备姿势是否正确？</li>
                  <li>• 引拍是否合理？</li>
                  <li>• 身体各部分协调吗？</li>
                  <li>• 随挥结束位置对吗？</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                  <span className="text-2xl mr-2">📊</span>
                  结果分析
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  根据击球结果推断可能的问题：
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• 经常下网 → 击球点太后或太低</li>
                  <li>• 经常出界 → 拍面太开或挥拍太平</li>
                  <li>• 无力 → 没转体或重心后坐</li>
                  <li>• 不稳定 → 击球点不固定</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">纠错建议</h2>
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">1.</span>
                <span className="text-gray-700">
                  <strong>一次只改一个问题：</strong>不要试图同时纠正所有错误，
                  选择最影响击球的问题先解决。
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">2.</span>
                <span className="text-gray-700">
                  <strong>从慢动作开始：</strong>先用慢速度练习正确动作，
                  等熟练后再逐渐提速。
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">3.</span>
                <span className="text-gray-700">
                  <strong>重复练习形成习惯：</strong>纠正一个错误可能需要上千次
                  正确动作的重复，要有耐心。
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">4.</span>
                <span className="text-gray-700">
                  <strong>接受暂时退步：</strong>改变动作初期可能会暂时打得更差，
                  这是正常的，坚持下去会有突破。
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 text-xl mr-3">5.</span>
                <span className="text-gray-700">
                  <strong>寻求专业指导：</strong>如果自己难以纠正，
                  建议找专业教练帮助分析和指导。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">下一步：科学练习方法</h2>
          <p className="text-gray-300 mb-6">
            了解了常见错误后，让我们学习如何通过科学的练习方法来提高正手水平。
          </p>
          <Link
            href="/practice"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
          >
            学习练习方法 →
          </Link>
        </section>
      </div>
    </div>
  );
}
