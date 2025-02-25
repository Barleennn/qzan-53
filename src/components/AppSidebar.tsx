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
          "h-[45px] flex items-center px-5 cursor-pointer group border-l-4 border-transparent transition-all",
          !isMenuOpen && "px-2 justify-center",
          isActive 
            ? "bg-[#202295] border-white hover:bg-[#202295]" 
            : "hover:bg-gray-50 hover:border-l-4 hover:border-[#202295]"
        )}
        onClick={() => {
          isMobile && setIsMenuOpen(false);
          // Scroll to top on navigation
          window.scrollTo(0, 0);
        }}
      >
        <item.icon className={cn(
          "w-[20px] h-[20px] stroke-[2.5px] transition-colors",
          isActive 
            ? "text-white" 
            : "text-[#B3B3B3] group-hover:text-[#202295]"
        )} />
        <span className={cn(
          "ml-3 text-[16px] transition-all duration-300",
          !isMenuOpen && "opacity-0 w-0 ml-0",
          isActive 
            ? "text-white" 
            : "text-[#000000] group-hover:text-[#202295]"
        )}>
          {item.text}
        </span>
      </Link>
    );
  };

  const menuButton = (
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
  );

  return (
    <>
      {isMobile && !isMenuOpen && menuButton}
      
      {/* Overlay */}
      {isMobile && isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[45] transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <div className={cn(
        "h-full bg-white border-r border-gray-200 flex-shrink-0 fixed left-0 top-0",
        "transition-all duration-300 ease-in-out will-change-transform",
        "z-[50]", // Increased z-index to be above header
        isMenuOpen 
          ? "translate-x-0 w-[300px] sm:w-[361px]" 
          : "md:translate-x-0 -translate-x-full w-[60px]",
        isMobile && isMenuOpen && "w-[80%] max-w-[361px]"
      )}>
        {/* Render button inside sidebar only for desktop */}
        {!isMobile && menuButton}

        <div className={cn(
          "transition-all duration-300",
          !isMenuOpen && "opacity-0 md:opacity-100"  // Changed opacity transition
        )}>
          <div className="flex items-center px-4 sm:px-[30px] pt-8">
            <div className={cn("transition-opacity duration-300", !isMenuOpen && "opacity-0")}>
              <h1 className="text-3xl sm:text-[46px] font-bold mx-[77px]">Qzan</h1>
              <p className="text-[14px] sm:text-[16px] text-[#B3B3B3]">qzan</p>
            </div>
          </div>

          <nav className="mt-12">
            {menuItems.map((item, index) => <MenuItem key={index} item={item} />)}
          </nav>

          <div className={cn("mt-12", (isMobile || !isMenuOpen) && "hidden")}>
            <div className="flex items-center px-5 mb-4">
              <File className="w-[25px] h-[25px] text-[#000000]" />
              <span className="ml-3 text-[20px] font-semibold text-[#000000]">
                Документы/Файлы
              </span>
            </div>

            {documentItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.href} 
                className="h-[45px] flex items-center px-5 hover:bg-gray-50 cursor-pointer relative"
              >
                <span className="text-[17px] text-[#000000]">
                  {item.text}
                </span>
                <div className="absolute right-5 flex items-center space-x-2">
                  <Heart className="w-[18px] h-[18px] text-[#B3B3B3] hover:text-[#202295] transition-colors" />
                  <Download className="w-[18px] h-[18px] text-[#B3B3B3] hover:text-[#202295] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
