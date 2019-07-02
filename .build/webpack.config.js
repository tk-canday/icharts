module.exports = () => {
    return {
        entry: {
            reportWrap: './src/index.ts',
        },
        plugins: getPlugins(configEnv, config),
        module: {
            rules: getRules(configEnv, config),
        },
        resolve: {
            extensions: [' ', '.tsx', '.ts', '.js', '.json'], // ' '影响 sass 在 tsx 中的引入
            symlinks: false,
            modules: [
                path.resolve(__dirname, './../src'), //影响 tsx 中 css 的引入
                path.resolve(__dirname, './../node_modules'),
            ],
        },
        optimization: getOptimization(configEnv),
        stats: getStats(configEnv),
        parallelism: 200,
    };
};