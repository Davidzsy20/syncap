import Image from 'next/image';

const Logo = () => {
  return (
    <div className="aspect-ratio relative  inline-flex h-[30px] w-[192px]">
      <Image
        src="/assets/images/syncap_logo.png"
        alt="Logo"
        fill
        className="object-contain"
      />
    </div>
  );
};

export { Logo };
