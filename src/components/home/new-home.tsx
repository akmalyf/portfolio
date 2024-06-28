import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

export const NewHome = () => {
    return (
        <BackgroundGradientAnimation>
            <div
                className="container pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl">
                <h1 className="bg-gradient-to-b from-white/80 to-white/20 bg-clip-text leading-loose tracking-tight text-transparent drop-shadow-2xl">
                    Design, Develop, Inspire
                </h1>
            </div>
        </BackgroundGradientAnimation>
    );
};
