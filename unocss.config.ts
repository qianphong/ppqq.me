import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetIcons()],
  shortcuts: [
    {
      'icon-btn':
        'text-xl cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 dark:hover:text-white disabled:pointer-events-none',
    },
  ],
  theme: {
    colors: {
      primary: 'rgba(79, 192, 141, 1)',
    },
  },
})
