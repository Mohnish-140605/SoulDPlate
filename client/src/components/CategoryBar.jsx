import { FaPepperHot, FaFish, FaIceCream, FaAppleAlt } from "react-icons/fa";

const categoriesData = [
	{ icon: <FaAppleAlt />, label: "Fruits & Veggies" },
	{ icon: <FaPepperHot />, label: "Masala & Dry Fruits" },
	{ icon: <FaFish />, label: "Frozen Food" },
	{ icon: <FaIceCream />, label: "Ice Creams" },
	// Add more as needed
];

export default function CategoryBar({ categories = categoriesData, onSelectCategory }) {
	return (
		<div className="flex gap-4 overflow-x-auto py-4">
			{categories.map((category, i) => (
				<button
					key={i}
					onClick={() => onSelectCategory(category)}
					className="flex flex-col items-center min-w-[90px] bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition"
				>
					<div className="text-3xl">{category.icon}</div>
					<div className="text-xs mt-1">{category.label}</div>
				</button>
			))}
		</div>
	);
}