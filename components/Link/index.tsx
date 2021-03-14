/* eslint-disable react/prop-types */
import React, { ReactNode } from 'react';
// eslint-disable-next-line import/no-unresolved
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
