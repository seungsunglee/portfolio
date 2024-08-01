"use client"
import { Roboto } from "next/font/google"
import { createTheme, responsiveFontSizes } from "@mui/material/styles"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

let theme = createTheme({
  palette: {
    mode: "dark",
    gradient: {
      main: "linear-gradient(90deg, #FF0000, #FFBA00)",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

theme = responsiveFontSizes(theme)

export default theme
