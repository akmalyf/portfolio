import Hero from '@/components/home/hero';
import TechStack from '@/components/home/tech_stack';
import Projects from '@/components/home/projects';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col bg-zinc-950'>
            <Hero />
            <TechStack />
            <Projects />
        </main>
    );
}
