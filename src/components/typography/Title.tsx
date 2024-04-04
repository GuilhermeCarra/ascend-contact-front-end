import { FC, PropsWithChildren } from 'react';

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h3 className="text-3xl font-semibold">{children}</h3>;
}