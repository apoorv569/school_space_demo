import * as React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Stack,
    IconButton,
} from '@mui/material';

import {
    Edit as EditIcon,
    Delete as DeleteIcon,
} from '@mui/icons-material';

import useFetch from '../Utils/useFetch';

export default function StudentTable() {
    const [isHovered, setIsHovered] = React.useState(false);
    const [hoveredRow, setHoveredRow] = React.useState(null);

    const {
        data: students,
        isLoading,
        error
    } = useFetch('http://localhost:8000/students');

    return (
        <TableContainer
            component={Paper}
            sx={{
                maxHeight: '800px',
            }}
        >
            {/* TODO: Make this output nicely instead of plain text */}
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}

            <Table
                stickyHeader
                sx={{
                    minWidth: 650,
                    '.MuiTableCell-head': {
                        backgroundColor: '#F1F4F8',
                    },
                }}
                aria-label="student table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">No.</TableCell>
                        <TableCell align="left">Stdent Name</TableCell>
                        <TableCell align="left">Class</TableCell>
                        <TableCell align="left">Result</TableCell>
                        <TableCell align="left">Score</TableCell>
                        <TableCell align="left">Grade</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students && students.map((student) => (
                        <TableRow
                            hover
                            key={student.id}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0
                                },
                            }}
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setHoveredRow(student.id);
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false);
                                setHoveredRow(null);
                            }}
                        >
                            <TableCell align="center">{student.id}</TableCell>
                            <TableCell align="left">{student.student_name}</TableCell>
                            <TableCell align="left">{student.standard}</TableCell>
                            <TableCell
                                align="left">
                                <Chip
                                    label={student.result}
                                    color={
                                        student.result === 'Passed' ?
                                            'success' : 'error'
                                    }
                                />
                            </TableCell>
                            <TableCell align="left">{student.score}</TableCell>
                            <TableCell
                                align="left"
                                sx={{
                                    color: student.grade === 'Excellent' ? 'green'
                                        : student.grade === 'Average' ? 'blue'
                                            : student.grade === 'Poor' ? 'red'
                                                : 'black',
                                }}
                            >
                                {student.grade}
                            </TableCell>
                            <TableCell align="right">
                                {isHovered && hoveredRow === student.id &&
                                    <Stack
                                        spacing={2}
                                        direction="row"
                                    >
                                        <IconButton
                                            sx={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        >
                                            <EditIcon />
                                        </IconButton>

                                        <IconButton
                                            sx={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Stack>
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
