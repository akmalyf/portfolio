import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layouts/navbar';
import Footer from '@/components/layouts/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { NewHome } from '@/components/home/new-home';
import '@fontsource-variable/sora';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'Akmal',
    description: 'Personal website',
};

const isSingleSection: boolean = true;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        {isSingleSection ? (
            <body className={cn('antialiased', fontSans.variable)}>
                <NewHome />
                <SpeedInsights />
                <Analytics />
            </body>
        ) : (
            <body
                className={cn(
                    'relative bg-zinc-950 font-sans text-white antialiased',
                    fontSans.variable,
                )}
            >
            <Navbar />
            {children}
            <Footer />
            <SpeedInsights />
            <Analytics />
            </body>
        )}
        </html>
    );
}
