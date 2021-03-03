/* eslint-disable react/prop-types */
import React, { ReactNode } from 'react';
// eslint-disable-next-line import/no-unresolved
import Link from 'next/link';

interface LinkProps {
  href:string;
  children: ReactNode;
}

export default function LinkComponent({ href, children }:LinkProps) {
  return (
    <Link href={href}>
      <a>
        { children }
      </a>
    </Link>
  );
}
