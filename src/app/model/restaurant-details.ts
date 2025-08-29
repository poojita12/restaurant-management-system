export interface RestaurantDetails {
  id: number;
  name: string;
  cuisine: string;
  location: string;
  imageUrl?: string;   // ✅ optional so backend doesn’t break
}

