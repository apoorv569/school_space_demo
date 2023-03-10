import * as React from 'react';

import {
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    IconButton,
    Stack,
    TextField,
    Typography,
} from '@mui/material/';

import {
    Add as AddIcon,
    Edit as EditIcon,
} from '@mui/icons-material';

export default function StudentForm({ formTitle, student = {}, isEditMode = false }) {
    const [open, setOpen] = React.useState(false);

    const [studentName, setStudentName] = React.useState(student.student_name || '');
    const [classStd, setClassStd] = React.useState(student.standard || '');
    const [score, setScore] = React.useState(student.score || '');
    const [result, setResult] = React.useState(student.result || '');
    const [grade, setGrade] = React.useState(student.grade || '');

    const [studentNameHelperText, setStudentNameHelperText] = React.useState('Required');
    const [classStdHelperText, setClassStdHelperText] = React.useState('Required');
    const [scoreHelperText, setScoreHelperText] = React.useState('Required');

    const [studentNameError, setStudentNameError] = React.useState(false);
    const [classStdError, setClassStdError] = React.useState(false);
    const [scoreError, setScoreError] = React.useState(false);

    const getResultAndGrade = (score) => {
        let result, grade;

        if (score >= 0 && score <= 30) {
            result = "Failed";
            grade = "Poor";
        } else if (score >= 31 && score <= 75) {
            result = "Passed";
            grade = "Average";
        } else if (score >= 76 && score <= 100) {
            result = "Passed";
            grade = "Excellent";
        } else {
            result = "Invalid score";
            grade = "N/A";
        }

        return { result, grade };
    };

    const handleScoreChange = (event) => {
        const scoreValue = event.target.value;

        if (scoreValue === "") {
            setScore("");
            setScoreError(false);
            setScoreHelperText("Required");
        } else if (scoreValue >= 0 && scoreValue <= 100) {
            setScore(scoreValue);
            setScoreError(false);
            setScoreHelperText("");
        } else {
            setScore("");
            setScoreError(true);
            setScoreHelperText("Please input values between 0 & 100");
        }

        // Call getResultAndGrade function and update result and grade states
        const { result: newResult, grade: newGrade } = getResultAndGrade(scoreValue);
        setResult(newResult);
        setGrade(newGrade);
    };

    const handleClassStdChange = (event) => {
        const classStdValue = event.target.value;

        if (classStdValue === "") {
            setClassStd("");
            setClassStdError(false);
            setClassStdHelperText("Required");
        } else if (classStdValue >= 0 && classStdValue <= 12) {
            setClassStd(classStdValue);
            setClassStdError(false);
            setClassStdHelperText("");
        } else {
            setClassStd("");
            setClassStdError(true);
            setClassStdHelperText("Please input values between 0 & 12");
        }
    };

    const handleStudentNameChange = (event) => {
        const studentNameValue = event.target.value;

        if (studentNameValue === "") {
            setStudentName("");
            setStudentNameError(true);
            setStudentNameHelperText("Required");
        } else {
            setStudentName(studentNameValue);
            setStudentNameError(false);
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {isEditMode ? (
                <IconButton
                    onClick={handleClickOpen}
                    sx={{
                        width: 20,
                        height: 20,
                    }}
                >
                    <EditIcon />
                </IconButton>
            ) : (
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleClickOpen}
                >
                    Add
                </Button>
            )}

            <Dialog open={open} onClose={handleClose}>

                <DialogTitle>{formTitle}</DialogTitle>

                <DialogContent>

                    <Divider />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="STUDENT NAME"
                        type="text"
                        fullWidth
                        variant="outlined"
                        required
                        value={studentName}
                        onChange={handleStudentNameChange}
                        helperText={studentNameHelperText}
                        error={studentNameError}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="class"
                        label="CLASS"
                        type="number"
                        fullWidth
                        variant="outlined"
                        required
                        value={parseInt(classStd, 10)}
                        onChange={handleClassStdChange}
                        inputProps={{ min: 0, max: 12 }}
                        helperText={classStdHelperText}
                        error={classStdError}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="score"
                        label="SCORE"
                        type="number"
                        fullWidth
                        variant="outlined"
                        required
                        value={parseInt(score.split('/')[0], 10)}
                        onChange={handleScoreChange}
                        inputProps={{ min: 0, max: 100 }}
                        helperText={scoreHelperText}
                        error={scoreError}
                    />
                    <Stack spacing={1}>
                        <Typography
                            sx={{
                                marginTop: 2,
                            }}
                        >
                            RESULT
                        </Typography>
                        <Typography>
                            {result &&
                                score !== "" ?
                                <Chip
                                    label={result}
                                    color={
                                        result === 'Passed' ?
                                            'success' : 'error'
                                    }
                                />
                                : "-"
                            }
                        </Typography>
                        <Typography>
                            GRADE
                        </Typography>
                        <Typography
                            sx={{
                                color: grade === 'Excellent' ?
                                    'green' : grade === 'Average' ?
                                        'blue' : grade === 'Poor' ?
                                            'red' : 'black',
                            }}
                        >
                            {grade &&
                                score !== "" ? `${grade}` : "-"}
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
                        color='primary'
                        disabled={
                            !studentName ||
                            !classStd ||
                            !score ||
                            !result ||
                            !grade
                        }
                    >
                        CONFIRM
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}
