import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: FC<InputProps> = ({ children, label, error, ...inputProps }) => {
  return <div className="flex flex-column gap-0.5">
    <label htmlFor={inputProps.name}>{label}</label>
    <input {...inputProps} id={inputProps.name} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none rounded-md"/>
    {error && <span className="text-xs text-rose-500">{error}</span>}
  </div>
}