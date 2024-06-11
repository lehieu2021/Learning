import * as React from "react";

// Types
type Product = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
};

// Components
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="box-border flex relative flex-col shrink-0 gap-4 p-5 h-auto rounded-lg pointer-events-auto bg-neutral-100 max-md:mb-6">
      <img
        loading="lazy"
        src={product.imageUrl}
        className="box-border object-contain overflow-hidden shrink-0 w-full aspect-square min-h-[20px] min-w-[20px]"
        alt={product.title}
      />
      <div className="box-border flex relative flex-col shrink-0 gap-2">
        <h3 className="box-border relative shrink-0 h-auto max-md:text-2xl">
          {product.title}&nbsp;
        </h3>
        <div className="box-border flex relative flex-row shrink-0 gap-1 max-md:text-2xl">
          <span className="box-border relative shrink-0 h-auto">$</span>
          <span className="box-border relative shrink-0 h-auto">{product.price}</span>
        </div>
      </div>
    </article>
  );
};

// Main Component
const MyComponent: React.FC = () => {
  const products: Product[] = [
    { id: 1, imageUrl: "https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_1280.png", title: "Product Title", price: 32 },
    { id: 2, imageUrl: "https://cdn.pixabay.com/photo/2016/11/23/06/46/razor-1852087_1280.png", title: "Product Title", price: 30 },
    { id: 3, imageUrl: "https://cdn.pixabay.com/photo/2018/03/06/21/43/lamp-3204675_640.png", title: "Product Title", price: 32 },
    { id: 4, imageUrl: "https://cdn.pixabay.com/photo/2016/01/02/16/00/star-wars-1118389_1280.png", title: "Product Title", price: 32 },
    { id: 5, imageUrl: "https://cdn.pixabay.com/photo/2014/11/23/14/32/camera-542784_1280.png", title: "Product Title", price: 32 },
    { id: 6, imageUrl: "https://cdn.pixabay.com/photo/2018/04/01/18/16/bag-3281639_640.png", title: "Product Title", price: 32 },
    { id: 7, imageUrl: "https://cdn.pixabay.com/photo/2019/12/08/17/16/lantern-4681686_1280.png", title: "Product Title", price: 32 },
    { id: 8, imageUrl: "https://cdn.pixabay.com/photo/2017/12/24/18/29/wear-3037444_640.png", title: "Product Title", price: 32 },
  ];

  return (
    <>
      <a href="https://www.everlane.com/" className="box-border inline relative flex-col shrink-0 cursor-pointer pointer-events-auto">
        <div className="box-border flex relative flex-col shrink-0 p-5 min-h-[100px]" style={{ maxWidth: 1440 }}>
          <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full max-w-[1440px] min-h-[100px]">
            <header className="box-border flex relative flex-row shrink-0 gap-2 items-center max-sm:flex max-sm:flex-row max-sm:self-stretch max-sm:w-auto">
              <h2 className="box-border relative shrink-0 ml-px h-auto font-light">Trending Products</h2>
              <button
                className="box-border relative shrink-0 self-center px-4 py-2 w-auto text-center text-blue-600 rounded appearance-none cursor-pointer max-sm:mr-auto"
              >
                View All
              </button>
            </header>

            <div className="box-border flex relative flex-col shrink-0 h-auto mt-5">
              <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </a>
      <span className="inline">
        <span className="box-border inline relative flex-col shrink-0" />
      </span>
    </>
  );
};

export default MyComponent;