import { Address } from 'cluster';
import { Company } from 'src/companies/interfaces/company';
import { Image } from 'src/images/interfaces/image';
import { User } from 'src/users/interfaces/users';
export interface FeedSpot {
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
