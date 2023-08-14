import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  theme?: string;
  width: number;
  height: number;
  className?: string;
  style?: any;
}

function Logo({ theme, width, height, className }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src={theme === 'light' ? '/logo_light.png' : '/logo_dark.png'}
        alt="C.L.A.S.S.E. Conseil - Logo"
        width={width}
        height={height}
        className={className}
        style={{ cursor: 'pointer' }}
      />
    </Link>
  );
}

export default Logo;
