import { Bell, Plus, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="h-16">
      <div className="h-full flex items-center justify-between px-6">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#202295] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-[#202295] font-medium">Иван Иванов</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
            <div className="relative">
            <input
              type="text"
              placeholder="поиск"
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-[33px] w-64 focus:outline-none focus:ring-2 focus:ring-[#202295] focus:border-transparent"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="bg-[#202295] text-white p-2 rounded-full hover:bg-[#202295]/90">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
