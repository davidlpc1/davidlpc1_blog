/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React, { ReactNode } from 'react';

import Link from 'next/link';

interface LinkProps {
  href:string;
  children: ReactNode;
  style?:Object;
}

export default function LinkComponent({ href, children,style }:LinkProps) {
  return (
    <Link href={href}>
      <a style={style}>
        { children }
      </a>
    </Link>
  );
}
