import Link from 'next/link';
import { Button } from '@/components/ui/button';
import NavLink from '@/components/ui/nav-link';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
    const navItems = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'About',
            link: '/about',
        },
        {
            name: 'Contact',
            link: '/contact',
        },
    ];

    const LogoButton = () => {
        return (
            <div className="ml-0.5 text-indigo-400 hover:text-indigo-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="none"
                >
                    <path
                        className="fill-current"
                        fillRule="evenodd"
                        d="m14.862 0 2.763.738-2.073 7.709L21.67 2.35l2.022 2.015-5.656 5.637 8.475-2.263.74 2.753-7.726 2.063L28 14.82l-.74 2.753-7.672-2.05c.095-.412.146-.842.146-1.284 0-3.149-2.561-5.7-5.72-5.7a5.702 5.702 0 0 0-5.572 6.994L0 13.276l.74-2.753 7.726 2.063-6.204-6.183 2.023-2.016 5.656 5.637L7.67 1.58l2.762-.737 2.102 7.817L14.862 0Zm3.294 18.167a5.683 5.683 0 0 0 1.423-2.612l6.157 6.136-2.022 2.015-5.558-5.539Zm-.053.059a5.72 5.72 0 0 1-2.556 1.506l2.022 7.522 2.763-.738-2.23-8.29Zm-4.092 1.712c.493 0 .972-.062 1.428-.179L13.223 28l-2.762-.738 2.024-7.529c.486.134.998.205 1.526.205Zm-1.623-.232a5.721 5.721 0 0 1-2.512-1.528L4.305 23.73l2.022 2.016 6.06-6.04Zm-3.941-4.158a5.682 5.682 0 0 0 1.387 2.58L1.49 20.356l-.74-2.753 7.697-2.055Z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        );
    };

    return (
        <header className="fixed z-40 w-full bg-zinc-950/70 backdrop-blur-sm">
            <div className="container mx-auto flex max-w-6xl items-center justify-between py-8">
                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <LogoButton />
                        </SheetTrigger>
                        <SheetContent
                            side="left"
                            className="container border-none bg-zinc-900"
                        >
                            <SheetHeader>
                                <SheetTitle>
                                    Are you absolutely sure?
                                </SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will
                                    permanently delete your account and remove
                                    your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                <Link href="/" className="hidden md:inline-flex">
                    <LogoButton />
                </Link>
                <nav className="hidden justify-center space-x-4 md:flex">
                    <ul className="flex flex-wrap items-center gap-3 text-sm font-medium md:gap-8">
                        {navItems.map((item, i) => (
                            <li key={i.toString()}>
                                <NavLink
                                    href={item.link}
                                    exact
                                    className="inline-flex rounded-full px-3 py-1.5 text-slate-500 hover:text-indigo-500 [&.active]:bg-indigo-100 [&.active]:text-indigo-600"
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <Button>Let&apos;s talk</Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
