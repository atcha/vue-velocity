module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        normal: '#2E5BFF',
        light: 'rgba(46,91,255,0.2)'
      },
      green: '#33AC2E',
      red: '#D63649',
      yellow: '#F7C137',
      blue: '#00C1D4',
      purple: '#8C54FF',
      gray: {
        '1': '#BFC5D2',
        '2': '#F4F6FC',
        '3': '#EEF3F5'
      },
      white: '#FFFFFF',
      black: {
        '1': '#2E384D',
        '2': '#69707F',
        '3': '#8798AD'
      }
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px'
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
