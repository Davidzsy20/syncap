import Image from 'next/image';

const Logo = () => {
  return (
    <span className="inline-flex items-center text-gray-900">
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
