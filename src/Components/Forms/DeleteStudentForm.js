import * as React from 'react';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    Stack,
    Typography,
} from '@mui/material/';

import {
    Delete as DeleteIcon,
} from '@mui/icons-material';

export default function DeleteStudentForm({ student }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton
                onClick={handleClickOpen}
                sx={{
                    width: 20,
                    height: 20,
                }}
            >
                <DeleteIcon />
            </IconButton>

            <Dialog open={open} onClose={handleClose}>

                <DialogTitle>Remove Student</DialogTitle>

                <DialogContent>

                    <Divider />

                    <Typography
                        sx={{
                            marginTop: 2,
                            marginBottom: 2,
                            fontWeight: 'bold',
                        }}
                    >
                        Are you sure you want to remove the current
                        student from the list?
                    </Typography>

                    <Stack
                        spacing={1}
                    >
                        <Typography
                            sx={{
                                color: "#7F878A",
                                fontSize: 12,
                            }}
                        >
                            STUDENT NAME
                        </Typography>
                        <Typography>
                            {student.student_name}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#7F878A",
                                fontSize: 12,
                            }}
                        >
                            CLASS
                        </Typography>
                        <Typography>
                            {student.standard}
                        </Typography>
                    </Stack>

                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant='outlined'
                    >
                        CANCEL
                    </Button>
                    <Button
                        onClick={handleClose}
                        variant='contained'
                        color='error'
                    >
                        REMOVE
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}
