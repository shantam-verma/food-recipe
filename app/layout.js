import { Inter } from "next/font/google";
import theme from "@/styles/theme";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { AppProvider } from "@/provider/useContext";
import PropTypes from "prop-types";
import TanStackProvider from "@/provider/useTanStackQuery";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tasty Recipes",
  description: "Easy & Healthy Recipes",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackProvider>
          <AppProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}

RootLayout.prototype = {
  children: PropTypes.node,
};
