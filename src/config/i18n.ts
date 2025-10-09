/**
 * Internationalization (i18n) translations for UI text
 */

export interface Translations {
  // Blog page
  relatedArticles: string;
  minRead: string;
  publishedOn: string;
  updatedOn: string;

  // Navigation
  backToBlog: string;
  backToAllBlogs: string;
  home: string;
  blog: string;

  // Sidebar
  featuredArticle: string;
  articleInfo: string;
  readingTime: string;
  category: string;
  published: string;
  aboutTheAuthor: string;
  categories: string;
  popularTags: string;

  // Common
  readMore: string;
  tags: string;
  author: string;
  share: string;
}

export const translations: Record<string, Translations> = {
  en: {
    relatedArticles: 'Related Articles',
    minRead: 'min read',
    publishedOn: 'Published on',
    updatedOn: 'Updated on',
    backToBlog: 'Back to Blog',
    backToAllBlogs: 'Back to All Blogs',
    home: 'Home',
    blog: 'Blog',
    featuredArticle: 'Featured Article',
    articleInfo: 'Article Info',
    readingTime: 'Reading Time',
    category: 'Category',
    published: 'Published',
    aboutTheAuthor: 'About the Author',
    categories: 'Categories',
    popularTags: 'Popular Tags',
    readMore: 'Read More',
    tags: 'Tags',
    author: 'Author',
    share: 'Share',
  },
  es: {
    relatedArticles: 'Artículos Relacionados',
    minRead: 'min de lectura',
    publishedOn: 'Publicado el',
    updatedOn: 'Actualizado el',
    backToBlog: 'Volver al Blog',
    backToAllBlogs: 'Volver a Todos los Blogs',
    home: 'Inicio',
    blog: 'Blog',
    featuredArticle: 'Artículo Destacado',
    articleInfo: 'Información del Artículo',
    readingTime: 'Tiempo de Lectura',
    category: 'Categoría',
    published: 'Publicado',
    aboutTheAuthor: 'Sobre el Autor',
    categories: 'Categorías',
    popularTags: 'Etiquetas Populares',
    readMore: 'Leer Más',
    tags: 'Etiquetas',
    author: 'Autor',
    share: 'Compartir',
  },
  fr: {
    relatedArticles: 'Articles Connexes',
    minRead: 'min de lecture',
    publishedOn: 'Publié le',
    updatedOn: 'Mis à jour le',
    backToBlog: 'Retour au Blog',
    backToAllBlogs: 'Retour à Tous les Blogs',
    home: 'Accueil',
    blog: 'Blog',
    featuredArticle: 'Article en Vedette',
    articleInfo: 'Infos sur l\'Article',
    readingTime: 'Temps de Lecture',
    category: 'Catégorie',
    published: 'Publié',
    aboutTheAuthor: 'À Propos de l\'Auteur',
    categories: 'Catégories',
    popularTags: 'Étiquettes Populaires',
    readMore: 'Lire Plus',
    tags: 'Étiquettes',
    author: 'Auteur',
    share: 'Partager',
  },
  de: {
    relatedArticles: 'Verwandte Artikel',
    minRead: 'Min. Lesezeit',
    publishedOn: 'Veröffentlicht am',
    updatedOn: 'Aktualisiert am',
    backToBlog: 'Zurück zum Blog',
    backToAllBlogs: 'Zurück zu Allen Blogs',
    home: 'Startseite',
    blog: 'Blog',
    featuredArticle: 'Empfohlener Artikel',
    articleInfo: 'Artikel-Info',
    readingTime: 'Lesezeit',
    category: 'Kategorie',
    published: 'Veröffentlicht',
    aboutTheAuthor: 'Über den Autor',
    categories: 'Kategorien',
    popularTags: 'Beliebte Schlagwörter',
    readMore: 'Mehr Lesen',
    tags: 'Schlagwörter',
    author: 'Autor',
    share: 'Teilen',
  },
  ja: {
    relatedArticles: '関連記事',
    minRead: '分で読めます',
    publishedOn: '公開日',
    updatedOn: '更新日',
    backToBlog: 'ブログに戻る',
    backToAllBlogs: 'すべてのブログに戻る',
    home: 'ホーム',
    blog: 'ブログ',
    featuredArticle: '注目記事',
    articleInfo: '記事情報',
    readingTime: '読了時間',
    category: 'カテゴリー',
    published: '公開',
    aboutTheAuthor: '著者について',
    categories: 'カテゴリー',
    popularTags: '人気タグ',
    readMore: '続きを読む',
    tags: 'タグ',
    author: '著者',
    share: 'シェア',
  },
  ko: {
    relatedArticles: '관련 기사',
    minRead: '분 소요',
    publishedOn: '게시일',
    updatedOn: '업데이트',
    backToBlog: '블로그로 돌아가기',
    backToAllBlogs: '모든 블로그로 돌아가기',
    home: '홈',
    blog: '블로그',
    featuredArticle: '추천 기사',
    articleInfo: '기사 정보',
    readingTime: '읽기 시간',
    category: '카테고리',
    published: '게시됨',
    aboutTheAuthor: '저자 소개',
    categories: '카테고리',
    popularTags: '인기 태그',
    readMore: '더 읽기',
    tags: '태그',
    author: '저자',
    share: '공유',
  },
  zh: {
    relatedArticles: '相关文章',
    minRead: '分钟阅读',
    publishedOn: '发布于',
    updatedOn: '更新于',
    backToBlog: '返回博客',
    backToAllBlogs: '返回所有博客',
    home: '首页',
    blog: '博客',
    featuredArticle: '精选文章',
    articleInfo: '文章信息',
    readingTime: '阅读时间',
    category: '分类',
    published: '发布',
    aboutTheAuthor: '关于作者',
    categories: '分类',
    popularTags: '热门标签',
    readMore: '阅读更多',
    tags: '标签',
    author: '作者',
    share: '分享',
  },
};

/**
 * Get translations for a specific language
 */
export function getTranslations(language: string): Translations {
  return translations[language] || translations['en'];
}

/**
 * Get a specific translation key for a language
 */
export function t(language: string, key: keyof Translations): string {
  const trans = getTranslations(language);
  return trans[key];
}
