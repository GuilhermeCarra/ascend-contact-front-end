import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

export const SecondaryButton: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({ children, ...buttonProps }) => {
  return <button {...buttonProps} className="bg-stone-400 text-white p-2.5 rounded">{children}</button>;
}