import React, { FC, useCallback, useState, PropsWithChildren } from 'react';
import { Modal } from '../../components/modal/Modal';

interface Props {
  title: string;
}

export const useModal = ({ title }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderModal: FC<PropsWithChildren> = useCallback(({ children }) => (
    <React.Fragment>
      {isVisible && <Modal title={title} close={hide}>{children}</Modal>}
    </React.Fragment>
  ), [isVisible, title]);

  return {
    show,
    hide,
    RenderModal
  };
};
