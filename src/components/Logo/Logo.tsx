import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo_dark.png"
        alt="Classe Conseil - logo"
        width={80}
        height={85}
        style={{ cursor: 'pointer', paddingBottom: '10px' }}
      />
    </Link>
  );
}

export default Logo;
