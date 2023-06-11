import { ReactNode } from "react"

interface InputProps {
	label?: string;
	leftIcon?: ReactNode;
	icon?: ReactNode;
	errorMessage?: string;
}

export function Input({label, leftIcon, icon, errorMessage}: InputProps) {
	return (
		<div>
			{label ? <label>{label}</label> : null}
			{leftIcon}
			<input type="text" />
			{icon}

			{errorMessage ? <span>{errorMessage}</span> : null}
		</div>
	)
}