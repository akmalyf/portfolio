import Hero from '@/components/home/hero';
import TechStack from '@/components/home/tech-stack';
import Projects from '@/components/home/projects';

export default function Home() {
    return (
        <main
            className="relative flex min-h-screen flex-col overflow-hidden bg-zinc-950 supports-[overflow:clip]:overflow-clip">
            <Hero />
            <TechStack />
            <Projects />
        </main>
    );
}
