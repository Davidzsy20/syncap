import Image from 'next/image';

const Logo = () => {
  return (
    <span className="aspect-ratio inline-flex min-w-[120px]">
      <Image
        src="/assets/images/syncap_logo.png"
        alt="Logo"
        width={130}
        height={50}
      />
    </span>
  );
};

export { Logo };
