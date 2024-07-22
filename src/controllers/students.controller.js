import { Student } from "../models/students.models.js";
const students = [
    { id: "8634d265-41c0-4e03-8537-03453273ebf8", name: "José Silva", email: "jose.silva@gmail.com.com", password: "Jq5LbWv9" },
    { id: "48722908-0f03-48c8-a515-d46e3f441462", name: "Mariana Santos", email: "mariana.santos@gmail.com", password: "hHg3XsYt1" },
    { id: "d4418ca3-2614-436e-8b09-9c725d768045", name: "Carlos Oliveira", email: "carlos.oliveira@gmail.com", password: "Rf8TkZs2" },
    { id: "a9950417-65b1-4406-a1b6-5473a60ffb7d", name: "Juliana Pereira", email: "juliana.pereira@gmail.com", password: "Mn7BpQw4" },
    { id: "01b84133-192b-49b5-8620-76baced3a2b5", name: "Lucas Costa", email: "lucas.costa@gmail.com", password: "Vh2NrPx9" },
    { id: "931e637d-2167-4089-9278-9a29d327f882", name: "Fernanda Oliveira", email: "fernanda.oliveira@gmail.com", password: "Lp4RsNv6" }
];


export const studentProfile = (name, email, password) => {
    const newStudent = new Student(name, email, password);
    students.push(newStudent);
    if (newStudent) {
        return newStudent;
    } else {
        return "Aluno não adicionado, verifique se inseriu corretamente";
    };
};


export const getAllStudent = () => {
    return students;
};


export const updateStudent = (id, password) => {
    const studentsAlreadyExist = students.find(update => update.id == id);
    if (studentsAlreadyExist) {
        let indexStudent = students.findIndex(update => update.id == id);
        students[indexStudent].password = password;
        return students[indexStudent];
    } else {
        return "Não possui aluno com esse id";
    };
};


export const deleteStudent = (id) => {
    const studentsAlreadyExist = students.find(del => del.id == id);
    if (studentsAlreadyExist) {
        let indexStudent = students.findIndex(del => del.id == id);
        students.splice(indexStudent, 1);
        return students;
    } else {
        return "Aluno não deletado, verifique o id ";
    };
};




