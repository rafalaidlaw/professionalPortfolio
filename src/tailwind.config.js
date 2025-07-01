/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      fontFamily: {
        Monoton: ["Monoton", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Caprasimo: ["Caprasimo", "sans-serif"],
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },

        fadeLight: {
          from: { opacity: 0.5 },
          to: { opacity: 1 },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": {
            scale: "1",
            opacity: "1",
          },
          "50%": {
            scale: ".9",
            opacity: "1",
          },
        },
        dance: {
          "0%": {
            opacity: ".1",
          },
          "100%": {
            opacity: "1",
          },
        },
        box: {
          "0%": {
            scale: ".95",
            opacity: ".9",
          },
          "100%": {
            scale: "1",
            opacity: "1",
          },
        },
        box1: {
          "0%": {
            scale: ".85",
            opacity: ".5",
          },
          "100%": {
            scale: "1",
            opacity: "1",
          },
        },
        box2: {
          "0%": {
            scale: "1",
          },
          "50%": {
            scale: "2",
          },
          "70%": {
            scale: "2",
          },
          "100%": {
            scale: "1",
          },
        },
        box3: {
          "0%": {
            scale: "1",
          },
          "5%": {
            scale: "1.15",
          },
          "80%": {
            scale: "1.15",
          },
          "100%": {
            scale: "1",
          },
        },
        box4: {
          "0%": {
            scale: "1",
          },
          "5%": {
            scale: "1.35",
          },
          "70%": {
            scale: "1.35",
          },
          "100%": {
            scale: "1",
          },
        },
        slide: {
          "0%": {
            transform: "translateY(-25%)",
          },
          "0%": {
            transform: "translateY(100%)",
          },
        },
        scaleUpDown: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(3)' },
          '90%': { transform: 'scale(3)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        box: "box 2s ease-in-out",
        box1: "box1 1s ease-in-out",
        box2: "box2 20s ease-in-out infinite",
        box3: "box3 20s ease-in-out infinite",
        box4: "box4 20s ease-in-out infinite",
        slide: "slide .5s ease-in-out ",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        dance1: "dance 4s ease-in-out ",
        dance2: "dance 2.9s ease-in-out ",
        dance3: "dance 4.1s ease-in-out ",
        dance4: "dance 3.8s ease-in-out ",
        dance5: "dance 4.2s ease-in-out ",
        dance6: "dance 2.7s ease-in-out ",
        dance7: "dance 4.3s ease-in-out ",
        dance8: "dance 3.6s ease-in-out ",
        dance9: "dance 4.4s ease-in-out ",
        dance10: "dance 2.6s ease-in-out ",
        dance11: "dance 4.5s ease-in-out ",
        dance12: "dance 4.6s ease-in-out ",
        typewriter: "typewriter 1.2s steps(163) forwards",
        fade1: "fadeIn .7s ease-in-out",
        fade2: "fadeIn 1s ease-in-out",
        fade3: "fadeIn 1.2s ease-in-out",
        fade: "fadeIn 1.6s ease-in-out",
        fade5: "fadeLight .5s ease-in-out",
        fade6: "fadeIn 10s ease-in-out",
        fadeOut: "fadeOut 2s ease-in-out infinite",
        scaleUpDown: 'scaleUpDown 5s cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },
  plugins: [],
};
