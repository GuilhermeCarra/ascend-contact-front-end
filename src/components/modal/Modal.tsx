import { FC, PropsWithChildren } from 'react';
import { Title } from '../typography/Title';

interface ModalProps {
  title: string;
  close: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, title, close }) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40">
      <div className="relative w-100 my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white min-w-40">
          <div className="flex justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
            <Title>{title}</Title>
            <span onClick={close} className="cursor-pointer bg-transparent text-black h-6 w-6 text-3xl block">𐄂</span>
          </div>
          <div className="flex flex-row items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}