import { Metadata } from 'next';

type ogProps = {
  title?: string;
  description?: string;
  siteName?: string;
  avatar?: string;
  author?: string;
  userName?: string;
  url?: string;
  ogType: string;
};

export function getMetaData({
  ogType = 'general',
  title = 'Awandri',
  description = 'A Showcase of My Project, Blogs, and All About Web Development.',
  siteName = 'awandri.com',
  avatar,
  author = 'Andi Setiawan',
  userName = 'Frontend Developer',
  url,
}: ogProps): Metadata {
  const baseUrl = 'https://awandri.com';
  // const ogTitle = encodeURIComponent(title.trim());
  const ogAvatar = encodeURIComponent(avatar ?? '');
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogDesc = encodeURIComponent(description.trim());
  const ogAuthor = encodeURIComponent(author.trim());
  const ogUserName = encodeURIComponent(userName.trim());

  // dynamic text in image
  let textImage;

  if (ogType === 'blog') {
    textImage = `https://og.awandri.com/api/blog?author=${ogAuthor}&userName=${ogUserName}&siteName=${ogSiteName}&title=${ogDesc}&${
      ogAvatar ? ogAvatar : ''
    }`;
  } else {
    textImage = `https://og.awandri.com/api/general?siteName=${ogSiteName}&title=${ogDesc}&description=${ogAuthor}%20%7C%20${ogUserName}`;
  }

  //=============

  const metadata = {
    metadataBase: new URL(baseUrl),
    title: title,
    description: description,
    type: 'website',
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      siteName: siteName,
      url: url ?? baseUrl,
      images: [
        {
          url: textImage.toString(),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      domain: 'awandri.com',
      url: url ?? baseUrl,
      images: [textImage.toString()],
    },
    icon: {
      icon: ['/favicon/favicon.ico?v=2'],
      apple: ['/favicon/apple-touch-icon.png?v=2'],
      shortcut: ['/favicon/apple-touch-icon.png'],
    },
    manifest: '/favicon/site.webmanifest',
    robots: { index: true, follow: true },
    authors: [
      {
        name: author,
        url: baseUrl,
      },
    ],
  };

  return metadata;
}
