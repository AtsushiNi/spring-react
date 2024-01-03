import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close'

export const SimpleModal = (props) => {
    const { onClose, onEntered, open, title, children } = props;

    const handleClose = () => onClose();

    return (
        <Dialog onClose={handleClose} onMouseEnter={onEntered} open={open}>
            <DialogTitle>{title}</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose} 
                sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500]
                }}
                >
                    <CloseIcon />
                </IconButton>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    );
}