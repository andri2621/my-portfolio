import { NextRequest, NextResponse } from 'next/server';

import { getSessionId } from '@/lib/helper.server';
import { prismaClient } from '@/lib/prisma.client';

export async function GET(request: NextRequest) {
  try {
    const slug = request.nextUrl?.searchParams?.get('slug');

    if (slug) {
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
            views: content._count.views ?? 0,
            likes: content._count.likes ?? 0,
          },
          status: 200,
          message: 'Success',
        });
      } else {
        return NextResponse.json({
          status: 404,
          message: 'Blog Not Found',
        });
      }
    } else {
      const content = await prismaClient.contentMeta.findMany({
        include: {
          _count: {
            select: {
              views: true,
              likes: true,
            },
          },
        },
      });

      content.sort((a, b) => a.slug.localeCompare(b.slug));

      return NextResponse.json({
        data: content,
        status: 200,
        message: 'Success',
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

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json();

    if (!slug) {
      return NextResponse.json({
        status: 400,
        message: 'Bad Request: No slug provided',
      });
    }

    const sessionId = getSessionId(req);

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
      sessionId,
      views: content._count.views ?? 0,
      likes: content._count.likes ?? 0,
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
