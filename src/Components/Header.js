import * as React from 'react';

import {
    Box,
    Button,
    Typography,
} from '@mui/material';

import {
    Add as AddIcon,
} from '@mui/icons-material';

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

            <Button
                variant="contained"
                startIcon={<AddIcon />}
            >
                Add
            </Button>
        </Box>
    );
}
