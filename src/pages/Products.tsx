import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { setPageSeo } from "@/lib/seo";
import { products } from "@/data/products";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

const Products = () => {
  useEffect(() => {
    setPageSeo(
      "Material Products Transportation | DEF, Color Buckets, Paint Bags",
      "Explore product-focused transportation support for TATA DEF materials, color buckets, and paint bags.",
      {
        canonicalPath: "/products",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Material Products Transportation",
          url: `${window.location.origin}/products`,
        },
      }
    );
  }, []);

  return (
    <div className="pt-16 md:pt-20">
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary-foreground/80 text-sm font-semibold mb-2">Specialized Material Transport</p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4">
              Our <span className="text-secondary">Products</span>
            </h1>
            <p className="text-primary-foreground/85 max-w-2xl text-base sm:text-lg md:text-xl">
              Product-focused logistics support for DEF materials, color buckets, and paint bags across selected routes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16 lg:py-20 bg-card">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((item, i) => (
            <motion.article
              key={item.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="overflow-hidden rounded-2xl border border-secondary/30 bg-secondary/10"
            >
              <div className="h-56 md:h-64 overflow-hidden bg-white">
                <img src={item.image} alt={item.name} className="h-full w-full object-contain p-3" loading="lazy" />
              </div>
              <div className="p-6 md:p-7">
                <h2 className="font-heading text-xl font-black text-primary mb-2">{item.name}</h2>
                <p className="text-muted-foreground font-semibold text-sm mb-4">{item.desc}</p>
                <Link to={`/products/${item.slug}`} className="inline-flex items-center gap-2 text-secondary text-sm font-semibold">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;

