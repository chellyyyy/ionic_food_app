import { MenuItem } from './menu';

describe('MenuItem', () => {
  it('should create an instance', () => {
    const menuItem: MenuItem = {
        id: 1,
        name: '',
        image: '',
        price: '',
        deliveryTime: '',
        rating: '',
        description: '',
        category: ''
      };
      expect(menuItem).toBeTruthy();
  });
});