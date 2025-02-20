import { Faq } from "@/components/FAQ";

export default function RootLayout({
    children
  }: Readonly<{
    children: React.ReactNode}>) {
    return (
      <div className="px-4 bg-neutral-950 text-white pt-16 max-w-screen-xl flex justify-center flex-col mx-auto">
        {children}
        <Faq/>
      </div>
    );
  }
  