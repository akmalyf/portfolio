import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import { PluginCreator } from 'tailwindcss/types/config';

const addVariablesForColors: PluginCreator = ({ addBase, theme }) => {
    const allColors = flattenColorPalette(theme('colors'));

    // Explicitly type newVars to be an object with string keys and string values
    const newVars: { [key: string]: string } = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [
            `--${key}`,
            val as string,
        ]),
    );

    addBase({
        ':root': newVars,
    });
};

const config = {
    darkMode: ['class'],
    content: ['./src/**/*.{ts,tsx}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1024px',
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', ...fontFamily.sans],
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
                'text-rotate': {
                    '0%, 16%': {
                        transform: 'translateY(0%)',
                    },
                    '20%, 36%': {
                        transform: 'translateY(-16.66%)',
                    },
                    '40%, 56%': {
                        transform: 'translateY(-33.33%)',
                    },
                    '60%, 76%': {
                        transform: 'translateY(-50%)',
                    },
                    '80%, 96%': {
                        transform: 'translateY(-66.66%)',
                    },
                    '100%': {
                        transform: 'translateY(-83.33%)',
                    },
                },
                'moveHorizontal': {
                    '0%': {
                        transform: 'translateX(-50%) translateY(-10%)',
                    },
                    '50%': {
                        transform: 'translateX(50%) translateY(10%)',
                    },
                    '100%': {
                        transform: 'translateX(-50%) translateY(-10%)',
                    },
                },
                'moveInCircle': {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '50%': {
                        transform: 'rotate(180deg)',
                    },
                    '100%': {
                        transform: 'rotate(360deg)',
                    },
                },
                'moveVertical': {
                    '0%': {
                        transform: 'translateY(-50%)',
                    },
                    '50%': {
                        transform: 'translateY(50%)',
                    },
                    '100%': {
                        transform: 'translateY(-50%)',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
                'text-rotate':
                    'text-rotate 12.5s cubic-bezier(0.83, 0, 0.12, 1) infinite',
                'first': 'moveVertical 30s ease infinite',
                'second': 'moveInCircle 20s reverse infinite',
                'third': 'moveInCircle 40s linear infinite',
                'fourth': 'moveHorizontal 40s ease infinite',
                'fifth': 'moveInCircle 20s ease infinite',
            },
        },
    },
    plugins: [require('tailwindcss-animate'), addVariablesForColors],
} satisfies Config;

export default config;
