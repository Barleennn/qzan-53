import { Header } from './Header'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  showSearch: boolean
  setShowSearch: (show: boolean) => void
  isContractFullscreen: boolean
}

export function Layout({ children, showSearch, setShowSearch, isContractFullscreen }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        isContractFullscreen={isContractFullscreen}
      />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
