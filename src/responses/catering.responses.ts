import { CateringOrderStatus, MealSessionDeliveryStatus, CateringDeliveryMethod } from '../enums';

// ============================================================
// MEAL SESSION RESPONSES
// ============================================================

// Admin/Customer meal session response (pricing included)
export interface MealSessionResponse {
  id: string;
  sessionName: string;
  sessionOrder: number;
  sessionDate: string;
  eventTime: string;
  collectionTime: string;
  orderItems: PricingOrderItemDto[];
  subtotal: number;
  deliveryFee: number;
  serviceCharge: number;
  promoDiscount: number;
  promotionDiscount: number;
  sessionTotal: number;
  appliedPromotions?: Record<string, AppliedPromotionDto[]>;
  restaurantReviews?: string[];
  restaurantRejections?: string[];
  restaurantCollectionTimes?: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface AppliedPromotionDto {
  id: string;
  name: string;
  type: string;
  discountAmount: number;
}

// Pricing order item (restaurant + menu items)
export interface PricingOrderItemDto {
  restaurantId: string;
  restaurantName: string;
  menuItems: PricingMenuItemDto[];
  customerTotal: number;
  restaurantGross: number;
  restaurantNet: number;
  platformCommission: number;
}

export interface PricingMenuItemDto {
  menuItemId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  feedsPerUnit?: number;
  selectedAddons?: SelectedAddon[];
}

export interface SelectedAddon {
  groupTitle: string;
  name: string;
  price: number;
  quantity?: number;
}

// ============================================================
// DRIVER-SPECIFIC MEAL SESSION (no pricing data)
// ============================================================

export interface DriverMealSessionResponse {
  id: string;
  version: number;
  sessionName: string;
  sessionDate: string;
  eventTime: string;
  deliveryStatus: MealSessionDeliveryStatus;
  driverOrgId: string | null;
  driverNames: string[];
  restaurantPickupStatus: Record<string, RestaurantPickupStatus>;
  driverDeliveryConfirmations: Record<string, DriverDeliveryConfirmation>;
  driverOrgAssignedAt?: string;
  restaurants: DriverRestaurantPickup[];
  totalPortions: number;
  totalItems: number;
  delivery: DriverDeliveryInfo;
  specialRequirements?: string;
  estimatedDeliveryTime?: string;
  pickupStartedAt?: string;
  outForDeliveryAt?: string;
  arrivedAtDestinationAt?: string;
  deliveredAt?: string;
  driverOrgNotes?: string;
}

export interface RestaurantPickupStatus {
  collectedAt: string | null;
  pickupProofImageUrl: string | null;
  collectedBy: string | null;
}

export interface DriverDeliveryConfirmation {
  confirmedAt: string;
  deliveryProofImageUrl: string;
}

export interface DriverRestaurantPickup {
  restaurantId: string;
  restaurantName: string;
  address: DriverRestaurantAddress;
  contact: DriverRestaurantContact;
  collectionTime: string;
  itemCount: number;
  portionCount: number;
  menuItems: DriverMenuItemDto[];
}

export interface DriverRestaurantAddress {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
  location?: { latitude: number; longitude: number };
}

export interface DriverRestaurantContact {
  phone?: string;
  email?: string;
}

export interface DriverMenuItemDto {
  menuItemId: string;
  name: string;
  quantity: number;
  feedsPerUnit?: number;
  totalPortions?: number;
  groupTitle?: string;
  selectedAddons?: DriverAddonDto[];
}

export interface DriverAddonDto {
  name: string;
  quantity: number;
  groupTitle?: string;
}

export interface DriverDeliveryInfo {
  address: string;
  location?: { latitude: number; longitude: number };
  contactName?: string;
  contactPhone?: string;
}

// ============================================================
// CATERING ORDER RESPONSES
// ============================================================

export interface CateringOrderResponse {
  id: string;
  orderReference: string;
  eventDate: string;
  deliveryDate: string;
  eventTime: string;
  deliveryTime: string;
  collectionTime: string;
  status: CateringOrderStatus;
  isMultiMeal: boolean;
  mealSessionCount: number;
  mealSessions?: MealSessionResponse[];
  restaurants: PricingOrderItemDto[];
  // Pricing (aggregated across all sessions)
  customerFinalTotal: number;
  platformCommissionRevenue: number;
  restaurantsTotalGross: number;
  restaurantsTotalNet: number;
  subtotal: number;
  serviceCharge: number;
  deliveryFee: number;
  promoDiscount: number;
  promotionDiscount: number;
  depositAmount?: number;
  estimatedTotal?: number;
  finalTotal?: number;
  // Restaurant-specific pricing (when filtered for a restaurant)
  customerPaidToRestaurant?: number;
  restaurantGrossAmount?: number;
  restaurantNetAmount?: number;
  restaurantCommissionTotal?: number;
  // Customer info
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  organization?: string;
  eventType?: string;
  guestCount?: number;
  // Addresses
  billingAddress?: BillingAddressResponse;
  deliveryAddress?: DeliveryAddressResponse;
  // Pickup info
  pickupContactName?: string;
  pickupContactPhone?: string;
  // Additional info
  specialRequirements?: string;
  accessToken?: string;
  sharedAccessUsers?: SharedAccessUser[];
  // Payment info
  stripePaymentIntentId?: string;
  paid: boolean;
  paymentLinkUrl?: string;
  paymentLinkSentAt?: string;
  paidAt?: string;
  adminNotes?: string;
  reviewedBy?: string;
  reviewedAt?: string;
  // Restaurant reviews
  restaurantReviews?: string[];
  restaurantRejections?: string[];
  restaurantPayoutDetails?: Record<string, RestaurantPayoutDetails>;
  createdAt: string;
  updatedAt: string;
}

export interface BillingAddressResponse {
  line1: string;
  line2?: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface DeliveryAddressResponse {
  street: string;
  city: string;
  postcode: string;
  country: string;
}

export interface SharedAccessUser {
  userId: string;
  email: string;
  role: 'viewer' | 'editor';
}

export interface RestaurantPayoutDetails {
  selectedAccountId?: string;
  accountName?: string;
  [key: string]: any;
}

export interface CateringOrderSummaryResponse {
  id: string;
  orderReference: string;
  eventDate: string;
  deliveryDate: string;
  eventTime?: string;
  status: CateringOrderStatus;
  isMultiMeal: boolean;
  mealSessionCount: number;
  customerFinalTotal: number;
  restaurantCount: number;
  customerName: string;
  guestCount?: number;
  eventType?: string;
  paid: boolean;
  createdAt: string;
}
