export interface AddressResponse {
  id: string;
  name: string | null;
  addressLine1: string;
  addressLine2: string | null;
  flat: string | null;
  city: string;
  zipcode: string;
  placeId: string | null;
  location?: {
    latitude: number;
    longitude: number;
  };
  isObscured?: boolean;
}

export interface CreateAddressRequest {
  name?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  zipcode: string;
  placeId?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
}
