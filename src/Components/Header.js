import * as React from 'react';

import {
    Box,
    Typography,
} from '@mui/material';

import AddStudentForm from './Forms/AddStudentForm';

export default function Header() {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            padding={1}
            paddingLeft={2}
        >
            <Typography
                variant="h6"
                sx={{
                    marginLeft: 2,
                    flex: 1
                }}
            >
                Students
            </Typography>

            <AddStudentForm />
        </Box>
    );
}
