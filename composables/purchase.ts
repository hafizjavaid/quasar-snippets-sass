
export const usePurchase = () => {
	const purchase = useState<any>("purchase", () => null);
	return purchase;
};