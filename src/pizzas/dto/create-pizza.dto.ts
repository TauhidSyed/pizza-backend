export class CreatePizzaDto {
  name: string;
  size: 'S' | 'M' | 'L';
  price: number;
  imageUrl: string;
}
