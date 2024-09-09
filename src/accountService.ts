type UserType = "Standard" | "Premium" | "Gold" | "Free";
type ProductType = "Car" | "Toy" | "Food";

class AccountService {
  private userDiscounts: Map<UserType, number>;
  private productDiscounts: Map<UserType, Map<ProductType, number>>;

  constructor() {
    this.userDiscounts = new Map<UserType, number>();
    this.productDiscounts = new Map<UserType, Map<ProductType, number>>();
  }

  setUserDiscount(userType: UserType, discount: number): void {
    this.userDiscounts.set(userType, discount);
  }

  getUserDiscount(userType: UserType): number {
    return this.userDiscounts.get(userType) || 0;
  }

  setProductDiscount(
    userType: UserType,
    productType: ProductType,
    discount: number,
  ): void {
    if (!this.productDiscounts.has(userType)) {
      this.productDiscounts.set(userType, new Map<ProductType, number>());
    }
    this.productDiscounts.get(userType)!.set(productType, discount);
  }

  getProductDiscount(userType: UserType, productType: ProductType): number {
    return this.productDiscounts.get(userType)?.get(productType) || 0;
  }

  calculateTotalDiscount(userType: UserType, productType: ProductType): number {
    const userDiscount = this.getUserDiscount(userType);
    const productDiscount = this.getProductDiscount(userType, productType);
    return userDiscount + productDiscount;
  }
}

export { AccountService };
