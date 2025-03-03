import React from "react";

interface CardProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export const Card = ({ children, className, ...props }: CardProps) => {
	return (
		<div
			className={`border border-gray-200 overflow-hidden ${className}`}
			{...props}
		>
			{children}
		</div>
	);
};

export default Card;