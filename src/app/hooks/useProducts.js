import { useEffect, useState } from 'react';
import { getProductById, getProducts } from '../services/products';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      try {
        setLoading(true);
        setError('');
        setProducts(await getProducts({ signal: controller.signal }));
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Unable to load products.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => controller.abort();
  }, []);

  return { products, loading, error };
}

export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      setProduct(null);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function loadProduct() {
      try {
        setLoading(true);
        setError('');
        setProduct(await getProductById(id, { signal: controller.signal }));
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Unable to load this product.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadProduct();

    return () => controller.abort();
  }, [id]);

  return { product, loading, error };
}
