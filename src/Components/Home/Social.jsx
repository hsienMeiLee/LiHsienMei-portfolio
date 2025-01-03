import React from 'react';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilGithub } from '@iconscout/react-unicons';
import { UilLine } from '@iconscout/react-unicons';

const Social = () => {
  return (
    <div className="flex sm:flex-col items-end gap-2">
        <a href="https://www.instagram.com/nickey_eun/" className="hover:scale-110 transition-all hover:text-coffee" target='_blank'>
            <UilInstagram className="w-8 h-8 "/>
        </a>
        <a href="https://github.com/hsienMeiLee" className="hover:scale-110 transition-all hover:text-coffee" target='_blank'>
            <UilGithub className="w-8 h-8"/>
        </a>
        <a href="https://line.me/ti/p/Nj-FlmBiTd" className="hover:scale-110 transition-all hover:text-coffee" target='_blank'>
            <UilLine className="w-8 h-8" />
        </a>
    </div>
  )
}

export default Social