import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "sonner";
import FloatingShapes from "@/components/ui/floating-shapes";


const inter = Inter( {subset: ["latin"]} );

export const metadata = {
  title: "Edit-pro",
  description: "AI Image Editor ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          > 
            {/* <Headers/> */}
            <main className="bg-slate-900 min-h-[2000px] text-white overflow-x-hidden" >

              <FloatingShapes/>
              <Toaster richColors />
              {children}
              </main>
            
          </ThemeProvider>
        
      </body>
    </html>
  );
}
