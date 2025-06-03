import bcrypt from "bcrypt";

export default function passwordValidation(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword); 
}