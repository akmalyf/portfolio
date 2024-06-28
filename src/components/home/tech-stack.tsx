const TechStack = () => {
    const tech = [
        { title: 'Facebook' },
        { title: 'Disney' },
        { title: 'Airbnb' },
        { title: 'Apple' },
        { title: 'Spark' },
        { title: 'Samsung' },
        { title: 'Quora' },
        { title: 'Sass' },
    ];

    return (
        <section className="flex min-w-full bg-zinc-800 py-16">
            <div className='inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
                <ul className='flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8'>
                    {tech.map((item, index) => (
                        <li
                            key={index}
                            className='text-xl font-bold text-gray-300'
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
                <ul
                    className='flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8'
                    aria-hidden='true'
                >
                    {tech.map((item, index) => (
                        <li
                            key={index}
                            className='text-xl font-bold text-gray-300'
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TechStack;
