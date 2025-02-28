import { cn } from '@/lib/utils';

interface ChatMessageProps {
  text: string;
  align: 'left' | 'right';
}

export const ChatMessage = ({ text, align }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex",
      align === 'right' ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3",
        align === 'right' 
          ? "bg-[#202295] text-white" 
          : "bg-gray-100 text-gray-900"
      )}>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};
