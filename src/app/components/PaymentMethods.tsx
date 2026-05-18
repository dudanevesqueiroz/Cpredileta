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
    null
  );
}
