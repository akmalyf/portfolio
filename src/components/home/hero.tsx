import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';
import Particles from '@/components/ui/particles';

const Hero = () => {
    return (
        <section className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-zinc-950'>
            <Particles className='pointer-events-none absolute inset-0' />

            <div className='relative mt-12 flex w-full justify-center'>
                <div className='flex min-h-screen max-w-4xl flex-col items-center justify-center gap-10 text-center'>
                    <div className='text-lg text-gray-400'>
                        Hi, I&apos;m Akmal 👋🏻
                    </div>
                    <h1 className='bg-gradient-to-r from-slate-200/60 to-slate-200 to-50% bg-clip-text text-5xl font-extrabold leading-normal text-transparent [text-wrap:balance]'>
                        Passionate Full-Stack Developer Creating Innovative
                        <span className='inline-flex h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] flex-col overflow-hidden text-indigo-500 md:h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))]'>
                            <ul className='ml-2 block animate-text-rotate text-left leading-tight [&_li]:block'>
                                <li>Web Solutions</li>
                                <li>Android Apps</li>
                                <li>iOS Apps</li>
                                <li>Web Solutions</li>
                                <li>Android Apps</li>
                                <li aria-hidden='true'>Web Solutions</li>
                            </ul>
                        </span>
                    </h1>
                    <div className='mx-10 text-lg text-gray-400'>
                        4 years of practical experience in web and mobile app
                        development. I bring expertise and creativity to every
                        project. Recently i learn about DevOps.
                    </div>
                    <Button size='lg' className='mt-8'>
                        <ArrowDownToLine className='mr-2 h-4 w-4' /> Export
                        Portfolio
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
