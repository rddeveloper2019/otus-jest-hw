import { AccountService } from "./accountService";

describe("AccountService", () => {
  let accountService: AccountService;

  beforeEach(() => {
    accountService = new AccountService();
  });

  it("should add discount for a user type", () => {
    accountService.setUserDiscount("Standard", 10);
    expect(accountService.getUserDiscount("Standard")).toBe(10);
  });

  it("should add a product discount for a user type", () => {
    accountService.setProductDiscount("Standard", "Car", 5);
    expect(accountService.getProductDiscount("Standard", "Car")).toBe(5);
  });

  it("should sum user discount and product discount", () => {
    accountService.setUserDiscount("Premium", 15);
    accountService.setProductDiscount("Premium", "Toy", 10);
    const totalDiscount = accountService.calculateTotalDiscount(
      "Premium",
      "Toy",
    );
    expect(totalDiscount).toBe(25);
  });

  it("should return zero discount if none set", () => {
    const totalDiscount = accountService.calculateTotalDiscount("Free", "Food");
    expect(totalDiscount).toBe(0);
  });
});
