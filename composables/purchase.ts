
import type { Purchase, Product } from '@prisma/client';

type UserPurchase = Purchase & {
	product: Product
};
export const usePurchase = () => {
	const purchase = useState<UserPurchase[] | null>("purchase", () => null);
	return purchase;
};