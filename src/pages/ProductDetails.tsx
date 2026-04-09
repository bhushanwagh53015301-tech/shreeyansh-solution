import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle, Package, Shield } from "lucide-react";
import { products } from "@/data/products";
import { setPageSeo } from "@/lib/seo";

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  useEffect(() => {
    if (!product) {
      setPageSeo("Product Not Found | Shreeyansh Logitech Solutions", "Requested product page was not found.", {
        robots: "noindex, nofollow",
      });
      return;
    }

    setPageSeo(
      `${product.name} Transportation Support | Shreeyansh Logitech Solutions`,
      `${product.name} transportation support with planned routing and dependable dispatch coordination.`,
      {
        canonicalPath: `/products/${product.slug}`,
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.desc,
          brand: "Shreeyansh Logitech Solutions",
        },
      }
    );
  }, [product]);

  if (!product) {
    return (
      <div className="pt-16 md:pt-20">
        <section className="py-20 bg-section-light">
          <div className="container text-center">
            <h1 className="font-heading text-3xl font-black text-primary mb-3">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">Please choose a product from our materials section.</p>
            <Link to="/products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-bold text-sm">
              Back to Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary-foreground/80 text-sm font-semibold mb-2">Product Details</p>
            <h1 className="font-heading text-3xl md:text-5xl font-black text-primary-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-primary-foreground/85 max-w-2xl text-base md:text-lg">{product.desc}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-card">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl border border-border bg-white p-3 shadow-xl">
              <img src={product.image} alt={product.name} className="w-full rounded-xl object-contain" width={1200} height={700} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="rounded-xl border border-border bg-background p-5 mb-6">
              <p className="text-xs text-muted-foreground mb-1">Overview</p>
              <p className="text-sm text-foreground leading-relaxed">{product.overview}</p>
            </div>

            <div className="mb-6">
              <h2 className="font-heading text-xl font-black text-primary mb-3">Applications</h2>
              <ul className="space-y-2">
                {product.applications.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <Package className="h-4 w-4 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="font-heading text-xl font-black text-primary mb-3">Highlights</h2>
              <ul className="space-y-2">
                {product.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <Shield className="h-4 w-4 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={`/contact?item=${encodeURIComponent(product.name)}`}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-heading font-bold text-sm"
              >
                Enquire for {product.shortName} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 border border-border px-7 py-3.5 rounded-lg font-heading font-bold text-sm text-primary"
              >
                <CheckCircle className="h-4 w-4" /> Back to Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
