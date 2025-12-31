import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span className="mr-2">🎾</span>
              网球正手教学
            </h3>
            <p className="text-gray-400 text-sm">
              专注于网球正手技术的教学平台，为右手选手提供系统、专业的正手技术指导。
              从基础握拍到职业技巧，帮助你全面提升正手水平。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">快速导航</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/basics" className="hover:text-green-400 transition-colors">
                  正手基础知识
                </Link>
              </li>
              <li>
                <Link href="/grip" className="hover:text-green-400 transition-colors">
                  握拍方式详解
                </Link>
              </li>
              <li>
                <Link href="/swing" className="hover:text-green-400 transition-colors">
                  挥拍动作分解
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:text-green-400 transition-colors">
                  练习方法
                </Link>
              </li>
            </ul>
          </div>

          {/* Tips */}
          <div>
            <h3 className="text-lg font-bold mb-4">学习建议</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ 循序渐进，打好基础</li>
              <li>✓ 多看视频，模仿动作</li>
              <li>✓ 勤加练习，形成肌肉记忆</li>
              <li>✓ 及时纠正错误动作</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 网球正手教学. 专为网球爱好者打造</p>
        </div>
      </div>
    </footer>
  );
}
