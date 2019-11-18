module.exports = {
    theme: {
        colors: {
            transparent: 'transparent',
            primary: {
                normal: '#2E5BFF',
                light: 'rgba(46,91,255,0.2)'
            },
            green: {
                normal: '#33AC2E',
                light: 'rgba(51, 172, 46, 0.2)'
            },
            red: {
                normal: '#D63649',
                light: 'rgba(214, 54, 73, 0.2)'
            },
            yellow: {
                normal: '#F7C137',
                light: 'rgba(247,193,55, 0.2)'
            },
            blue: {
                normal: '#00C1D4',
                light: 'rgba(0,193,212,0.15)'
            },
            purple: {
                normal: '#8C54FF',
                light: 'rgba(140,84,255,0.2)'
            },
            gray: {
                '0': '#C8C8C8',
                '1': '#BFC5D2',
                '2': '#F4F6FC',
                '3': '#EEF3F5'
            },
            white: '#FFFFFF',
            black: {
                '1': '#2E384D',
                '2': '#69707F',
                '3': '#8798AD',
                '4': '#808080'
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
        },
        inset: {
            '0': 0,
            '1': '1px',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '5': '5px',
            '8': '8px',
            '80': '80px',
            auto: 'auto'
        },
        boxShadow: {
            default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
            md: ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
            lg: ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
            xl: ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
            '2l': '0 2px 4px 0 rgba(0, 0, 0, .05)',
            inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
            outline: '0 0 0 3px rgba(66,153,225,0.5)',
            focus: '0 0 0 3px rgba(66,153,225,0.5)',
            'none': 'none'
        },
        extend: {
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem'
            }
        }
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active'],
        borderColor: ['responsive', 'hover', 'focus', 'active'],
        borderStyle: ['responsive', 'hover', 'focus'],
        borderWidth: ['responsive', 'hover', 'focus']
    },
    plugins: []
}
