import type { APIRoute } from 'astro';
import { getPublishedBlogPosts } from '../lib/posts';
import { getCategories } from '../lib/data';
import { normalizeTagName } from '../lib/tags';
import { SITE_CONFIG } from '../data/site-config';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, getLanguagePrefix } from '../config/languages';

export const GET: APIRoute = async () => {
  const posts = await getPublishedBlogPosts();
  const categories = await getCategories();

  // Get unique tags from all posts
  const tags = [...new Set(posts.flatMap(post => post.data.tags))];

  // Get posts for all languages
  const allLanguagePosts = await Promise.all(
    SUPPORTED_LANGUAGES.map(async (lang) => ({
      lang,
      posts: await getPublishedBlogPosts(lang)
    }))
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Homepage -->
  <url>
    <loc>${SITE_CONFIG.url}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Blog index (English) -->
  <url>
    <loc>${SITE_CONFIG.url}/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Blog index (Other languages) -->
  ${SUPPORTED_LANGUAGES.filter(lang => lang !== DEFAULT_LANGUAGE).map(lang => {
    const prefix = getLanguagePrefix(lang);
    return `
  <url>
    <loc>${SITE_CONFIG.url}${prefix}/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;
  }).join('')}

  <!-- About page -->
  <url>
    <loc>${SITE_CONFIG.url}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Features Index -->
  <url>
    <loc>${SITE_CONFIG.url}/features</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Feature Pages -->
  <url>
    <loc>${SITE_CONFIG.url}/features/email-reminders</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/webhook-integrations</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/white-labeling</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/recurring-meetings</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/custom-form-fields</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/timezone-intelligence</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/video-conferencing</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/round-robin-scheduling</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/buffer-time</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/calendar-sharing</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/instant-confirmations</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/easy-rescheduling</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/multi-language-support</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/multi-calendar-views</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/drag-drop-management</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/multi-tenant-saas</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/cloud-infrastructure</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/guest-management</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/service-catalog</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/product-catalog</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/lead-management</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/realtime-dashboard</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/support-system</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/role-based-access</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/ai-meeting-notes</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/analytics</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/crm-integration</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/multi-calendar-sync</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/smart-booking-links</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/social-management</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/features/team-management</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Policy pages -->
  <url>
    <loc>${SITE_CONFIG.url}/terms-of-service</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${SITE_CONFIG.url}/privacy-policy</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <!-- Blog posts (All languages) -->
  ${allLanguagePosts.flatMap(({ lang, posts: langPosts }) => {
    const prefix = getLanguagePrefix(lang);
    return langPosts.map(post => `
  <url>
    <loc>${SITE_CONFIG.url}${prefix}/blog/${post.slug}</loc>
    <lastmod>${post.data.publishDate.toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);
  }).join('')}

  <!-- Category pages -->
  ${categories.map(category => `
  <url>
    <loc>${SITE_CONFIG.url}/blog/category/${category.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}

  <!-- Tag pages -->
  ${tags.map(tag => `
  <url>
    <loc>${SITE_CONFIG.url}/blog/tag/${normalizeTagName(tag)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}

  <!-- Author page -->
  <url>
    <loc>${SITE_CONFIG.url}/blog/author/kevin</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600' // Cache for 1 hour
    }
  });
};