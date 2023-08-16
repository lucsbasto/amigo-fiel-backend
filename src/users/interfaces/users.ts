interface User {
    id?: string | null;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    isAdmin: boolean;
    isVerified: boolean;
    addressId?: string | null;
    avatarUrl?: string | null;
    fullName?: string | null;
}