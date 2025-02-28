import { useState, useRef, useEffect } from "react";
import { Search, Bell, File, Plus, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
  isContractFullscreen?: boolean; // Add new prop
}

export const Header = ({ showSearch, setShowSearch, isContractFullscreen }: HeaderProps) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const notifications = [
    {
      id: 1,
      title: "Уведомление о регистрации бизнеса",
      description: "Уважаемый (ая) уведомляем вас об успешном..",
      isNew: true,
      bgColor: "#D9D9D9"
    },
    {
      id: 2,
      title: "Уведомление об изменении в правилах..",
      description: "Уважаемый (ая) уведомляем вас об успешном..",
      isNew: true,
      bgColor: "#D9D9D9"
    },
    {
      id: 3,
      title: "Сообщение от НУК о регистрации логотипа в...",
      description: "Уважаемый (ая) уведомляем вас об успешном..",
      isNew: false,
      isRead: true,
      bgColor: "#D9D9D9"
    },
    {
      id: 4,
      title: "Успешная подача заявления в ЦОН..",
      description: "Уважаемый (ая) уведомляем вас об успешном..",
      isNew: false,
      isRead: true,
      bgColor: "#D9D9D9"
    },
    {
      id: 5,
      title: "Вы завершили регистрацию на платформе..",
      description: "Уважаемый (ая) уведомляем вас об успешном..",
      isNew: false,
      isRead: true,
      bgColor: "#D9D9D9"
    }
  ];

  const documents = [
    {
      id: 1,
      name: "Заявление.pdf",
      size: "245 KB"
    },
    {
      id: 2,
      name: "Разрешение на выставление.pdf",
      size: "1.2 MB"
    },
    {
      id: 3,
      name: "Заявление на участия.pdf",
      size: "890 KB"
    }
  ];

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <header className={cn(
      "h-[64px] w-full sticky top-0",  // Changed from fixed to sticky
      "transition-all duration-300 ease-in-out",
      "bg-white sm:bg-white/80 backdrop-blur-sm", // Semi-transparent background
      "border-b border-[#9898BF]/10",
      isContractFullscreen 
        ? "z-[5] opacity-30" 
        : "z-[40] opacity-100"
    )}>
      <div className="relative h-full flex items-center justify-between px-2 sm:px-[59px]">
        {/* Left side - User info */}
        <div className={cn(
          "flex items-center space-x-2 sm:space-x-8",
          "transition-all duration-500 ease-in-out",
          showSearch ? "opacity-0 pointer-events-none" : "ml-16 sm:ml-0"
        )}>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
              <User className="w-6 h-6 sm:w-8 sm:h-8 text-[#202295]" />
            </div>
            <span className="text-[#202295] font-medium text-sm sm:text-2xl hidden sm:inline">
              Иван Иванов
            </span>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search Input - Desktop fixes */}
          <div className={cn(
            "relative flex items-center",
            showSearch 
              ? "absolute left-16 right-16 top-1 sm:static sm:w-64" // Fixed desktop width
              : "w-10"
          )}>
            <div className={cn(
              "relative w-full",
              !showSearch && "w-10 h-10"
            )}>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder={showSearch ? "поиск" : ""}
                className={cn(
                  "absolute right-0",
                  "border-2 border-[#202295]",
                  "focus:outline-none focus:ring-0",
                  "transition-all duration-300 ease-in-out",
                  showSearch
                    ? "w-full h-9 sm:h-10 rounded-[10px] bg-white opacity-100 pl-3 pr-8 text-sm sm:text-base sm:-top-1" // Added top adjustment for desktop
                    : "w-10 h-10 rounded-full bg-transparent opacity-0 cursor-pointer"
                )}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => {
                  setIsInputFocused(false);
                  if (!searchInputRef.current?.value) {
                    setTimeout(() => setShowSearch(false), 200);
                  }
                }}
              />
              <button 
                className={cn(
                  "absolute flex items-center justify-center",
                  showSearch 
                    ? "right-2 top-[8px] sm:top-[6px] text-[#202295]" // Adjusted desktop button position
                    : "inset-0 bg-[#202295] rounded-full"
                )}
                onClick={() => setShowSearch(!showSearch)}
              >
                <Search className={cn(
                  "w-4 h-4 sm:w-5 sm:h-5",
                  !showSearch && "text-white"
                )} />
              </button>
            </div>
          </div>

          {/* Mobile Actions - Updated visibility */}
          <div className={cn(
            "flex items-center space-x-2 sm:space-x-4",
            showSearch && "opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto"
          )}>
            {/* Mobile Notifications */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full sm:hidden"
                >
                  <Bell className="w-5 h-5 text-[#202295]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Уведомления</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {notifications.map(notification => (
                    <div 
                      key={notification.id}
                      className="p-4 bg-gray-50 rounded-lg"
                    >
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{notification.description}</p>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile Documents */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full sm:hidden"
                >
                  <File className="w-5 h-5 text-[#202295]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Документы</SheetTitle>
                </SheetHeader>
                <div className="mt-4">
                  {documents.map(doc => (
                    <div 
                      key={doc.id}
                      className="py-3 border-b border-gray-100 last:border-0"
                    >
                      <h4 className="font-medium">{doc.name}</h4>
                      <p className="text-sm text-gray-500">{doc.size}</p>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* Add Button */}
            <Button 
              size="icon" 
              className={cn(
                "bg-[#202295] text-white hover:bg-[#202295]/90 rounded-full",
                "transition-all duration-300 ease-in-out",
                showSearch && "hidden sm:flex"
              )}
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Add invisible boundary divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-transparent pointer-events-none" />
    </header>
  );
};
