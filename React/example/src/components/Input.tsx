import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react"

interface RootProps {
	children: ReactNode;
}

export function Root({ children }: RootProps) {
	return (
		<div>
			{children}
		</div>
	)
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	title: string;
}

export function Label(props: LabelProps) {
	return (
		<label {...props}>{props.title}</label>
	)
}

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export function FormField(props: FormFieldProps) {
	return (
		<input {...props} />
	)
}

interface IconProps {
	children: ReactNode;
}

export function Icon({ children }: IconProps) {
	return (
		<span>
			{children}
		</span>
	)
}

interface ErrorMessageProps {
	message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
	return (
		<span>{message}</span>
	)
}