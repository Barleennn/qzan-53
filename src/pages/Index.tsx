import { UserProfile } from "@/components/UserProfile";
import { RequestSection } from "@/components/requests/RequestSection";
import { MessageSquare, FileText, Plus, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { PageTransition } from '@/components/PageTransition';

const Index = () => {
  const notifications = [{
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
  }];

  const documents = [{
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
  }];

  return (
    <PageTransition>
      <div className="min-h-screen w-full bg-[#F5F7FA]">
        <div className="flex justify-center px-4 sm:px-[59px] py-6 sm:py-[40px]">
          <div className="w-full">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
              {/* Левая часть */}
              <div className="w-full md:w-[60%] xl:w-[65%] 2xl:w-[70%]">
                <div className="w-full">
                  <UserProfile />
                </div>
                <div className="w-full mt-6">
                  <RequestSection />
                </div>
              </div>

              {/* Правая часть - для планшетов и десктопов */}
              <div className="hidden md:block md:w-[40%] xl:w-[35%] 2xl:w-[30%] space-y-6">
                {/* Уведомления */}
                <div className="bg-white rounded-lg p-4 xl:p-6">
                  <div className="flex items-center justify-between mb-4 xl:mb-6">
                    <h2 className="text-base xl:text-lg font-semibold">Уведомления</h2>
                  </div>
                  <div className="space-y-3 xl:space-y-4">
                    {notifications.map(notification => (
                      <Link
                        key={notification.id}
                        to={`/notifications/${notification.id}`}
                        className="block"
                      >
                        <div className="flex items-start space-x-3 p-3 xl:p-4 bg-[#f5f7fa] rounded-lg hover:bg-[#f0f2f5] transition-colors">
                          <MessageSquare className={`w-5 h-5 shrink-0 ${notification.isNew ? 'text-[#4338ca] fill-[#4338ca]' : 'text-gray-400 fill-gray-400'}`} />
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-gray-900 text-xs xl:text-sm truncate">{notification.title}</p>
                            <p className="text-xs xl:text-sm text-gray-500 mt-0.5 truncate">{notification.description}</p>
                          </div>
                          {notification.isRead && (
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] xl:text-xs text-gray-400 shrink-0">прочитано</span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Документы */}
                <div className="bg-white rounded-lg p-4 xl:p-6">
                  <div className="flex items-center justify-between mb-4 xl:mb-6">
                    <h2 className="text-base xl:text-lg font-semibold">Документы/Файлы</h2>
                    <Link
                      to="/documents/new"
                      className="flex items-center text-xs xl:text-sm text-[#4338ca] hover:text-[#3730a3]"
                    >
                      <span className="mr-1">Добавить</span>
                      <Plus className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="space-y-3 xl:space-y-4">
                    {documents.map(doc => (
                      <Link
                        key={doc.id}
                        to={`/documents/${doc.id}`}
                        className="block"
                      >
                        <div className="flex items-center justify-between p-3 xl:p-4 bg-[#f5f7fa] rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-[#4338ca]" />
                            <span className="text-xs xl:text-sm text-gray-900">{doc.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="p-1.5 xl:p-2 hover:bg-gray-100 rounded-lg transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-400">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                              </svg>
                            </button>
                            <button className="p-1.5 xl:p-2 hover:bg-gray-100 rounded-lg transition-colors">
                              <Download className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
