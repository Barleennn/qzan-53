import { Bell, Plus, Search, User, FileText, MessageSquare, Download } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  const notifications = [
    {
      id: 1,
      title: "Уведомление о регистрации бизнеса",
      description: "Уважаемый (ая) уведомляем вас об успешном..",
      isNew: true,
      bgColor: "#D9D9D9"
    }, {
      id: 2,
      title: "Уведомление об изменении в правилах..",
      description: "Уважаемый (ая) уведомляем вас об успешном..",
      isNew: true,
      bgColor: "#D9D9D9"
    }, {
      id: 3,
      title: "Сообщение от НУК о регистрации логотипа в...",
      description: "Уважаемый (ая) уведомляем вас об успешном..",
      isNew: false,
      isRead: true,
      bgColor: "#D9D9D9"
    }, {
      id: 4,
      title: "Успешная подача заявления в ЦОН..",
      description: "Уважаемый (ая) уведомляем вас об успешном..",
      isNew: false,
      isRead: true,
      bgColor: "#D9D9D9"
    }, {
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
    }, {
      id: 2,
      name: "Разрешение на выставление.pdf",
      size: "1.2 MB"
    }, {
      id: 3,
      name: "Заявление на участия.pdf",
      size: "890 KB"
    }
  ];

  return (
    <header className="h-[64px] w-full border-b border-gray-100 bg-white relative">
      <div className="h-full flex items-center justify-between px-4 sm:px-[59px]">
        {/* Left side - User info */}
        <div className={cn(
          "flex items-center space-x-2 sm:space-x-8",
          "transition-all duration-500 ease-in-out",
          showSearch && "opacity-0 sm:opacity-100 translate-x-[-20px] sm:translate-x-0"
        )}>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center ml-8 sm:ml-0">
              <User className="w-6 h-6 sm:w-8 sm:h-8 text-[#202295]" />
            </div>
            <span className="text-[#202295] font-medium text-lg sm:text-2xl hidden sm:inline">Иван Иванов</span>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search with circular animation */}
          <div className={cn(
            "relative flex items-center",
            showSearch ? "w-full sm:w-auto" : "w-10 sm:w-10"
          )}>
            <div className={cn(
              "relative",
              showSearch ? "w-full sm:w-96" : "w-10 h-10"
            )}>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder={showSearch ? "поиск" : ""}
                className={cn(
                  "absolute right-0 px-4 py-2",
                  "border-2 border-[#202295]",
                  "focus:outline-none focus:ring-0",
                  "transition-all duration-500 ease-in-out",
                  showSearch
                    ? "w-full sm:w-96 h-10 rounded-[10px] bg-white opacity-100 pr-10"
                    : "w-10 h-10 rounded-full bg-transparent opacity-0 cursor-pointer"
                )}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => {
                  setIsInputFocused(false);
                }}
              />
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "absolute right-0 w-10 h-10 p-0",
                  "transition-all duration-300 ease-in-out",
                  showSearch ? "opacity-50 hover:opacity-100" : "opacity-100",
                  "hover:bg-transparent"
                )}
                onClick={() => {
                  setShowSearch(!showSearch);
                  if (!showSearch && searchInputRef.current) {
                    searchInputRef.current.focus();
                  }
                }}
              >
                <Search className={cn(
                  "w-5 h-5 text-[#202295]",
                  "transition-all duration-300 ease-in-out",
                  showSearch && "scale-90"
                )} />
              </Button>
              {showSearch && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-12 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    setShowSearch(false);
                    if (searchInputRef.current) {
                      searchInputRef.current.value = '';
                    }
                  }}
                >
                  Отмена
                </Button>
              )}
            </div>
          </div>
          
          {/* Other actions with animation */}
          <div className={cn(
            "flex items-center space-x-2 sm:space-x-4",
            "transition-all duration-300 ease-in-out",
            showSearch && "opacity-0 sm:opacity-100 scale-95 pointer-events-none sm:pointer-events-auto"
          )}>
            {/* Mobile only - Notifications */}
            <div className={cn(
              "block sm:hidden",
              "transition-all duration-300 ease-in-out",
              showSearch && "opacity-0 translate-x-4 pointer-events-none"
            )}>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-[400px] p-0">
                  <SheetHeader className="px-4 sm:px-6 py-4 border-b border-gray-100">
                    <SheetTitle className="text-base sm:text-lg font-medium flex items-center justify-between">
                      Уведомления
                    </SheetTitle>
                  </SheetHeader>
                  <div className="overflow-auto">
                    {notifications.map(notification => <div key={notification.id} className="flex items-start space-x-3 px-4 sm:px-6 py-4 transition-colors bg-[#f5f7fa] my-[19px]">
                        <MessageSquare className={`w-5 h-5 shrink-0 ${notification.isNew ? 'text-[#4338ca] fill-[#4338ca]' : 'text-gray-400 fill-gray-400'}`} />
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{notification.title}</p>
                          <p className="text-xs sm:text-sm text-gray-500 mt-0.5 truncate">{notification.description}</p>
                        </div>
                        {notification.isRead && <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400 shrink-0">прочитано</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>}
                      </div>)}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Mobile only - Documents */}
            <div className={cn(
              "block sm:hidden",
              "transition-all duration-300 ease-in-out",
              showSearch && "opacity-0 translate-x-4 pointer-events-none"
            )}>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <FileText className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-[400px] p-0">
                  <SheetHeader className="px-4 sm:px-6 py-4 border-b border-gray-100">
                    <SheetTitle className="text-base sm:text-lg font-semibold flex items-center justify-between">
                      Документы/Файлы
                      <button className="flex items-center text-sm font-normal text-[#4338ca] hover:text-[#3730a3] mx-[30px]">
                        <span className="mr-1 my-0 mx-0">Добавить</span>
                        <Plus className="w-4 h-4 mx-[3px]" />
                      </button>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="overflow-auto">
                    {documents.map((doc, index) => <div key={doc.id} className={`flex items-center justify-between px-4 sm:px-6 py-4 ${index !== documents.length - 1 ? 'border-b border-gray-100' : ''}`}>
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-[#4338ca]" />
                          <span className="text-sm sm:text-base text-gray-900">{doc.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                          </button>
                          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                            <Download className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>)}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Add button */}
            <Button size="icon" className={cn(
              "bg-[#202295] text-white hover:bg-[#202295]/90 rounded-full",
              "transition-all duration-300 ease-in-out",
              showSearch && "opacity-0 translate-x-4 pointer-events-none sm:opacity-100 sm:translate-x-0 sm:pointer-events-auto"
            )}>
              <Plus className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
