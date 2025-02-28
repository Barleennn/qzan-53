import { FileText, Maximize2, Minimize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatDocumentProps {
  title: string;
  content: string;
  isFullscreen?: boolean;
  onFullscreenChange?: (isFullscreen: boolean) => void;
}

export const ChatDocument = ({
  title,
  content,
  isFullscreen,
  onFullscreenChange
}: ChatDocumentProps) => {
  return (
    <div className={cn(
      "bg-white border border-gray-200 rounded-lg",
      "transition-all duration-300 ease-in-out"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-400" />
          <span className="text-sm font-medium">{title}</span>
        </div>
        {onFullscreenChange && (
          <button
            onClick={() => onFullscreenChange(!isFullscreen)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
};
