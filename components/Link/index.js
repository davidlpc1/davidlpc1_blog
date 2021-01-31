import React from 'react';
import Link from 'next/link'

export default function LinkComponent({ href,children,...props }){
    return (
        <Link href={href}>
            <a {...props}>
                { children }
            </a>
        </Link>
    )
}