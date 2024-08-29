import {
  Banners,
  CategoryBox,
  Labels,
  MobileAppBanner,
} from '../../components';
import Hero from './Hero';

const colors = [
  'pink',
  'hotpink',
  'purple',
  'rebeccapurple',
  'red',
  'green',
  'blue',
  'black',
  'pink',
  'hotpink',
  'purple',
  'rebeccapurple',
  'red',
  'green',
  'blue',
  'black',
  'pink',
  'hotpink',
  'purple',
  'rebeccapurple',
  'red',
  'green',
  'blue',
  'black',
];

const categories = [
  { name: 'fruit', color: 'hotpink' },
  { name: 'vegetable', color: 'purple' },
  { name: 'meat', color: 'rebeccapurple' },
  { name: 'dairy', color: 'red' },
  { name: 'poultry', color: 'gold' },
  { name: 'grain', color: 'green' },
  { name: 'bakery', color: 'black' },
  { name: 'snack', color: 'pink' },
  { name: 'baking', color: 'hotpink' },
  { name: 'cleaning', color: 'purple' },
  { name: 'other', color: 'blue' },
];

function Card({ item }: { item: { name: string; color: string } }) {
  return (
    <h3
      style={{
        backgroundColor: item.color,
        color: 'white',
        height: '200px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {item.name}
    </h3>
  );
}
function Card2({ item }: { item: string }) {
  return (
    <h3
      style={{
        backgroundColor: item,
        color: 'white',
        height: '200px',
        width: '100%',
        border: '5px solid grey',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {item}
    </h3>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <CategoryBox
        // TODO: make own component
        heading="Explore Categories"
        items={categories}
        card={Card}
      />
      <CategoryBox
        // TODO: make own component
        heading="Featured Products"
        items={[...colors, 'grey', 'wheat']}
        card={Card2}
      />
      <Banners />
      <MobileAppBanner />
      <Labels />
    </>
  );
}

export default Home;
