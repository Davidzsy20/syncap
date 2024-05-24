// import { ChevronLeftIcon } from '@radix-ui/react-icons';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { TypographyH5, TypographyP2 } from '@/components/Text';
import { Logo } from '@/templates/Logo';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <div className="relative h-screen">
      <Link href="/" className=" absolute left-12 top-12 w-28 lg:invert">
        <Logo />
      </Link>
      <div className="flex size-full items-start">
        {/* Left Side */}
        <div className="hidden h-full w-2/5 flex-col justify-end bg-primary-1050/75 px-8 py-16 lg:flex">
          <div className="flex flex-col space-y-2 text-center">
            <TypographyP2
              className="text-sm text-white"
              text="“This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.”"
            />
          </div>
        </div>
        {/* Right Side */}
        {/* <div className="flex items-center text-gray-600 hover:text-black">
               <Link href="/">  <ChevronLeftIcon />
          </Link>   Back
          </div> */}
        <div className="flex size-full flex-col items-center justify-center p-8 lg:w-3/5">
          <div className="relative flex w-full min-w-[350px] flex-col items-center justify-center space-y-6 p-16">
            <div className="flex w-[350px] flex-col items-center justify-center space-y-10 text-center">
              <div>
                <TypographyH5 className="text-2xl font-semibold tracking-tight">
                  Welcome back
                </TypographyH5>
                <TypographyP2 className="text-sm text-gray-600">
                  Enter your email to access your account
                </TypographyP2>
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">
                  <h1 className="text-left">Email</h1>
                </Label>
                <Input type="email" placeholder="Enter your business email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">
                  <h1 className="text-left">Password</h1>
                </Label>
                <Input type="password" placeholder="Password" />
              </div>
              <Button variant="solid" className="w-full">
                Submit
              </Button>
            </div>
            <p className="mt-4 text-xs text-gray-600">
              By clicking continue, you agree to our{' '}
              <Link href="/terms" className="underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
            {/* <UserAuthForm /> */}
            <input></input>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { Icons } from "@/components/icons"
// import { ChevronLeftIcon } from '@radix-ui/react-icons';
// import type { Metadata } from 'next';
// import Link from 'next/link';

// import { Input } from '@/components/Input';
// import { Label } from '@/components/Label';
// import { Button } from '@/components/ui/button';

// export const metadata: Metadata = {
//   title: 'Login',
//   description: 'Login to your account',
// };

// export default function LoginPage() {
//   return (
//     <div className="container flex h-screen w-screen flex-col items-center justify-center">
//       <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
//         <div className="flex flex-col space-y-2 text-center">
//           {/* <Icons.logo className="mx-auto size-6" /> */}
//           <Link href="/">
//             <div className="flex items-center ">
//               <ChevronLeftIcon />
//               Back
//             </div>
//           </Link>{' '}
//           <h1 className="text-2xl font-semibold tracking-tight">
//             Welcome back
//           </h1>
//           <p className="text-muted-foreground text-sm">
//             Enter your email to access your account
//           </p>
//           <div className="grid w-full max-w-sm items-center gap-1.5">
//             <Label htmlFor="email">
//               <h1 className="text-left">Email</h1>
//             </Label>
//             <Input type="email" placeholder="Enter your business email" />
//           </div>
//           <div className="grid w-full max-w-sm items-center gap-1.5">
//             <Label htmlFor="password">
//               <h1 className="text-left">Password</h1>
//             </Label>
//             <Input type="password" placeholder="password" />
//           </div>
//           <Button variant="default">Submit</Button>
//         </div>
//         {/* <UserAuthForm /> */}
//         <input></input>
//       </div>
//     </div>
//   );
// }
