import { RestaurantType, MenuItemStatus, Allergen, DietaryFilter } from '../enums';

// Restaurant response types
// TODO: Add specific response interfaces as needed

export interface RestaurantResponse {
  id: string;
  name: string;
  type: RestaurantType;
  createdAt: string;
  updatedAt: string;
}

export interface MenuItemResponse {
  id: string;
  restaurantId: string;
  name: string;
  description: string | null;
  price: number;
  status: MenuItemStatus;
  allergens: Allergen[];
  dietaryFilters: DietaryFilter[];
  createdAt: string;
  updatedAt: string;
}
