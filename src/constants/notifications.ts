// notifications.ts (Type + data in one file)
export type NotificationCategory =
  | "all"
  | "delivery updates"
  | "payments"
  | "promotions & alerts";

export interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  category: NotificationCategory;
}

export const notifications: Notification[] = [
  {
    id: "1",
    title: "Your parcel is on the way",
    description:
      "Driver James has picked up your package. Estimated arrival in 30 minutes.",
    time: "2 mins ago",
    category: "delivery updates",
  },
  {
    id: "2",
    title: "Payment successful",
    description: "Your payment of ₦5,400 for Order #4392 was successful.",
    time: "10 mins ago",
    category: "payments",
  },
  {
    id: "3",
    title: "Special Offer!",
    description: "Limited time offer: use code *FAST100* to save ₦1,000.",
    time: "1 hour ago",
    category: "promotions & alerts",
  },
  {
    id: "4",
    title: "Order delivered",
    description: "Your package was delivered to Barbing Palace Pickup Point.",
    time: "3 hours ago",
    category: "delivery updates",
  },
  {
    id: "5",
    title: "Promo: Refer & Earn",
    description:
      "Refer a friend and earn ₦500 when they complete their first delivery.",
    time: "6 hours ago",
    category: "promotions & alerts",
  },
  {
    id: "6",
    title: "Your wallet has been credited",
    description: "₦2,000 was added to your ParcelPoint wallet from a refund.",
    time: "Yesterday",
    category: "payments",
  },
  {
    id: "7",
    title: "New feature: Night Delivery",
    description: "You can now schedule deliveries for pickup after 7 PM.",
    time: "2 days ago",
    category: "promotions & alerts",
  },
];
