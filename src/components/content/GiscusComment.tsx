'use client';

import Giscus, { Repo, Theme } from '@giscus/react';
import { useTheme } from 'next-themes';

import { commentFlag } from '@/constant/env';

export default function GiscusComment() {
  const { theme } = useTheme();

  return commentFlag ? (
    <Giscus
      key={theme}
      repo={(process.env.NEXT_PUBLIC_GISCUS_REPO as Repo) || ''}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ''}
      category='General'
      categoryId='DIC_kwDOKfR2Ec4CauJH'
      mapping='pathname'
      reactionsEnabled='1'
      emitMetadata='0'
      inputPosition='top'
      loading='lazy'
      lang='en'
      theme={theme === 'night' ? ('dark' as Theme) : ('light' as Theme)}
    />
  ) : null;
}
