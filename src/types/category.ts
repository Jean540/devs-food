export type Category = {
  error: string;
  result: [Item];
};

export type Item = {
  id: number;
  name: string;
  image: string;
};
