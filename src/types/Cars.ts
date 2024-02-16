export interface Cars {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  acf: {
    car_photos_bg: {
      foto_1: string,
      foto_2: string,
      foto_3: string,
      foto_4: string,
    }
  }
}
