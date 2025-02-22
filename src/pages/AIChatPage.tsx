import { Header } from "@/components/Header";
import { PaperclipIcon, ArrowRightCircle, File, Key, CheckSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AIChatPage() {
  return (
    <div className="min-h-screen w-screen bg-[#F5F7FA] overflow-hidden">
      <div className="relative mx-auto max-w-[1920px] h-full">
        {/* Removed duplicate Sidebar provided by Layout */}
        {/* Main Content: margin adjusted via Layout */}
        <div className="flex-1 h-full flex flex-col">
          <Header />
          {/* Centered main area */}
          <div className="flex-1 flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-[814px]">
              <h1 className="text-[48px] font-semibold font-roboto mb-4 text-center">
                Как я могу вам помочь?
              </h1>
              <p className="text-[20px] font-light text-[#B3B3B3] text-center mb-24">
                ваш личный юридический помощник
              </p>
              {/* Suggestion Cards */}
              <div className="flex justify-center gap-6 mb-32 w-full">
                <Card className="w-[255px] h-[137px] bg-white rounded-[9px] p-4">
                  <File className="w-[25px] h-[25px] mb-6" />
                  <p className="text-[14px] leading-4 font-normal text-black">
                    "Напиши заявление в ЕГОВ для выдачи разрешения"
                  </p>
                </Card>
                <Card className="w-[255px] h-[137px] bg-white rounded-[9px] p-4">
                  <Key className="w-[25px] h-[25px] mb-6" />
                  <p className="text-[14px] leading-4 font-normal text-black">
                    "Составь официальный договор NDA для сотрудника компании"
                  </p>
                </Card>
                <Card className="w-[255px] h-[137px] bg-white rounded-[9px] p-4">
                  <CheckSquare className="w-[25px] h-[25px] mb-6" />
                  <p className="text-[14px] leading-4 font-normal text-black">
                    "Напиши список документов для подачи заявки в ЛДРК"
                  </p>
                </Card>
              </div>
              {/* Input Field */}
              <div className="w-full h-[56px] flex items-center bg-white rounded-[9px] px-3 mt-10 shadow-sm">
                <PaperclipIcon className="w-[28px] h-[28px] text-[#9898BF] ml-2" />
                <input
                  type="text"
                  placeholder="Составь договор NDA для сотрудника компании"
                  className="flex-1 h-full px-4 text-[16px] font-light text-[#9898BF] focus:outline-none"
                />
                <ArrowRightCircle className="w-[28px] h-[28px] text-[#9898BF] mr-2 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
