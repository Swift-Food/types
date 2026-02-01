import { CorporateOrderStatus, SubOrderStatus, PaymentStatus } from '../enums';

// Corporate order response types
// TODO: Add specific response interfaces as needed

export interface CorporateOrderResponse {
  id: string;
  status: CorporateOrderStatus;
  createdAt: string;
  updatedAt: string;
}

export interface SubOrderResponse {
  id: string;
  corporateOrderId: string;
  status: SubOrderStatus;
  createdAt: string;
  updatedAt: string;
}
