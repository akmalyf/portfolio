import TechStack from '@/components/home/tech-stack';
import Projects from '@/components/home/projects';
import { NewHome } from '@/components/home/new-home';

export default function Home() {
    return (
        <main
            className="relative flex min-h-screen flex-col overflow-hidden bg-zinc-950 supports-[overflow:clip]:overflow-clip">
            <NewHome />
            <TechStack />
            <Projects />
        </main>
    );
}
