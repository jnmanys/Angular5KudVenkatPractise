export class Employee {
    id: number;
    name: string;
    gender: string;
    email?: string;             //? indicates this property is made optional. We can provide a value or not.
    phoneNumber?: number;       //? indicates this property is made optional. We can provide a value or not.
    contactPreference: string;
    dateOfBirth: Date;
    department: number;
    isActive: boolean;
    photoPath?: string;        //? indicates this property is made optional. We can provide a value or not.
}