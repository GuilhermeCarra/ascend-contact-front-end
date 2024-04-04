import { FC } from 'react';

export const Spinner: FC = () => {
  return <span className="text-5xl absolute top-1/2 left-1/2 animate-spin font-semibold z-50">◡</span>;
}