import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import { IRootLayoutProps } from "@/Types/Types";
import { ThemeProvider } from "@mui/material/styles";
import theme from "/theme";
import { SearchBoxContextProvider } from "@/ContextApi/SearchBoxContext";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <SearchBoxContextProvider>{children}</SearchBoxContextProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
