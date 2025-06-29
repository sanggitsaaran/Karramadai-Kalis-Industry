// components/sections/Advantages.tsx
import { Zap, ShieldCheck, BatteryCharging } from "lucide-react";

const advantages = [
    {
        icon: <Zap className="w-8 h-8 text-primary"/>,
        title: "Unmatched Power",
        description: "Our motors are designed to cut through the toughest weeds without breaking a sweat."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary"/>,
        title: "Built to Last",
        description: "Using only premium materials, our weeders are an investment that pays off for years."
    },
    {
        icon: <BatteryCharging className="w-8 h-8 text-primary"/>,
        title: "Extended Battery Life",
        description: "Spend more time gardening and less time charging with our efficient battery technology."
    }
]

export default function Advantages() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-12">
                    The Kalis Power Weeder ,  Advantage
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {advantages.map((adv, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            {adv.icon}
                            <h3 className="text-xl font-bold">{adv.title}</h3>
                            <p className="text-gray-500">{adv.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}