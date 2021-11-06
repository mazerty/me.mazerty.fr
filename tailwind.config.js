const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    purge: ["./index.html", "./src/**/*.jsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Ubuntu", ...defaultTheme.fontFamily.sans]
            }
        }
    }
}
