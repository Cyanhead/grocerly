// export type CategoryBoxPropsType = {
//   heading: string;
//   // children: React.ReactNode;

//   // itemCount: number;
//   items: {
//     array: any[];
//     component: React.ReactNode;
//   };
// };

export type CategoryBoxPropsType<T> = {
  heading: string;
  items: T[];
  card: React.ElementType;
};
