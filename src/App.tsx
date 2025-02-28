import { useState } from 'react'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import Index from "./pages/Index"
import SubscriptionsPage from "./pages/SubscriptionsPage"
import AIChatPage from "./pages/AIChatPage"
import TestChatPage from "./pages/TestChatPage"
import NotFound from "./pages/NotFound"
import "./App.css"
import { Layout } from "./components/Layout"
import { Header } from './components/Header'
import { AppSidebar } from './components/AppSidebar'

const queryClient = new QueryClient()

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContractFullscreen, setIsContractFullscreen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const location = useLocation()

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          isContractFullscreen={isContractFullscreen}
        >
          <div className="flex w-full">
            <AppSidebar 
              isMenuOpen={isMenuOpen} 
              setIsMenuOpen={setIsMenuOpen} 
              hideMenuButton={isContractFullscreen}
            />
            <div className="flex-1 transition-all duration-300 overflow-hidden">
              <Toaster />
              <Sonner />
              <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Index />} />
                  <Route path="/subscriptions" element={<SubscriptionsPage />} />
                  <Route path="/ai-chat" element={<AIChatPage />} />
                  <Route path="/test-chat" element={<TestChatPage onFullscreenChange={setIsContractFullscreen} />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </div>
          </div>
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
