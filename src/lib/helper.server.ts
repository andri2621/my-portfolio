import { createHash } from 'crypto';
import { NextRequest } from 'next/server';

export const getSessionId = (req: NextRequest) => {
  const ipAddress =
    req.headers.get('x-forwarded-for') ||
    // Fallback for localhost or non Vercel deployments
    '0.0.0.0';

  // Since a users IP address is part of the sessionId in our database, we
  // hash it to protect their privacy. By combining it with a salt, we get
  // get a unique id we can refer to, but we won't know what their ip
  // address was.
  const currentUserId = createHash('md5')
    .update(ipAddress + (process.env.IP_ADDRESS_SALT as string), 'utf8')
    .digest('hex');
  return currentUserId;
};
