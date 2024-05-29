import { Modal } from "@src/components";
import { ModalTemplates } from "@src/enums/ModalTemplates";
import { ReactNode, createContext, useState } from "react";

export const ModalContext = createContext({ show: (a: any) => { }, hide: () => { }, setTemplate: (a: ModalTemplates) => {}, template: '', modalContent: {} });

export function ModalProvider({ children }: { children: ReactNode }) {
    const [visible, setVisible] = useState(false);
    const [modalTemplate, setModalTemplate] = useState('imageCarousel');
    const [modalContent, setModalContent] = useState({});

    return (
        <ModalContext.Provider value={{
            show: (a) => {
              setModalContent(a);
              setVisible(true);
            },
            hide: () => setVisible(false),
            setTemplate: (template) => setModalTemplate(template),
            template: modalTemplate,
            modalContent,
          }}>
            <Modal open={visible} />
            {children}
          </ModalContext.Provider>
    );
  }
