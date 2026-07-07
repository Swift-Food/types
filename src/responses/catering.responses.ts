import { CateringOrderStatus } from '../enums';

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
