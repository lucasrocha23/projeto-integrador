import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary: '#0060B1',
        secondary: '#FF6500',
      },
      fontFamily:{
        'ubuntu': ['ubuntu', 'sans-serif']
      },
      animation:{
        entradaDireita: "dir 0.7s linear",
        entradaEsquerda: "esq 0.7s linear"
      },
      keyframes:{
        dir: {
          "0%":{
            opacity: 0,
            left: "20%"
          },
          "100%":{
            opacity:1,
            left: "0%"
          }
        },
        esq: {
          "0%":{
            opacity: 0,
            left: "-20%"
          },
          "100%":{
            opacity:1,
            left: "0%"
          }
        }
      }
    },
  },
  plugins: [],
}
