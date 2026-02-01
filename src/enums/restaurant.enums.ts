export enum RestaurantType {
  STALL = 'stall',
  RESTAURANT = 'restaurant',
  COMING_SOON = 'coming_soon',
}

export enum CorporateResetPeriod {
  DAILY = 'daily',
  LUNCH_DINNER = 'lunch_dinner',
}

export enum ReceiptStyle {
  MENU_ITEM = 'MENU_ITEM',
  BY_ORDER = 'BY_ORDER',
}

export enum MenuItemStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SOLD_OUT = 'SOLD_OUT',
  DRAFT = 'DRAFT',
  CATERING = 'CATERING',
}

export enum MenuItemStyle {
  CARD = 'CARD',
  HORIZONTAL = 'HORIZONTAL',
}

export enum Allergen {
  // Official Big 14
  CELERY = 'celery',
  CEREALS_CONTAINING_GLUTEN = 'cereals_containing_gluten',
  CRUSTACEANS = 'crustaceans',
  EGGS = 'eggs',
  FISH = 'fish',
  LUPIN = 'lupin',
  MILK = 'milk',
  MOLLUSCS = 'molluscs',
  MUSTARD = 'mustard',
  PEANUTS = 'peanuts',
  SESAME_SEEDS = 'sesame_seeds',
  SOYBEANS = 'soybeans',
  SULPHUR_DIOXIDE = 'sulphur_dioxide',
  TREE_NUTS = 'tree_nuts',
  // Common sensitivities
  WHEAT = 'wheat',
  BARLEY = 'barley',
  RYE = 'rye',
  OATS = 'oats',
  CORN = 'corn',
  GELATIN = 'gelatin',
  GARLIC = 'garlic',
  ONION = 'onion',
  ALCOHOL = 'alcohol',
  PORK = 'pork',
  BEEF = 'beef',
  CHICKEN = 'chicken',
  LAMB = 'lamb',
  LEGUMES = 'legumes',
  CAFFEINE = 'caffeine',
  COCOA = 'cocoa',
  COLORANTS = 'colorants',
  PRESERVATIVES = 'preservatives',
  // Legacy (kept for backward compatibility)
  GLUTEN = 'gluten',
  MEAT = 'meat',
  NUTS = 'nuts',
  MOLUSCS = 'moluscs',
  SOYA = 'soya',
}

export enum DietaryFilter {
  VEGETARIAN = 'vegetarian',
  NONVEGETARIAN = 'nonvegetarian',
  VEGAN = 'vegan',
  NO_GLUTEN = 'no_gluten',
  NO_NUT = 'no_nut',
  NO_DAIRY = 'no_dairy',
  HALAL = 'halal',
  PESCATERIAN = 'pescatarian',
}

export enum CateringDeliveryMethod {
  E_BIKE = 'e_bike',
  E_BIKE_TRAILER = 'e_bike_trailer',
  UBER = 'uber',
  MINI_VAN = 'mini_van',
  TRUCK = 'truck',
}

export const DELIVERY_METHOD_CAPACITY: Record<CateringDeliveryMethod, number> = {
  [CateringDeliveryMethod.E_BIKE]: 30,
  [CateringDeliveryMethod.E_BIKE_TRAILER]: 60,
  [CateringDeliveryMethod.UBER]: 175,
  [CateringDeliveryMethod.MINI_VAN]: 500,
  [CateringDeliveryMethod.TRUCK]: 999999,
};
