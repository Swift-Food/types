export enum UserRole {
  CUSTOMER = 'customer',
  RESTAURANT_OWNER = 'restaurant_owner',
  DRIVER = 'driver',
  ADMIN = 'admin',
  CORPORATE_EMPLOYEE = 'corporate_employee',
  CORPORATE_ADMIN = 'corporate_admin',
  CORPORATE_MANAGER = 'corporate_manager',
  EVENT_ORGANIZER = 'event_organizer',
  EVENT_ATTENDEE = 'event_attendee',
}

export enum CorporateUserStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  INACTIVE = 'inactive',
}

export enum CorporateUserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  EMPLOYEE = 'employee',
}

export enum DriverStatus {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
  OCCUPIED = 'occupied',
}

export enum FollowStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
}
