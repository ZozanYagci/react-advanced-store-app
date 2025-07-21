import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductItem from "../components/ProductItem";
import Loading from "../components/Loading";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductDetail() {
      try {
        const response = await fetch("http://localhost:5000/products/" + id);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProductDetail();
  }, [id]);

  if (loading) return <Loading message="Yükleniyor..."></Loading>;

  return <ProductItem product={product}></ProductItem>;
}
