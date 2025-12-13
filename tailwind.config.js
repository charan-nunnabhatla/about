/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                background: 'var(--background)',
                surface: {
                    DEFAULT: 'var(--surface)',
                    hover: 'var(--surface-hover)',
                    elevated: 'var(--surface-elevated)',
                },
                text: {
                    primary: 'var(--text-primary)',
                    secondary: 'var(--text-secondary)',
                    muted: 'var(--text-muted)',
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    hover: 'var(--accent-hover)',
                    glow: 'var(--accent-glow)',
                },
                border: {
                    DEFAULT: 'var(--border)',
                    hover: 'var(--border-hover)',
                },
            },
            keyframes: {
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                pulse: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' }
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' }
                }
            },
            animation: {
                slideDown: 'slideDown 0.2s ease-out',
                fadeIn: 'fadeIn 0.3s ease-out',
                slideUp: 'slideUp 0.4s ease-out',
                pulse: 'pulse 2s ease-in-out infinite',
                shimmer: 'shimmer 2s linear infinite',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                'glow': '0 0 20px var(--accent-glow)',
                'glow-lg': '0 0 40px var(--accent-glow)',
                'card': '0 4px 20px rgba(0, 0, 0, 0.3)',
                'card-hover': '0 8px 30px rgba(0, 0, 0, 0.4)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-accent': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            },
        }
    },
    plugins: [require("tailwindcss-animate")],
};
