import { Box, Modal as MUIModal } from "@mui/material";
import { ModalContext } from "@src/contexts/ModalContext";
import { ModalTemplates } from "@src/enums/ModalTemplates";
import { ReactElement, useContext, useMemo } from "react";
import { ImagesCarousel } from "./templates";

export function Modal({ open }: { open: boolean }) {
    const context = useContext(ModalContext);

    const modals: Record<string, ReactElement> = useMemo(() => {
        return {
          [ModalTemplates.ImagesCarousel]: <ImagesCarousel />,
        };
      }, []);

    return (
        <MUIModal
            open={open}
            onClose={context.hide}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box style={{
                backgroundColor: '#fafafa',
                width: '600px',
                height: '400px',
            }}>
                {modals[context.template]}
            </Box>
        </MUIModal>
    );
}
