import { DATA } from '../utils/constants';
import Card from '../components/Card';
import Header from '../components/Header';

const HomePage = () => (
  <div className="bg-gray-50 min-h-screen font-bold">
   <Header />
    <article className="grid grid-cols-3 p-3">
      <section className="col-span-2 grid grid-cols-4 gap-3">
        {DATA.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </section>
      <section className="">
        <p className="font-medium text-center mt-16">No items added to cart</p>
      </section>
    </article>
  </div>
);

export default HomePage;