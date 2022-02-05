/* eslint-disable react/react-in-jsx-scope */
import Link from "../Link";

interface BackProps {
  href: string;
}

export default function Back({ href }: BackProps) {
  return (
    <>
      <Link href={href} style={{ margin:5 }}>
        <img width={28} height={28} src="/images/arrow-back.png" alt="Back" />
      </Link>
    </>
  );
}
