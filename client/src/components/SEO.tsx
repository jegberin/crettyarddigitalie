import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  noindex?: boolean;
  ogType?: "website" | "article";
  publishedTime?: string; // ISO date, only used when ogType="article"
  tags?: string[]; // only used when ogType="article"
  ogImage?: string; // absolute or root-relative path
}

function upsertMeta(
  selector: string,
  attr: "name" | "property",
  key: string,
  value: string,
) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function removeMeta(selector: string) {
  document.head.querySelectorAll(selector).forEach((el) => el.remove());
}

export function SEO({
  title,
  description,
  canonicalPath = "/",
  noindex = false,
  ogType = "website",
  publishedTime,
  tags,
  ogImage,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);

    // og:type
    upsertMeta('meta[property="og:type"]', "property", "og:type", ogType);

    // og:image (per-page override)
    if (ogImage) {
      const url = ogImage.startsWith("http")
        ? ogImage
        : `https://crettyarddigital.ie${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;
      upsertMeta('meta[property="og:image"]', "property", "og:image", url);
      upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", url);
    }

    // article:* meta — only for ogType=article; clean them up otherwise
    if (ogType === "article") {
      if (publishedTime) {
        upsertMeta(
          'meta[property="article:published_time"]',
          "property",
          "article:published_time",
          publishedTime,
        );
      }
      removeMeta('meta[property="article:tag"]');
      if (tags && tags.length > 0) {
        for (const tag of tags) {
          const el = document.createElement("meta");
          el.setAttribute("property", "article:tag");
          el.setAttribute("content", tag);
          document.head.appendChild(el);
        }
      }
    } else {
      removeMeta('meta[property="article:published_time"]');
      removeMeta('meta[property="article:tag"]');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = `https://crettyarddigital.ie${canonicalPath}`;
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    }

    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (noindex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.name = "robots";
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute("content", "noindex,nofollow");
    } else {
      if (robotsMeta) {
        robotsMeta.setAttribute("content", "index,follow");
      }
    }
  }, [title, description, canonicalPath, noindex, ogType, publishedTime, tags, ogImage]);

  return null;
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Crettyard Digital",
    description: "Web design, Microsoft 365 setup, managed IT, cybersecurity, and network solutions for small businesses across Ireland.",
    url: "https://crettyarddigital.ie",
    email: "info@crettyarddigital.ie",
    telephone: "+353879700701",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Crettyard",
      addressRegion: "Co. Laois",
      addressCountry: "IE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.8534,
      longitude: -7.1574
    },
    areaServed: { "@type": "Country", name: "Ireland" },
    serviceType: ["Web Design", "Microsoft 365 Setup", "Managed IT Support", "Network & Wi-Fi Solutions", "Cybersecurity", "Business Email Setup", "Website Maintenance"],
    priceRange: "€€"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  areaServed,
}: {
  name: string;
  description: string;
  areaServed?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "Crettyard Digital",
      url: "https://crettyarddigital.ie"
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: areaServed ?? "Ireland"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ items }: { items: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AboutPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Crettyard Digital",
    description: "Crettyard Digital is run by Joey, bringing enterprise IT experience to small businesses across Ireland. Plain English, no jargon, direct communication.",
    url: "https://crettyarddigital.ie/about.html",
    mainEntity: {
      "@type": "Person",
      name: "Joey",
      jobTitle: "Founder",
      worksFor: {
        "@type": "LocalBusiness",
        name: "Crettyard Digital"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PortfolioSchema() {
  const projects = [
    { id: "project-bm-custom-furniture", name: "BM Custom Furniture", url: "https://bmcustomfurniture.ie", description: "Bespoke fitted furniture and wall panelling website with strong local SEO for Carlow and Laois." },
    { id: "project-go-green-steam-clean", name: "Go Green Steam Clean", url: "https://gogreensteamclean.ie", description: "Eco-friendly steam cleaning website with conversion-optimised booking CTAs." },
    { id: "project-nurney-plant-civil", name: "Nurney Plant and Civil", url: "https://nurneyplantandcivil.ie", description: "Integrated Digital Foundation project: corporate website, Microsoft 365, and business-grade Wi-Fi for a plant hire and civil engineering firm in County Carlow." },
    { id: "project-more-than-points", name: "More Than Points", url: "https://morethanpoints.ie", description: "Teen and parent coaching website with empathetic, trust-building copy and clear service structure." },
    { id: "project-crettyard-ie", name: "Crettyard.ie", url: "https://crettyard.ie", description: "Community website for Crettyard (Co. Laois) with local business directory, heritage content, and public notice board." },
  ];

  const reviews = [
    { author: "Barry", business: "BM Custom Furniture", rating: 5, text: "Joey built us a website that actually looks as good as the furniture we make. Within weeks of launching, we were getting enquiries from people who found us on Google \u2014 that never happened before. Brilliant service, no messing." },
    { author: "Darren", business: "Go Green Steam Clean", rating: 5, text: "I had no website and no idea where to start. Joey made the whole thing painless \u2014 explained everything in plain English and delivered a site that brings in new bookings every week. Best investment I've made in my business." },
    { author: "Brian", business: "Nurney Plant and Civil", rating: 5, text: "Joey did the lot for us \u2014 a professional website, Microsoft 365 so we have proper email between the office and the lads on site, and sorted our Wi-Fi so it works in every room. Can't recommend him enough." },
  ];

  const base = "https://crettyarddigital.ie/portfolio";

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Crettyard Digital Portfolio & Case Studies",
    description: "Case studies of web design, Microsoft 365, and IT projects delivered for small businesses across Ireland.",
    url: base,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${base}#${p.id}`,
        item: {
          "@type": "CreativeWork",
          name: p.name,
          url: p.url,
          description: p.description,
          creator: {
            "@type": "LocalBusiness",
            name: "Crettyard Digital",
            url: "https://crettyarddigital.ie",
          },
        },
      })),
    },
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Crettyard Digital",
    url: "https://crettyarddigital.ie",
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewBody: r.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "Crettyard Digital",
      },
      publisher: { "@type": "Organization", name: r.business },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: String(reviews.length),
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
}

export function BlogPostingSchema({
  title,
  description,
  datePublished,
  dateModified,
  author,
  url,
  coverImage,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
  coverImage?: string;
}) {
  const absoluteImage = coverImage
    ? coverImage.startsWith("http")
      ? coverImage
      : `https://crettyarddigital.ie${coverImage.startsWith("/") ? "" : "/"}${coverImage}`
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: "Crettyard Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://crettyarddigital.ie/favicon.png",
      },
    },
    ...(absoluteImage ? { image: absoluteImage } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Crettyard Digital",
    description: "Book a free, no-obligation consultation about your website, email, or network needs.",
    url: "https://crettyarddigital.ie/contact.html",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Crettyard Digital",
      url: "https://crettyarddigital.ie",
      email: "info@crettyarddigital.ie",
      telephone: "+353879700701",
      areaServed: "Ireland"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
