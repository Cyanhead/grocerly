import { AllProductsPropsType } from './AllProducts.type';
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
// import { usePagination } from '@table-library/react-table-library/pagination';
import { parseTimestamp } from '../../../helpers';
import { MoreVertical } from 'lucide-react';
import { SectionHeading2, TextLink } from '../../BaseStyled';
// import { Timestamp } from 'firebase/firestore';
import { EmptyTableMessage } from '../Tables.styled';
// import { useState } from 'react';
// import {
//   Action,
//   MiddlewareFunction,
//   State,
// } from '@table-library/react-table-library/types/common';

function AllProducts({
  heading,
  products,
  emptyTableMessage = 'No products found.',
}: AllProductsPropsType) {
  // const [page, setPage] = useState(0); // NOTE: shouldn't this be page 1?
  // const [pageLimit, setPageLimit] = useState(10);

  // NOTE: horizontal scroll not working on mobile

  const nodes = products.map(
    ({ id, name, category, stock, price, lastOrder, createdAt }) => {
      return {
        id,
        name,
        category,
        stock,
        price,
        lastOrder,
        createdAt,
      };
    }
  );

  const data = { nodes };

  const theme = useTheme({
    Table: `
      --data-table-library_grid-template-columns: minmax(150px, 2fr) minmax(150px, 1fr) 100px 100px minmax(150px, 2fr) 60px;
      width: 100%;
         
      tr {
      &:is(:last-of-type) {
        td {
          padding-bottom: 20px;
        }
      }
    }
    `,
    Row: `
      .td {
        border-top: 1px solid #00000022;
      }
    `,
    HeaderCell: `
      padding: 12px 0;
      padding-top: 20px;
    `,
    Cell: `
      padding: 12px 0;      
    `,
  });

  if (products.length === 0)
    return (
      <>
        <SectionHeading2>{heading}</SectionHeading2>
        <EmptyTableMessage>{emptyTableMessage}</EmptyTableMessage>;
      </>
    );

  // const pagination = usePagination(
  //   { nodes },
  //   {
  //     state: {
  //       page: page,
  //       size: pageLimit,
  //     },
  //     onChange: onPaginationChange,
  //   }
  // );

  // function onPaginationChange(
  //   _action: Action,
  //   state: State
  // ): MiddlewareFunction | void {
  //   setPage(state.page);
  // }

  // const sort = useSort(
  //   data,
  //   {
  //     onChange: onSortChange,
  //   },
  //   {
  //     sortIcon: {
  //       margin: '4px',
  //       iconDefault: <Code className="rotate-90" />,
  //       iconUp: <ChevronUp />,
  //       iconDown: <ChevronDown />,
  //     },

  //     sortToggleType: SortToggleType.AlternateWithReset,
  //     sortFns: {
  //       ITEM: array =>
  //         array.sort((a, b) => a.productType.localeCompare(b.productType)),
  //       CALC_BY: array =>
  //         array.sort((a, b) => {
  //           if (a.allocation.type === b.allocation.type) {
  //             return a.allocation.value - b.allocation.value;
  //           }
  //           return a.allocation.type.localeCompare(b.allocation.type);
  //         }),
  //       ALLOCATION: array => {
  //         const allocation = budgetAllocation;
  //         const noneItemsValue = amountPerNonePriorityItem;

  //         return array.sort((a, b) => {
  //           const getValue = (item: BudgetItemListType[0]) => {
  //             if (item.allocation.type === 'percentage') {
  //               return (item.allocation.value / 100) * allocation;
  //             } else if (item.allocation.type === 'amount') {
  //               return item.allocation.value;
  //             } else {
  //               return noneItemsValue;
  //             }
  //           };

  //           const aValue = getValue(a as BudgetItemListType[0]);
  //           const bValue = getValue(b as BudgetItemListType[0]);

  //           return aValue - bValue;
  //         });
  //       },
  //       TARGET: array => array.sort((a, b) => a.price - b.price),
  //     },
  //   }
  // );

  // const select = useRowSelect(
  //   data,
  //   {
  //     onChange: onSelectChange,
  //   },
  //   {
  //     clickType: SelectClickTypes.ButtonClick,
  //   }
  // );

  // function onSortChange() {}

  // function onSelectChange() {}

  // const handleDeleteItems = (idsArray: string[]) => {
  //   const newBudgetList: BudgetListType = budgets.map(budget => {
  //     if (budget.id === budgetId) {
  //       const newItems = budget.items.filter(
  //         item => !idsArray.includes(item.id)
  //       );

  //       return {
  //         ...budget,
  //         items: newItems,
  //       };
  //     }
  //     return budget;
  //   });

  //   // update state and local storage
  //   setBudgets(newBudgetList);
  //   window.localStorage.setItem(
  //     'stored-budgets',
  //     JSON.stringify(newBudgetList)
  //   );

  //   // delete from table
  //   select.fns.onRemoveAll();
  // };

  return (
    <>
      {heading && <SectionHeading2>{heading}</SectionHeading2>}
      <Table
        data={data}
        theme={theme}
        // pagination={pagination}
        // select={select}
        // sort={sort}
        layout={{ custom: true, horizontalScroll: true }}
      >
        {(tableList: typeof nodes) => (
          <>
            <Header>
              <HeaderRow>
                {/* <HeaderCellSelect /> */}
                {/* <HeaderCellSort sortKey="NAME">Name</HeaderCellSort>
                  <HeaderCellSort sortKey="CATEGORY">category</HeaderCellSort>
                  <HeaderCellSort sortKey="PRICE">Price</HeaderCellSort>
                  <HeaderCellSort sortKey="STOCK">Stock</HeaderCellSort>
                  <HeaderCellSort sortKey="LAST_ORDER">
                    Last Order
                  </HeaderCellSort> */}
                <HeaderCell>Name</HeaderCell>
                <HeaderCell>Category</HeaderCell>
                <HeaderCell>Price</HeaderCell>
                <HeaderCell>Stock</HeaderCell>
                <HeaderCell>Last Order</HeaderCell>
                <HeaderCell>Action</HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(product => {
                // function determineFirstSale(
                //   lastOrder: Timestamp,
                //   createdAt: Timestamp
                // ) {
                //   if (!lastOrder || !createdAt) return 'Never';

                //   const diff =
                //     lastOrder.toDate().getTime() - createdAt.toDate().getTime();
                //   return diff > 1000 * 60
                //     ? parseTimestamp(product.lastOrder, {
                //         hour: 'numeric',
                //         minute: 'numeric',
                //       })
                //     : 'Never';
                // }

                // const lastOrderedDateTime = determineFirstSale(
                //   product.lastOrder,
                //   product.createdAt
                // );

                const lastOrderedDate =
                parseTimestamp(product.lastOrder) ?? 'Never';


                return (
                  <Row key={product.id} item={product}>
                    {/* <CellSelect item={product} /> */}
                    <Cell style={{ textTransform: 'capitalize' }}>
                      <TextLink
                        $isActive
                        to={product.id}
                        state={{ title: product.name }}
                      >
                        {product.name}
                      </TextLink>
                    </Cell>
                    <Cell style={{ textTransform: 'capitalize' }}>
                      {product.category ?? 'No Category'}
                    </Cell>
                    <Cell>${product.price}</Cell>
                    <Cell>{product.stock}</Cell>
                    <Cell title={lastOrderedDate}>
                      {lastOrderedDate}
                    </Cell>
                    <Cell>
                      <MoreVertical
                      // TODO: add menu with delete option
                      />
                    </Cell>
                    {/* <Cell className="relative text-center">
                          <Menu
                            options={[
                              {
                                label: 'Edit',
                                icon: <Edit2 size={20} />,
                                onClick: () => {
                                  setShowEditItemModal(true);
                                  setItemToEdit(product.id);
                                },
                              },
                              {
                                type: 'sub-menu',
                                label: 'Copy',
                                icon: <Copy size={20} />,
                                subMenu: [
                                  {
                                    type: 'text',
                                    label: 'Copy to...',
                                  },
                                  ...copySubmenuItems,
                                ],
                              },
                              {
                                type: 'sub-menu',
                                label: 'Move',
                                icon: <CornerUpLeft size={20} />,
                                subMenu: [
                                  {
                                    type: 'text',
                                    label: 'Move to...',
                                  },
                                  ...moveSubmenuItems,
                                ],
                              },
                              {
                                label: 'Delete',
                                icon: <Trash2 size={20} />,
                                onClick: () => handleDeleteItems([product.id]),
                              },
                            ]}
                            styles={{ willUseParentPosition: true }}
                            anchor="left"
                          >
                            <MoreVertical />
                          </Menu>
                        </Cell> */}
                  </Row>
                );
              })}
            </Body>
          </>
        )}
      </Table>
      {/* TODO: Pagination */}
      {/* <div>
        <div>
          <span>Showing</span>
          <select
            id="limit-select"
            // className={styles.select}
            value={pageLimit}
            onChange={event => {
              const nextValue = parseInt(event.target.value);
              setPageLimit(nextValue);
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value={products.length}>All</option>
          </select>
          <span> out of {products.length}</span>
        </div>
        <div>
          {[
            {
              label: '<',
              type: 'step',
              onClick: () =>
                pagination.fns.onSetPage(pagination.state.page - 1),
            },
            {
              label: 1,
              type: 'page',
              onClick: () => pagination.fns.onSetPage(0),
            },
            {
              label: 2,
              type: 'page',
              onClick: () => pagination.fns.onSetPage(1),
            },
            {
              label: 3,
              type: 'page',
              onClick: () => pagination.fns.onSetPage(2),
            },
            {
              label: '...',
              type: 'page',
              onClick: () => {},
            },
            {
              label: Math.ceil(products.length / pageLimit) - 1,
              type: 'page',
              onClick: () =>
                pagination.fns.onSetPage(
                  Math.ceil(products.length / pageLimit) - 2
                ),
            },
            {
              label: Math.ceil(products.length / pageLimit),
              type: 'page',
              onClick: () =>
                pagination.fns.onSetPage(
                  Math.ceil(products.length / pageLimit) - 1
                ),
            },
            {
              label: '>',
              type: 'step',
              onClick: () =>
                pagination.fns.onSetPage(pagination.state.page + 1),
            },
          ].map(({ label, type, onClick }, index) => {
            return (
              <button
                key={index}
                type="button"
                // className={
                //   type === 'step' ? styles.stepButtons : styles.pageButtons
                // }
                disabled={
                  (type === 'step' &&
                    pagination.state.page === 0 &&
                    label === '<') ||
                  (type === 'step' &&
                    pagination.state.page ===
                      Math.ceil(products.length / pageLimit) - 1 &&
                    label === '>') ||
                  (type === 'page' &&
                    pagination.state.page === 0 &&
                    label === 1) ||
                  (type === 'page' &&
                    pagination.state.page === 1 &&
                    label === 2) ||
                  (type === 'page' &&
                    pagination.state.page === 2 &&
                    label === 3) ||
                  (type === 'page' &&
                    pagination.state.page ===
                      Math.ceil(products.length / pageLimit) - 2 &&
                    label === Math.ceil(products.length / pageLimit) - 1) ||
                  (type === 'page' &&
                    pagination.state.page ===
                      Math.ceil(products.length / pageLimit) - 1 &&
                    label === Math.ceil(products.length / pageLimit))
                }
                onClick={onClick}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div> */}
    </>
  );
}

export default AllProducts;
