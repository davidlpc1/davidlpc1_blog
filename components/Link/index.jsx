/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Link from 'next/link';

export default function LinkComponent({ href, children, ...props }) {
  return (
    <Link href={href}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...props}>
        { children }
      </a>
    </Link>
  );
}
