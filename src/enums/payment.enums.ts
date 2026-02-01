export enum WithdrawalStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export enum WithdrawalUserType {
  RESTAURANT = 'restaurant',
  DRIVER = 'driver',
  EVENT_ORGANIZER = 'event_organizer',
}

export enum RefundStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  PROCESSED = 'processed',
  CANCELLED = 'cancelled',
}

export enum RefundOrderType {
  CATERING = 'catering',
  CORPORATE = 'corporate',
}

export enum PromotionType {
  RESTAURANT_WIDE = 'RESTAURANT_WIDE',
  ITEM_SPECIFIC = 'ITEM_SPECIFIC',
  CATEGORY_SPECIFIC = 'CATEGORY_SPECIFIC',
  BUY_MORE_SAVE_MORE = 'BUY_MORE_SAVE_MORE',
  BOGO = 'BOGO',
}

export enum PromotionStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SCHEDULED = 'SCHEDULED',
  EXPIRED = 'EXPIRED',
}

export enum PromoDiscountType {
  FIXED = 'FIXED',
  PERCENT = 'PERCENT',
}

export enum PromoAppliesTo {
  CATERING = 'CATERING',
  CONSUMER = 'CONSUMER',
  BOTH = 'BOTH',
}

export enum PromotionApplicability {
  CATERING = 'CATERING',
  CORPORATE = 'CORPORATE',
  BOTH = 'BOTH',
}
