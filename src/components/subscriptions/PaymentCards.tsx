import { Plus } from "lucide-react";

export function PaymentCards() {
  return (
    <div className="relative bg-[#202295] rounded-lg p-4 w-full md:max-h-60">
      <h3 className="text-white font-roboto font-semibold text-base sm:text-lg mb-4">
        Платежные карты
      </h3>
      <div className="space-y-4">
        {/* MasterCard */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8">
            <img
              src="https://www.mastercard.kz/content/dam/public/mastercardcom/kz/ru/homepage/icons/mastercard-logo-52.svg"
              alt="MasterCard"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="text-white">
            <div className="font-roboto font-medium text-sm sm:text-base truncate">
              MC •••• 6373
            </div>
            <div className="font-roboto text-xs sm:text-sm text-white/80">
              04/25
            </div>
          </div>
        </div>
        {/* Visa */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8">
            <img
              src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png"
              alt="Visa"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="text-white">
            <div className="font-roboto font-medium text-sm sm:text-base truncate">
              VISA •••• 3354
            </div>
            <div className="font-roboto text-xs sm:text-sm text-white/80">
              09/29
            </div>
          </div>
        </div>
      </div>
      <button className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full p-1 transition-colors">
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
