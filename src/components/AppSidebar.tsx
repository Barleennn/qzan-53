import { useState, useEffect } from "react";
import { MessageSquare, User, Lock, Clock, CreditCard, File, Heart, Download, Plus, Bot, MessageCircle, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const menuItems = [{
  icon: MessageSquare,
  text: "Входящие",
  href: "/"
}, {
  icon: User,
  text: "Мой профиль",
  href: "/profile"
}, {
  icon: Lock,
  text: "Пароли",
  href: "/passwords"
}, {
  icon: Clock,
  text: "История",
  href: "/history"
}, {
  icon: CreditCard,
  text: "Подписки",
  href: "/subscriptions"
}, {
  icon: Bot,
  text: "AI Чат",
  href: "/ai-chat"
}, {
  icon: MessageCircle,
  text: "Тестовый чат",
  href: "/test-chat"
}];

const documentItems = [{
  text: "Договор на оказание услуг",
  href: "/documents/1"
}, {
  text: "Пользовательское соглашение",
  href: "/documents/2"
}, {
  text: "Политика конфиденциальности",
  href: "/documents/3"
}];

interface AppSidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  hideMenuButton?: boolean; // Add this prop
}

export function AppSidebar({
  isMenuOpen,
  setIsMenuOpen,
  hideMenuButton = false // Add default value
}: AppSidebarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const MenuItem = ({ item }) => {
    if (isMobile && !isMenuOpen) {
      return null;
    }
    
    const isActive = location.pathname === item.href;
    
    return (
      <Link 
        to={item.href} 
        className={cn(
          "h-12 flex items-center cursor-pointer group transition-all duration-200",
          "rounded-r-2xl border-l-[3px] border-transparent",
          "hover:bg-blue-50 hover:border-l-[3px] hover:border-[#202295]",
          !isMenuOpen && "justify-center px-2",
          isMenuOpen && "px-6",
          isActive && "bg-[#202295] border-white text-white rounded-r-2xl"
        )}
        onClick={() => {
          isMobile && setIsMenuOpen(false);
          window.scrollTo(0, 0);
        }}
      >
        <item.icon className={cn(
          "w-5 h-5 stroke-[2px] shrink-0",
          isActive 
            ? "text-white" 
            : "text-gray-400 group-hover:text-[#202295]"
        )} />
        
        {/* Fixed width wrapper for text to prevent layout shift */}
        <div className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isMenuOpen ? "w-[180px] ml-4" : "w-0",
        )}>
          <span className={cn(
            "font-medium whitespace-nowrap block",
            "text-[15px] leading-none",
            isActive 
              ? "text-white" 
              : "text-gray-600 group-hover:text-[#202295]"
          )}>
            {item.text}
          </span>
        </div>
      </Link>
    );
  };

  return (
    <>
      {isMobile && !isMenuOpen && (
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={cn(
            "flex items-center justify-center z-50 transition-opacity duration-300",
            isMobile ? "fixed left-4 top-5 z-[60]" : "absolute top-8 right-4 z-10 p-4 hover:bg-gray-50",
            hideMenuButton && isMobile && "opacity-0 pointer-events-none" // Changed this line to only affect mobile
          )}
        >
          <Menu className="w-6 h-6 text-[#B3B3B3]" />
        </button>
      )}
      
      {/* Overlay only for mobile */}
      {isMobile && isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[45] transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <div className={cn(
        "bg-white/95 backdrop-blur-sm border-r border-gray-100",
        "transition-all duration-300 ease-in-out will-change-transform",
        "shadow-[1px_0_5px_rgba(0,0,0,0.02)]",
        isMobile 
          ? "fixed left-0 top-0 h-full z-[50]" 
          : "relative min-h-screen",
        isMenuOpen 
          ? "w-[280px] sm:w-[300px]" 
          : "w-[70px]",
        isMobile && cn(
          isMenuOpen 
            ? "translate-x-0 w-[80%] max-w-[300px]"
            : "-translate-x-full"
        ),
        !isMobile && !isMenuOpen && "md:w-[70px]"
      )}>
        {!isMobile && (
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "absolute -right-3 top-8 z-10",
              "w-6 h-6 rounded-full bg-white",
              "flex items-center justify-center",
              "border border-gray-100 shadow-sm",
              "hover:bg-gray-50 transition-colors"
            )}
          >
            <Menu className="w-4 h-4 text-gray-400" />
          </button>
        )}

        <div className="h-full flex flex-col">
          <div className={cn(
            "px-6 pt-8 overflow-hidden",
            !isMenuOpen && "opacity-0"
          )}>
            <div className={cn(
              "transition-opacity duration-200",
              !isMenuOpen && "opacity-0"
            )}>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#202295] whitespace-nowrap">
                Qzan
              </h1>
              <p className="text-sm text-gray-400 mt-1 whitespace-nowrap">qzan.io</p>
            </div>
          </div>

          <nav className="mt-8 px-2 space-y-1">
            {menuItems.map((item, index) => 
              <MenuItem key={index} item={item} />
            )}
          </nav>

          {isMenuOpen && !isMobile && (
            <div className="mt-10 px-6 flex-1">
              <div className="flex items-center mb-4">
                <File className="w-5 h-5 text-gray-400" />
                <span className="ml-3 text-base font-medium text-gray-700 whitespace-nowrap">
                  Документы
                </span>
              </div>

              <div className="space-y-2">
                {documentItems.map((item, index) => (
                  <Link 
                    key={index} 
                    to={item.href}
                    className="group flex items-center h-10 px-3 rounded-lg hover:bg-blue-50"
                  >
                    <span className="text-sm text-gray-600 group-hover:text-[#202295] whitespace-nowrap truncate">
                      {item.text}
                    </span>
                    <div className="ml-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4 text-gray-400 hover:text-[#202295] shrink-0" />
                      <Download className="w-4 h-4 text-gray-400 hover:text-[#202295] shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
