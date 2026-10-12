import type { Config } from 'tailwindcss';
export default { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#090a0c', fog: '#a8abb2', lime: '#d7f36b' }, fontFamily: { sans: ['Arial', 'sans-serif'] } } }, plugins: [] } satisfies Config;
