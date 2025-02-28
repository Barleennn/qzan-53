import React, { useState, useEffect } from 'react';
import { Heart, Download, ThumbsUp, ThumbsDown, Copy, Volume2, FileText, ArrowRightCircle, PaperclipIcon, Maximize2, Minimize2, Edit, Save } from "lucide-react";
import { PageTransition } from '@/components/PageTransition';

interface TestChatPageProps {
  onFullscreenChange?: (isFullscreen: boolean) => void;
}

export default function TestChatPage({ onFullscreenChange }: TestChatPageProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [contractText, setContractText] = useState(`СОГЛАШЕНИЕ О НЕРАЗГЛАШЕНИИ (NDA)

г. ________________ "_" __________ 20 г.

1. СТОРОНЫ СОГЛАШЕНИЯ
Настоящее соглашение о неразглашении (далее — "Соглашение") заключается между:

1.1. Работодателем: ________________, в лице ________________,
действующего на основании ________________, именуемым в дальнейшем "Компания";

1.2. Сотрудником: ________________, паспорт серия ____,
номер ________, зарегистрированным по адресу: ________________,
именуемым в дальнейшем "Сотрудник".`);
  const [originalText, setOriginalText] = useState('');
  const [editedText, setEditedText] = useState('');

  // Handle smooth transitions
  useEffect(() => {
    if (isFullscreen) {
      // Delay sidebar appearance for main content to shift
      setTimeout(() => setSidebarVisible(true), 50);
    } else {
      setSidebarVisible(false);
    }
  }, [isFullscreen]);

  useEffect(() => {
    if (onFullscreenChange) {
      onFullscreenChange(isFullscreen);
    }
  }, [isFullscreen, onFullscreenChange]);

  // Add effect to store original text when entering edit mode
  useEffect(() => {
    if (isEditing) {
      setOriginalText(contractText);
      setEditedText(contractText); // Store initial text for editing
    } else {
      // Only restore original text if we're exiting edit mode
      setContractText(originalText || contractText);
    }
  }, [isEditing]);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
    } else {
      setSidebarVisible(false);
      setTimeout(() => setIsFullscreen(false), 300); // Match transition duration
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setEditedText(newText);

    // Only replace underscores when user types in that specific area
    const sections = originalText.split(/_{2,}/);
    let result = originalText;

    sections.forEach((section, index) => {
      if (index < sections.length - 1) {
        const startPos = result.indexOf('_'.repeat(2), result.indexOf(section) + section.length);
        const endPos = result.indexOf(sections[index + 1], startPos);

        // Check if user has typed something in this gap
        const userInput = newText.slice(
          newText.indexOf(section) + section.length,
          newText.indexOf(sections[index + 1])
        ).trim();

        if (userInput && userInput !== '_'.repeat(2)) {
          result = result.slice(0, startPos) + userInput + result.slice(endPos);
        }
      }
    });

    setContractText(result);
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col">
        {/* Main content wrapper with smooth transition */}
        <div className={`flex-1 transition-all duration-300 ease-in-out ${isFullscreen ? 'pr-[50vw]' : ''}`}>
          <div className={`max-w-[1440px] mx-auto px-4 py-8 transition-all duration-300 ease-in-out ${isFullscreen ? 'opacity-50' : 'opacity-100'}`}>
            <div className="w-full max-w-[814px] mx-auto">
              {/* User Query */}
              <div className="mb-8 flex justify-end">
                <div className="bg-[#E6EAF3] rounded-[9px] flex items-center px-4 py-3 w-fit">
                  <span className="text-[18px] text-black font-normal leading-[20px]">
                    Составь договор NDA для сотрудника компании
                  </span>
                </div>
              </div>

              {/* AI Response Text */}
              <div className="mt-8 mb-6">
                <p className="font-roboto text-[18px] leading-[21px] text-black">
                  Вот стандартный договор NDA (соглашение о неразглашении) для сотрудника компании:
                </p>
              </div>

              {/* Document Container - Only show in normal mode */}
              {!isFullscreen && (
                <div className="w-[814px] rounded-[9px] p-6 bg-white border border-[#9898BF] shadow-[0px_7px_4px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-[25px] h-[25px] text-[#9898BF]" />
                      <span className="text-[18px] text-[#9898BF] leading-[21px]">Договор NDA</span>
                    </div>
                    <button onClick={toggleFullscreen} className="text-[#9898BF] hover:text-[#202295] transition-colors duration-200">
                      {isFullscreen ? <Minimize2 className="w-[25px] h-[25px]" /> : <Maximize2 className="w-[25px] h-[25px]" />}
                    </button>
                  </div>
                  <div className="pr-6">
                    <div className="text-[18px] leading-[21px] text-black space-y-4 text-left">
                      <div className="mb-4">СОГЛАШЕНИЕ О НЕРАЗГЛАШЕНИИ (NDA)</div>
                      <div className="mb-4">г. ________________ "_" __________ 20 г.</div>

                      <div className="mb-4">1. СТОРОНЫ СОГЛАШЕНИЯ</div>
                      <div className="mb-4">Настоящее соглашение о неразглашении (далее — "Соглашение") заключается между:</div>

                      <div className="mb-4">1.1. Работодателем: ________________, в лице ________________, действующего на основании ________________, именуемым в дальнейшем "Компания";</div>

                      <div className="mb-4">1.2. Сотрудником: ________________, паспорт серия ____, номер ________, зарегистрированным по адресу: ________________, именуемым в дальнейшем "Сотрудник".</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons with adaptive positioning */}
              <div className={`mt-2 mb-6 flex items-center gap-4 transition-all duration-300 ${isFullscreen ? 'opacity-50 pointer-events-none' : ''}`}>
                <Volume2 className="w-4 h-4 text-[#9898BF] stroke-[1.5]" />
                <div className="flex items-center gap-[16px]">
                  <Copy className="w-4 h-4 text-[#9898BF] cursor-pointer hover:text-[#202295] stroke-[1.5]" />
                  <ThumbsUp className="w-4 h-4 text-[#9898BF] cursor-pointer hover:text-[#202295] stroke-[1.5]" />
                  <ThumbsDown className="w-4 h-4 text-[#9898BF] cursor-pointer hover:text-[#202295] stroke-[1.5]" />
                  <Heart className="w-4 h-4 text-[#9898BF] cursor-pointer hover:text-[#202295] stroke-[1.5]" />
                  <Download className="w-4 h-4 text-[#9898BF] cursor-pointer hover:text-[#202295] stroke-[1.5]" />
                </div>
              </div>

              {/* Response Message with adaptive visibility */}
              <div className={`mb-6 font-roboto text-[18px] leading-[21px] text-black text-left transition-opacity duration-300 ${isFullscreen ? 'opacity-50' : ''}`}>
                Готово! Это стандартное соглашение о неразглашении (NDA) для сотрудника компании. Если нужно внести изменения или добавить дополнительные условия, дай знать!
              </div>
            </div>
          </div>
        </div>

        {/* Input Box - Now part of the document flow */}
        <div className={`transition-all duration-300 ease-in-out flex justify-center mb-8 px-4 ${isFullscreen ? 'pr-[50vw] opacity-50' : 'opacity-100'}`}>
          <div className="w-[814px] h-[56px] flex items-center rounded-[9px] px-3 bg-white/80 backdrop-blur-sm shadow-lg border border-[#9898BF] hover:bg-white transition-all duration-200">
            <PaperclipIcon className="w-[28px] h-[28px] text-[#202295] ml-2" />
            <input type="text" placeholder="Составь договор NDA для сотрудника компании" className="flex-1 h-full px-4 text-[16px] font-light text-[#9898BF] focus:outline-none font-roboto bg-transparent" />
            <ArrowRightCircle className="w-[28px] h-[28px] text-[#202295] mr-2 cursor-pointer hover:scale-105 transition-transform" />
          </div>
        </div>

        {/* Fullscreen Sidebar with smooth animation */}
        {isFullscreen && (
          <div className={`fixed top-0 right-0 w-[50vw] h-screen bg-white border-l border-[#9898BF] shadow-lg transition-all duration-300 ease-in-out z-[100] animate-expand-sidebar origin-right ${isSidebarVisible ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="h-full flex flex-col relative animate-fade-in">
              {/* Action buttons */}
              <div className="absolute top-4 right-4 z-[100] flex items-center gap-4">
                {isEditing ? (
                  <button onClick={handleSave} className="text-[#9898BF] hover:text-[#202295] transition-colors duration-200 flex items-center gap-2 border border-[#9898BF] rounded-md px-3 py-1 bg-white shadow-md">
                    <Save className="w-5 h-5" />
                    <span>Сохранить</span>
                  </button>
                ) : (
                  <button onClick={handleEdit} className="text-[#9898BF] hover:text-[#202295] transition-colors duration-200 flex items-center gap-2 border border-[#9898BF] rounded-md px-3 py-1 bg-white shadow-md">
                    <Edit className="w-5 h-5" />
                    <span>Редактировать</span>
                  </button>
                )}
                <button onClick={toggleFullscreen} className="text-[#9898BF] hover:text-[#202295] transition-colors duration-200 flex items-center gap-2 bg-white border border-[#9898BF] rounded-md px-3 py-1 shadow-md">
                  <Minimize2 className="w-5 h-5" />
                  <span>Закрыть</span>
                </button>
              </div>

              {/* Content area with smooth animation */}
              <div className="flex-1 p-6 pt-16 overflow-auto animate-scale-in">
                {isEditing ? (
                  <div className="h-full animate-expand-editor origin-top">
                    <textarea value={editedText} onChange={handleTextChange} onBlur={handleSave} className="w-full h-[calc(100vh-120px)] p-4 text-[18px] leading-[21px] text-black border border-[#9898BF] rounded-md focus:outline-none focus:border-[#202295] resize-none font-roboto transition-all duration-300 ease-in-out bg-white shadow-lg" autoFocus />
                  </div>
                ) : (
                  <div className="min-h-[calc(100vh-120px)] text-[18px] leading-[21px] text-black space-y-4 text-left whitespace-pre-wrap transition-all duration-300 ease-in-out">
                    {contractText}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Add an overlay when fullscreen is active */}
        {isFullscreen && <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-[90]" />}
      </div>
    </PageTransition>
  );
}