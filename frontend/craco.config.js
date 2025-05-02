module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  scripts: {
    start: "craco start",
    build: "craco build",
    test: "craco test",
    eject: "react-scripts eject"
  },
}
