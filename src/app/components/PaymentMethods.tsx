import { CreditCard, Smartphone, Building2, Send } from "lucide-react";

interface PaymentMethod {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
}

const paymentMethods: PaymentMethod[] = [
  { name: "Visa", icon: CreditCard, bgColor: "bg-blue-600" },
  { name: "Mastercard", icon: CreditCard, bgColor: "bg-red-600" },
  { name: "Multibanco", icon: Building2, bgColor: "bg-green-700" },
  { name: "MB Way", icon: Smartphone, bgColor: "bg-blue-500" },
  { name: "PayPal", icon: Send, bgColor: "bg-blue-400" },
  { name: "Transferência", icon: Building2, bgColor: "bg-gray-700" }
];

export default function PaymentMethods() {
  return (
    <div className="border-t border-gray-800 pt-8 mt-8">
      <h4 className="text-white font-light mb-6 text-center flex items-center justify-center gap-2">
        <CreditCard className="w-5 h-5 text-[#2934b7]" />
        Métodos de Pagamento Aceites
      </h4>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 max-w-5xl mx-auto">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-3 md:p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-all hover:scale-105"
          >
            <div className={`w-14 h-14 md:w-16 md:h-16 ${method.bgColor} rounded-lg flex items-center justify-center mb-2 shadow-lg`}>
              <method.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <span className="text-xs text-gray-400 font-light text-center mt-1">
              {method.name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <p className="text-xs text-gray-500 font-light">
          Pagamentos seguros e encriptados
        </p>
      </div>
    </div>
  );
}
