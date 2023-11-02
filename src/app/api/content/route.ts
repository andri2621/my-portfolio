import { NextRequest, NextResponse } from 'next/server';

import { getUserLikeCount } from '@/lib/api.server';
import { getSessionId } from '@/lib/helper.server';
import { prismaClient } from '@/lib/prisma.client';

export async function GET() {
  try {
    const _content = await prismaClient.contentMeta.findMany({
      include: {
        _count: {
          select: {
            views: true,
            likes: true,
          },
        },
      },
    });

    const content = _content.map((meta) => {
      return {
        slug: meta.slug,
        views: meta._count.views,
        likes: meta._count.likes,
      };
    });

    content.sort((a, b) => a.slug.localeCompare(b.slug));

    return NextResponse.json({
      data: content,
      status: 200,
      message: 'Success Get All Data',
    });
  } catch (err) {
    return NextResponse.json({
      status: 500,
      message: err instanceof Error ? err.message : 'Internal Server Error',
    });
  } finally {
    await prismaClient.$disconnect();
  }
}

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json();
    const sessionId = getSessionId(req);

    if (!slug) {
      return NextResponse.json({
        status: 400,
        message: 'Bad Request: No slug provided',
      });
    }

    const content = await prismaClient.contentMeta.upsert({
      where: { slug },
      create: {
        slug,
        views: {
          create: { sessionId },
        },
      },
      update: {
        views: {
          create: { sessionId },
        },
      },
      include: {
        _count: { select: { views: true, likes: true } },
      },
    });

    const response = {
      slug: content.slug,
      contentViews: content._count.views ?? 0,
      contentLikes: content._count.likes ?? 0,
      likesByUser: await getUserLikeCount({ sessionId, slug }),
    };

    return NextResponse.json({
      data: response,
      status: 200,
      message: 'Success Increment View',
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({
        status: 400,
        message: 'Invalid JSON input. Please use proper slug.',
      });
    } else {
      // eslint-disable-next-line no-console
      console.error(error);
      return NextResponse.json({
        status: 500,
        message:
          error instanceof Error ? error.message : 'Internal Server Error',
      });
    }
  } finally {
    await prismaClient.$disconnect();
  }
}
