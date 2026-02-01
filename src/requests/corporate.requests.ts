// Corporate order request types - to be expanded as needed

export interface CreateSubOrderRequest {
  menuItemId: string;
  quantity: number;
  addons?: string[];
  specialInstructions?: string;
}

export interface UpdateSubOrderRequest {
  quantity?: number;
  addons?: string[];
  specialInstructions?: string;
}
