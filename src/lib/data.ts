import fs from 'fs/promises';
import path from 'path';

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export async function getCategories(): Promise<Category[]> {
  try {
    const categoriesPath = path.join(process.cwd(), 'public/data/categories/categories.json');
    const data = await fs.readFile(categoriesPath, 'utf-8');
    const { categories } = JSON.parse(data);
    return categories || [];
  } catch (e) {
    console.error('Error loading categories:', e);
    return [];
  }
}

export async function getTags(): Promise<Tag[]> {
  try {
    const tagsPath = path.join(process.cwd(), 'public/data/tags/tags.json');
    const data = await fs.readFile(tagsPath, 'utf-8');
    const { tags } = JSON.parse(data);
    return tags || [];
  } catch (e) {
    console.error('Error loading tags:', e);
    return [];
  }
}

export async function getImagesMetadata(): Promise<any> {
  try {
    const metadataPath = path.join(process.cwd(), 'public', 'blog-images', 'metadata', 'images-metadata.json');
    const data = await fs.readFile(metadataPath, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    console.error('Error loading images metadata:', e);
    return { images: {} };
  }
}

export async function getSeoSettings(): Promise<any> {
  try {
    const seoPath = path.join(process.cwd(), 'public/data/settings/seo-settings.json');
    const data = await fs.readFile(seoPath, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    console.error('Error loading SEO settings:', e);
    return {
      sitemap: { enabled: true, priority: 0.5, changefreq: 'weekly' },
      schema: { enabled: true }
    };
  }
}

export async function getSiteConfig(): Promise<any> {
  try {
    const configPath = path.join(process.cwd(), 'public/data/settings/site-config.json');
    const data = await fs.readFile(configPath, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    console.error('Error loading site config:', e);
    return {
      title: "CalendHub Blog",
      description: "Everything when it comes to AI",
      url: "https://www.calendhub.com",
      author: "Author",
      locale: "en"
    };
  }
}