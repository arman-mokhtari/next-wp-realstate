import { Poppins, Aboreto } from "next/font/google";
import "./globals.css";
import { MainMenu } from "@/components/MainMenu";
import { getMenu } from "@/utils/getMenu";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-aboreto",
});
const Layout = async ({ children }) => {
  const data = await getMenu();
  console.log(data);
  return (
    <html lang="en" className={`${poppins.variable} ${aboreto.variable}`}>
      <body className="font-body">
        <MainMenu
          callToActionDestination={data.callToActionDestination}
          callToActionLabel={data.callToActionLabel}
          items={data.mainMenuItems}
        />
        {children}
      </body>
    </html>
  );
};

export default Layout;
