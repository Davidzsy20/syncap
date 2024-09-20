import Link from 'next/link';

import { Background } from '../Background';
import { Section } from '../layout/Section';
import { TypographyH6, TypographyP1 } from '../Text';

const Footer = () => (
  <Background color="bg-primary-10" className="inset-x-0 bottom-0 flex-1">
    <Section yPadding="py-16">
      <div className="flex w-full justify-between py-5">
        <div className="flex flex-col gap-10">
          <img
            src="/assets/images/syncap_logo.png"
            alt="logo"
            className="w-28"
          />
          <div className="flex flex-col gap-2">
            <TypographyP1>© 2024 Syncap. All rights reserved</TypographyP1>
            <span className="flex gap-2">
              <Link href="/termsofservice">
                <TypographyP1>Terms of Service</TypographyP1>
              </Link>
              |
              <Link href="/privacy">
                <TypographyP1>Privacy Policy</TypographyP1>
              </Link>
            </span>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-5 whitespace-nowrap lg:flex-row lg:gap-12">
          <div className="flex-1">
            <TypographyH6 className="mb-4 font-medium">Solutions</TypographyH6>
            <div className="flex flex-col gap-2">
              <Link href="/platform/owners">
                <TypographyP1>Selling a Company</TypographyP1>
              </Link>
              <Link href="/platform/advisors">
                <TypographyP1>Buying a Company</TypographyP1>
              </Link>
              <Link href="/platform/buyers-investors">
                <TypographyP1>Raising Capital</TypographyP1>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <TypographyH6 className="mb-4 font-medium">Platform</TypographyH6>
            <div className="flex flex-col gap-2">
              <Link href="/platform/owners">
                <TypographyP1>Business Owners</TypographyP1>
              </Link>
              <Link href="/platform/advisors">
                <TypographyP1>Advisors</TypographyP1>
              </Link>
              <Link href="/platform/buyers-investors">
                <TypographyP1>Buyers & Investors</TypographyP1>
              </Link>
              <Link href="/platform/intermediaries">
                <TypographyP1>Intermediaries</TypographyP1>
              </Link>
            </div>
          </div>
          <div className="flex gap-5 whitespace-nowrap lg:gap-8">
            <div className="flex-1">
              <TypographyH6 className="mb-4 font-medium">Legal</TypographyH6>
              <div className="flex flex-col gap-2">
                <Link href="/termsofservice">
                  <TypographyP1>Terms of Service</TypographyP1>
                </Link>
                <Link href="/privacy">
                  <TypographyP1>Privacy Policy</TypographyP1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
