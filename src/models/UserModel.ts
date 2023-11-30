export interface User {
    id: string;
    email: string;
    username: string;
    password: string; // Remarque : le mot de passe ne devrait jamais être stocké en clair
    age: number;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}

export enum UserRole {
    User = 'User',
    Admin = 'Admin',
}