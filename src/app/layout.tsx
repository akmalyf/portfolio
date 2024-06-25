import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layouts/navbar';
import Footer from '@/components/layouts/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'Akmal',
    description: 'Personal website',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={cn(
                    'relative bg-zinc-950 font-sans text-white antialiased',
                    fontSans.variable
                )}
            >
                <Navbar />
                {children}
                <Footer />
                <SpeedInsights />
            </body>
        </html>
    );
}
