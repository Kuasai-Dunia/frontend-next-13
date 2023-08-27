// Next
import type { Metadata } from "next";

// Global Styles
import "@/assets/styles/sass/_index.scss";

// Redux Provider
import ReduxProvider from "@/plugins/redux/provider";

export const metadata: Metadata = {
  title: "POSME",
  description: "Generated by create next app",
};

// Interfaces
interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => (
  <html lang="en">
    <body>
      <ReduxProvider>{children}</ReduxProvider>
    </body>
  </html>
);

export default RootLayout;
