import { Heart, Download, ThumbsUp, ThumbsDown, Copy, Volume2, FileText, ArrowRightCircle, PaperclipIcon } from "lucide-react";

export default function TestChatPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="relative h-[60px] border-b border-gray-100 flex items-center">
        <span className="ml-[59px] text-[22px] leading-[26px] text-[#202295]">
          Тестовый чат
        </span>
      </div>

      {/* Main content */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 py-8">
          <div className="w-full max-w-[814px] mx-auto">
            {/* User Query */}
            <div className="mb-8">
              <div className="bg-[#E6EAF3] rounded-[9px] flex items-center px-4 py-3">
                <span className="text-[18px] text-black font-normal leading-[21px]">
                  Составь договор NDA для сотрудника компании
                </span>
              </div>
            </div>

            {/* AI Response Text */}
            <div className="mb-6">
              <p className="font-roboto text-[18px] leading-[21px] text-black">
                Вот стандартный договор NDA (соглашение о неразглашении) для сотрудника компании:
              </p>
            </div>

            {/* Document Container */}
            <div className="mb-6 p-6 border border-[#9898BF] shadow-[0px_7px_4px_rgba(0,0,0,0.05)] rounded-[9px]">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-[25px] h-[25px] text-[#9898BF]" />
                <span className="text-[18px] text-[#9898BF] leading-[21px]">Договор NDA</span>
              </div>
              <div className="pr-6">
                <p className="text-[18px] leading-[21px] text-black">
                  СОГЛАШЕНИЕ О НЕРАЗГЛАШЕНИИ (NDA)
                  г. ________________ "_" __________ 20 г.

                  1. СТОРОНЫ СОГЛАШЕНИЯ

                  Настоящее соглашение о неразглашении (далее — "Соглашение") заключается между:
                  1.1. Работодателем: ________________, в лице ________________, 
                  действующего на основании ________________, именуемым в дальнейшем "Компания";
                  1.2. Сотрудником: ________________, паспорт серия ____, 
                  номер ________, зарегистрированным по адресу: ________________, 
                  именуемым в дальнейшем "Сотрудник".
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mb-6 flex items-center gap-4">
              <Volume2 className="w-6 h-6 text-[#9898BF]" />
              <div className="flex items-center gap-[20px]">
                <Copy className="w-[21px] h-[21px] text-[#9898BF] cursor-pointer hover:text-[#202295]" />
                <ThumbsUp className="w-[21px] h-[21px] text-[#9898BF] cursor-pointer hover:text-[#202295]" />
                <ThumbsDown className="w-[21px] h-[21px] text-[#9898BF] cursor-pointer hover:text-[#202295]" />
                <Heart className="w-7 h-7 text-[#9898BF] cursor-pointer hover:text-[#202295] filter drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
                <Download className="w-7 h-7 text-[#9898BF] cursor-pointer hover:text-[#202295]" />
              </div>
            </div>

            {/* Response Message */}
            <div className="mb-6 font-roboto text-[18px] leading-[21px] text-black">
              Готово! Это стандартное соглашение о неразглашении (NDA) для сотрудника компании. 
              Если нужно внести изменения или добавить дополнительные условия, дай знать!
            </div>

            {/* Input Box */}
            <div className="h-[56px] bg-white rounded-[9px] flex items-center px-3 gap-3 shadow-sm">
              <PaperclipIcon className="w-7 h-7 text-[#B3B3B3]" />
              <span className="text-[16px] text-[#9898BF] flex-1">
                Составь договор NDA для сотрудника компании
              </span>
              <ArrowRightCircle className="w-7 h-7 text-[#B3B3B3]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
