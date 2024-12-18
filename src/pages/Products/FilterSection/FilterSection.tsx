import { useState } from 'react';
import { Layout } from '../../../components';
import { Button, SectionHeading } from './FilterSection.styled';
import { FilterSectionPropsType } from './FilterSection.type';

function FilterSection({ title, options, onClick }: FilterSectionPropsType) {
  const [activeFilter, setActiveFilter] = useState('all');

  function handleClick(filter: string) {
    setActiveFilter(filter);
    onClick(filter);
  }

  return (
    <Layout.FlexCol $align="stretch">
      <SectionHeading>{title}</SectionHeading>
      <ul style={{ listStyle: 'none' }}>
        {options.map((option, index) => (
          <li key={index}>
            <Button
              $active={option === activeFilter}
              onClick={() => handleClick(option)}
            >
              {option}
            </Button>
          </li>
        ))}
      </ul>
    </Layout.FlexCol>
  );
}

export default FilterSection;
