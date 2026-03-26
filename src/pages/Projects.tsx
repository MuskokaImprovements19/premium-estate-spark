import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import Layout from "@/components/Layout";
import { IMAGES } from "@/lib/images";
import { useInstagramFeed, InstagramPost } from "@/hooks/useInstagramFeed";
import { Skeleton } from "@/components/ui/skeleton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5 } }),
};

const fallbackImages = [
  IMAGES.boathouse, IMAGES.kitchen, IMAGES.dock, IMAGES.deck,
  IMAGES.lakefront, IMAGES.cottage, IMAGES.construction, IMAGES.garbageLakeside,
];

const InstagramIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
);

const PostCard = ({ post, index }: { post: InstagramPost; index: number }) => {
  const imgSrc = post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url;

  return (
    <motion.a
      key={post.id}
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index}
      className={`overflow-hidden rounded-lg group relative ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <img
        src={imgSrc}
        alt={post.caption?.slice(0, 80) || `Instagram post ${index + 1}`}
        className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}
        loading="lazy"
      />
      {post.media_type === "VIDEO" && (
        <div className="absolute top-3 right-3 bg-black/60 rounded-full p-1.5">
          <Play className="h-4 w-4 text-white fill-white" />
        </div>
      )}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
        <InstagramIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {post.caption && (
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-xs line-clamp-2">{post.caption}</p>
        </div>
      )}
    </motion.a>
  );
};

const FallbackCard = ({ img, index }: { img: string; index: number }) => (
  <motion.a
    href="https://www.instagram.com/muskokaimprovements/"
    target="_blank"
    rel="noopener noreferrer"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    custom={index}
    className={`overflow-hidden rounded-lg group relative ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
  >
    <img src={img} alt={`Muskoka Improvements project ${index + 1}`} className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${index === 0 ? "aspect-square" : "aspect-[4/3]"}`} loading="lazy" />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
      <InstagramIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.a>
);

const Projects = () => {
  const { data: posts, isLoading, isError } = useInstagramFeed();
  const hasLiveFeed = !isError && posts && posts.length > 0;

  return (
    <Layout>
      <section className="section-padding pt-16 pb-12 max-w-7xl mx-auto">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">Portfolio</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Our Projects</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl">
          {hasLiveFeed
            ? "Latest from our Instagram — real projects across Muskoka, updated automatically."
            : "A look at some of our work across Muskoka. Follow us on Instagram for the latest updates and project highlights."}
        </motion.p>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          href="https://www.instagram.com/muskokaimprovements/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline"
        >
          <InstagramIcon /> @muskokaimprovements <ExternalLink className="h-4 w-4" />
        </motion.a>
      </section>

      <section className="section-padding pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            Array.from({ length: 9 }).map((_, i) => (
              <Skeleton key={i} className={`w-full rounded-lg ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/3]"}`} />
            ))
          ) : hasLiveFeed ? (
            posts.map((post, i) => <PostCard key={post.id} post={post} index={i} />)
          ) : (
            fallbackImages.map((img, i) => <FallbackCard key={i} img={img} index={i} />)
          )}
        </div>
      </section>

      <section className="bg-card py-16 text-center">
        <div className="section-padding">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">See More on Instagram</h2>
          <p className="text-muted-foreground mb-6">Follow us for daily project updates, before & afters, and Muskoka inspiration.</p>
          <a href="https://www.instagram.com/muskokaimprovements/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wide">
            <InstagramIcon /> @muskokaimprovements
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
