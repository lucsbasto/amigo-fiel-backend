interface Image {
    id: string;
    imageUrl: string;
}

interface Company {
    id: number;
    name: string;
    description: string;
    logoUrl: string;
    websiteUrl: string;
    phoneNumber: string;
    address: string;
}

interface Address {
    id: string;
    street: string;
    number: string;
    block: string;
    cep: string;
}

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

interface FeedSpot {
    id: string;
    isFull: boolean;
    filledBy?: User | null;
    createdBy?: User | null;
    latitude: number;
    longitude: number;
    landmark: string;
    address?: Address | null;
    fullAddress: string;
    likedBy?: User[] | null;
    images?: Image[] | null;
    sponsoredBy?: Company | null;
}
