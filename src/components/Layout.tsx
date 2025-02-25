
import { useState, useEffect } from "react";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      if (isMobileView) {
        setIsMenuOpen(false);
      } else {
        // В десктопной версии меню всегда открыто по умолчанию
        setIsMenuOpen(true);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <div 
        className={cn(
          "flex-1 min-h-screen transition-all duration-300",
          isMenuOpen ? "md:ml-[300px] lg:ml-[361px]" : "ml-0",
        )}
      >
        <div className="w-full max-w-[1600px] mx-auto">
          <Header />
          <main className="w-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
