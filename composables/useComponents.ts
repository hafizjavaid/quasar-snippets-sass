
import type { SingleComponent } from '~/types';

export const useComponents = () => {
	const components = useState<SingleComponent[] | null>("components", () => null);
	return components;
};
