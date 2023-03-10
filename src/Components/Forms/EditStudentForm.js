import StudentForm from './StudentForm';

export default function EditStudentForm({ student }) {
    return (
        <StudentForm formTitle='Edit Student' student={student} isEditMode={true} />
    );
}
