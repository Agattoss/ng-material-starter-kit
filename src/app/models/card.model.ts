export interface CardModel {
  readonly id: number;
  readonly userId: number;
  readonly date: string;
  readonly products: Array<{
    productId: number;
    quantity: number;
  }>;
}
