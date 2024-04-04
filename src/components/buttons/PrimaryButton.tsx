import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

export const PrimaryButton: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({ children, ...buttonProps }) => {
  return <button {...buttonProps} className="bg-black text-white p-2.5 rounded">{children}</button>;
}