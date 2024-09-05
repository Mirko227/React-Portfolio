import postcssPresetEnv from "postcss-preset-env"


export default {
    plugins: [
        postcssPresetEnv({ 
            stage : 2, browsers:  `> 0.5%, last 3 versions, Firefox ESR, not dead`
        }),     
    ]
}