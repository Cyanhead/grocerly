import { FiltersPropsType } from './Filters.type';
import FilterSection, { FilterSectionPropsType } from '../FilterSection';
import { Loader } from '../../../components';

function Filters({ categories, handleFilter }: FiltersPropsType) {
  if (!categories) {
    return <Loader />; // CONSIDER: using a skeleton instead
  }

  const sections: Omit<FilterSectionPropsType, 'onClick'>[] = [
    {
      title: 'category',
      options: categories,
    },
    // {
    //   title: 'settings',
    //   options: [
    //     { name: 'preferences', icon: Settings2 },
    //     { name: 'pricing', icon: CircleDollarSign },
    //     { name: 'audit logs', icon: Scroll },
    //   ],
    // },
  ];

  return (
    <>
      {sections.map(({ title, options }, index) => (
        <FilterSection
          key={index}
          title={title}
          options={options}
          onClick={handleFilter}
        />
      ))}
    </>
  );
}

export default Filters;
