import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchProductById } from "../services/productServices";
import useCartStore from "../stores/useCartStore";

const ProductDetails = () => {
  const { id } = useParams();

  const addToCart = useCartStore((state) => state.addToCart);

  // useEffect(() => {
  //   const fetchdataDetail = async () => {
  //     const data = await fetchdataById(id);
  //     setdata(data);
  //   };

  //   fetchdataDetail();
  // }, [id]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["data", id],
    queryFn: () => fetchProductById(id),
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm font-medium text-gray-500">Loading Products...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm font-semibold text-red-500">
          Something Went Wrong...
        </p>
      </div>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        to="/products"
        className="inline-flex items-center text-sm font-medium text-gray-500 transition hover:text-green-600"
      >
        ← Back to Products
      </Link>

      {/* data */}
      <section className="mt-8 grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm md:grid-cols-2">
        {/* Image */}
        <div className="flex min-h-96 items-center justify-center bg-gray-50 p-8 md:min-h-[550px]">
          <img
            src={data.images[0]}
            alt={data.title}
            className="max-h-[450px] w-full object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center p-6 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            {data.category}
          </p>

          <h1 className="mt-3 text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
            {data.title}
          </h1>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <span className="font-semibold text-gray-900">
              ⭐ {data.rating?.rate}
            </span>

            <span className="text-sm text-gray-500">
              ({data.rating?.count} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 text-sm leading-7 text-gray-600">
            {data.description}
          </p>

          {/* Price */}
          <p className="mt-8 text-3xl font-extrabold text-gray-900">
            ${data.price}
          </p>

          {/* Action */}
          <Link
            to="/cart"
            onClick={() => addToCart(data)}
            className="mt-8 w-full rounded-xl bg-green-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-600 hover:shadow-lg"
          >
            Add to Cart
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
