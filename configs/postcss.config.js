module.exports = {
    plugins: {
        /* removes the nasty error on the page upon initial load, that then needs to be X 'd out. */
        // 'postcss-preset-env': {
        //     features: {
        //         'color-adjust': false
        //     }
        // },
        'cssnano': {
            preset: ['default', {
                discardUnused: false // Prevents optimizations that might include color-adjust
            }]
        }
    }
};