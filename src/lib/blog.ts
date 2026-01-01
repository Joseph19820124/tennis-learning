import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  coverImage: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  coverImage: string;
}

const postsDirectory = (locale: string) =>
  path.join(process.cwd(), 'content/blog', locale);

export function getAllPosts(locale: string): BlogPostMeta[] {
  const directory = postsDirectory(locale);

  if (!fs.existsSync(directory)) {
    return [];
  }

  const fileNames = fs.readdirSync(directory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(directory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        description: data.description || '',
        category: data.category || '',
        coverImage: data.coverImage || '',
      };
    });

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(
  slug: string,
  locale: string
): Promise<BlogPost | null> {
  const directory = postsDirectory(locale);
  const fullPath = path.join(directory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    description: data.description || '',
    category: data.category || '',
    coverImage: data.coverImage || '',
    content: contentHtml,
  };
}

export function getAllPostSlugs(locale: string): string[] {
  const directory = postsDirectory(locale);

  if (!fs.existsSync(directory)) {
    return [];
  }

  const fileNames = fs.readdirSync(directory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}
