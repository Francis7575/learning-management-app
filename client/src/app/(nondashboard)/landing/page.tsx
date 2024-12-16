"use client";
import { useCarousel } from "@/hooks/useCarousel";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="landing-skeleton">
      <div className="landing-skeleton-hero">
        <div className="landing-skeleton-hero-content">
          <Skeleton className="landing-skeleton-title" />
          <Skeleton className="landing-skeleton-subtitle" />
          <Skeleton className="landing-skeleton-subtitle-secondary" />
          <Skeleton className="landing-skeleton-button" />
        </div>
        <Skeleton className="landing-skeleton-hero-image" />
      </div>

      <div className="landing-skeleton-featured">
        <Skeleton className="landing-skeleton-featured-title" />
        <Skeleton className="landing-skeleton-featured-description" />

        <div className="landing-skeleton-tags">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Skeleton key={index} className="landing-skeleton-tag" />
          ))}
        </div>

        <div className="landing-skeleton-courses">
          {[1, 2, 3, 4].map((_, index) => (
            <Skeleton key={index} className="landing-skeleton-course-card" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  const currentImage = useCarousel({ totalImages: 3 });
  console.log(currentImage);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing-hero"
      >
        <div className="landing-hero-content">
          <h1 className="landing-title">Courses</h1>
          <p className="landing-description">
            This is a list of the courses you can enroll in.
            <br />
            Courses when you need them and want them.
          </p>
          <div className="landing-cta">
            <Link href="/search">
              <div className="landing-cta-button">Search for Courses</div>
            </Link>
          </div>
        </div>
        <div className="landing-hero-images">
          {["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"].map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt={`Hero Banner ${idx + 1}`}
              fill
              priority={idx === currentImage}
              sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`landing-hero-image 
								${idx === currentImage ? "landing-hero-image--active" : ""}`}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3, once: true }}
        className="landing-featured"
      >
        <h2 className="landing-featured">Featured Courses</h2>
        <p className="landing-featured-description">
          Whether you're a beginner or looking to advance your skills, we offer
          the perfect courses for every industry. Prepare for your entire
          learning journey and unlock your full potential.
        </p>
        <div className="landing-tags">
          {[
            "web development",
            "enterprise IT",
            "react nextjs",
            "web development",
            "backend development",
          ].map((tag, idx) => (
            <span key={idx} className="landing-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="landing-courses"></div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
