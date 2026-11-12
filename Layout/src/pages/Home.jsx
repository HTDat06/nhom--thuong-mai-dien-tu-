import ProductCard from "../components/ProductCard";
import {products} from "../data/product";
function Home() {
    return (
        <div className="home-container">

            <section className="banner">
                <h1>Chào mừng đến với MyShop</h1>
                <p>Khám phá các sản phẩm công nghệ mới nhất</p>
                <button>Xem sản phẩm</button>
            </section>

            <section className="products-section">
                <h2>Sản phẩm nổi bật</h2>

                <div className="product-list">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

        </div>
    );
}

export default Home;