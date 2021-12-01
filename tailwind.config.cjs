const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
    purge: ["./index.html", "./src/**/*.jsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
                specialelite: ["Special Elite", ...defaultTheme.fontFamily.sans]
            },
            colors: {
                gray: {
                    ...colors.blueGray,
                    702: "#313f53"
                }
            }
        }
    }
}
