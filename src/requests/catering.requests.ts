// Catering request types - to be expanded as needed

export interface CreateCateringOrderRequest {
  eventName?: string;
  eventDate: string;
  eventTime: string;
  numberOfPeople: number;
  deliveryAddress: {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    zipcode: string;
    placeId?: string;
  };
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  dietaryRequirements?: string;
  additionalNotes?: string;
}

export interface UpdateCateringOrderRequest {
  eventName?: string;
  eventDate?: string;
  eventTime?: string;
  numberOfPeople?: number;
  dietaryRequirements?: string;
  additionalNotes?: string;
}
