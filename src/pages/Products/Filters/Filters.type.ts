import { FilterSectionPropsType } from '../FilterSection';

export type FiltersPropsType = {
  categories: string[] | null;
  handleFilter: FilterSectionPropsType['onClick'];
};
