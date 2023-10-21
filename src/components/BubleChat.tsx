import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

const BubleChat = () => {
  return (
    <>
      <div className='chat chat-start'>
        <div className='chat-image avatar'>
          <div className='bg-neutral w-10 rounded-full'>
            <Image src='/images/MyPhoto.png' alt='chat photo' fill />
          </div>
        </div>
        <div className='chat-bubble'>
          Lets get in touch.
          <br />
          <br />
          <div className='flex flex-wrap gap-3'>
            <Link
              target='_blank'
              href='https://www.linkedin.com/in/andisetiawan2621/'
              className='hover:text-primary cursor-newtab flex items-center gap-1'
            >
              <BsLinkedin size={18} />
              Linkedin
            </Link>
            <Link
              target='_blank'
              href='https://github.com/andri2621'
              className='hover:text-primary cursor-newtab flex items-center gap-1'
            >
              <BsGithub size={18} />
              Github
            </Link>
            <Link
              target='_blank'
              href='https://twitter.com/andri2621'
              className='hover:text-primary cursor-newtab flex items-center gap-1'
            >
              <BsTwitter size={18} />
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BubleChat;
