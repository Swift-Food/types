export enum CateringOrderStatus {
  PENDING_REVIEW = 'pending_review',
  ADMIN_REVIEWED = 'admin_reviewed',
  RESTAURANT_REVIEWED = 'restaurant_reviewed',
  PAYMENT_LINK_SENT = 'payment_link_sent',
  PAID = 'paid',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

export enum CorporateOrderStatus {
  PENDING_APPROVAL = 'pending_approval',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  SENT_TO_RESTAURANT = 'sent_to_restaurant',
  RESTAURANT_ACCEPTED = 'restaurant_accepted',
  RESTAURANT_REJECTED = 'restaurant_rejected',
  PREPARING = 'preparing',
  OUT_FOR_DELIVERY = 'out_for_delivery',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  FAILED = 'failed',
  REFUNDED = 'refunded',
}

export enum SubOrderStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
  DELIVERED = 'delivered',
  FAILED = 'failed',
}

export enum MealSessionDeliveryStatus {
  PENDING = 'pending',
  FINDING_DRIVER = 'finding_driver',
  DRIVER_ASSIGNED = 'driver_assigned',
  AWAITING_PICKUP = 'awaiting_pickup',
  OUT_FOR_DELIVERY = 'out_for_delivery',
  AT_COLLECTION_POINT = 'at_collection_point',
  DELIVERED = 'delivered',
}

export enum OrderStatus {
  PLACED = 'placed',
  CONFIRMED = 'confirmed',
  PREPARING = 'preparing',
  DRIVER_ASSIGNED = 'driver_assigned',
  READY_FOR_PICKUP = 'ready_for_pickup',
  OUT_FOR_DELIVERY = 'out_for_delivery',
  USER_PICKUP = 'user_pickup',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

export enum OrderPossibleStatus {
  INCOMING = 'incoming',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
}

export enum PaymentMethod {
  COMPANY_WALLET = 'company_wallet',
  MIXED = 'mixed',
}
