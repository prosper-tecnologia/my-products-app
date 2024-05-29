import { ModalContext } from '@src/contexts';
import { useContext } from 'react';

export const useModal = () => {
    const context = useContext(ModalContext);

    return { ...context };
};
