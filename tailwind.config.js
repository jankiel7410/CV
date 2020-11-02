module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'}
      },
      inset: {
        '1/2': '50%'
      }
    },
  },
  variants: {},
  plugins: [],
}
