'use strict';

exports.decorateConfig = config => {
    return Object.assign({}, config, {
        backgroundColor: '#161219',
        foregroundColor: '#fff',
        selectionColor: 'rgba(242,136,169,0.8)',
        borderColor: '#222430',
        
        cursorColor: 'rgba(242,136,169,0.8)',
        cursorAccentColor: '#333',
        
        colors: {
            black: '#1d2c47',
            red: '#d2275a',
            green: '#8752ba',
            yellow: '#e15581',
            blue: '#1e59aa',
            magenta: '#f984ef',
            cyan: '#4b76b8',
            white: '#e95986',
            lightBlack: '#1d2c47',
            lightRed: '#ff2f6d',
            lightGreen: '#b66efb',
            lightYellow: '#fb5f90',
            lightBlue: '#2c84fc',
            lightMagenta: '#b56efa',
            lightCyan: '#08e8de',
            lightWhite: '#fb89ad'
        }
    });
};