import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales = ['zh', 'en'];
  const paths: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const slugs = getAllPostSlugs(locale);
    for (const slug of slugs) {
      paths.push({ locale, slug });
    }
  }

  return paths;
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const post = await getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const categoryColors: Record<string, string> = {
    forehand: 'bg-green-100 text-green-800',
    backhand: 'bg-blue-100 text-blue-800',
    serve: 'bg-purple-100 text-purple-800',
    practice: 'bg-orange-100 text-orange-800',
    equipment: 'bg-gray-100 text-gray-800',
    default: 'bg-green-100 text-green-800',
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.coverImage || 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&h=600&fit=crop'}
            alt={post.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-700/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-green-300 hover:text-white mb-4 transition-colors"
          >
            ← {t('backToBlog')}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-sm px-3 py-1 rounded-full ${
                categoryColors[post.category] || categoryColors.default
              }`}
            >
              {t(`categories.${post.category}`)}
            </span>
            <span className="text-gray-300">{post.date}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-gray-200">{post.description}</p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-green-600 prose-strong:text-gray-800 prose-ul:text-gray-600 prose-ol:text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back to blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            ← {t('backToBlog')}
          </Link>
        </div>
      </article>
    </div>
  );
}
