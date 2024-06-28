import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

export const NewHome = () => {
    return (
        <BackgroundGradientAnimation>
            <div
                className="container absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <h1 className="leading-loose tracking-tight bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                    Design, Develop, Inspire
                </h1>
            </div>
        </BackgroundGradientAnimation>
    );
};
