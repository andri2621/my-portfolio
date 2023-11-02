import { NextRequest, NextResponse } from 'next/server';

import { getUserLikeCount } from '@/lib/api.server';
import { getSessionId } from '@/lib/helper.server';
import { prismaClient } from '@/lib/prisma.client';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const sessionId = getSessionId(request);

    const content = await prismaClient.contentMeta.findFirst({
      where: {
        slug,
      },
      include: {
        _count: {
          select: {
            views: true,
            likes: true,
          },
        },
      },
    });

    if (content) {
      return NextResponse.json({
        data: {
          slug: content.slug,
          contentViews: content?._count.views ?? 0,
          contentLikes: content?._count.likes ?? 0,
          likesByUser: await getUserLikeCount({ sessionId, slug }),
        },
        status: 200,
        message: 'Success get data',
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: 'Blog Not Found',
      });
    }
  } catch (err) {
    return NextResponse.json({
      status: 500,
      message: err instanceof Error ? err.message : 'Internal Server Error',
    });
  } finally {
    await prismaClient.$disconnect();
  }
}
