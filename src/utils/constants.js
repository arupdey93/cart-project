import { faker } from "@faker-js/faker";

export const DATA = Array.from({ length: 12 }, () => ({
  id: faker.string.uuid(),
  title: faker.commerce.product(),
  quantity: 1,
  price: faker.number.int({ min: 1000, max: 10000 }),
  imageSrc: faker.image.url(300, 200),
}));
