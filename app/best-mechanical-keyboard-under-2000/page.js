import { getArticleBySlug } from "@/data/articles";
import { keyboards, getKeyboardsSortedByPrice } from "@/data/keyboards";
import { generatePageMetadata, generateProductListSchema, JsonLd } from "@/lib/seo";
import { SITE_URL } from "@/data/articles";
import ArticleLayout from "@/components/ArticleLayout";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const SLUG = "best-mechanical-keyboard-under-2000";
const article = getArticleBySlug(SLUG);
const sortedKeyboards = getKeyboardsSortedByPrice(keyboards);

export const metadata = generatePageMetadata({
  title: article.title,
  description: article.description,
  slug: SLUG,
});

export default function BestMechanicalKeyboardPage() {
  return (
    <ArticleLayout
      article={article}
      breadcrumbItems={[{ name: article.h1 }]}
    >
      <JsonLd
        data={generateProductListSchema(
          sortedKeyboards,
          `${SITE_URL}/${SLUG}`
        )}
      />

      <p>
        Mechanical keyboards have become incredibly accessible in India. Whether you are
        a gamer looking for faster response times, a programmer who types for hours, or
        simply someone who wants a better typing experience — there are excellent options
        available under ₹2,000.
      </p>

      <p>
        In this guide, we compare the top mechanical keyboards available under ₹2,000
        on Amazon India, covering brands like <strong>Redgear</strong>,{" "}
        <strong>Cosmic Byte</strong>, <strong>Redragon</strong>,{" "}
        <strong>Zebronics</strong>, and more. Each keyboard is evaluated on build quality,
        switch type, features, and value for money.
      </p>

      <div className="info-box">
        <p>
          <strong>💡 Note:</strong> Prices listed below are indicative and were last
          checked in September 2026. Please verify the current price on Amazon before
          purchasing.
        </p>
      </div>

      <h2>What to Look for in a Budget Mechanical Keyboard</h2>

      <p>
        Before diving into our picks, here are the key factors to consider when choosing
        a mechanical keyboard under ₹2,000:
      </p>

      <ul>
        <li>
          <strong>Switch Type:</strong> Blue switches are clicky and loud, Red switches
          are smooth and quiet, Brown switches are in between. Most budget keyboards
          in India come with Blue switches. Learn more in our{" "}
          <Link href="/red-vs-blue-vs-brown-switches">switch comparison guide</Link>.
        </li>
        <li>
          <strong>Build Quality:</strong> Look for metal base plates or aluminium panels.
          They add weight and durability.
        </li>
        <li>
          <strong>Key Rollover:</strong> N-Key Rollover (NKRO) means every key press
          registers simultaneously — important for gaming.
        </li>
        <li>
          <strong>Backlight:</strong> Options range from single-colour LEDs to per-key
          RGB. Per-key RGB costs more.
        </li>
        <li>
          <strong>Layout:</strong> Full-size (104 keys) includes a numpad. TKL (87 keys)
          saves desk space. Consider your needs.
        </li>
      </ul>

      <h2>Top {sortedKeyboards.length} Mechanical Keyboards Under ₹2,000</h2>

      <div className="space-y-6 my-8">
        {sortedKeyboards.map((keyboard, index) => (
          <FadeIn key={keyboard.id} delay={index * 80}>
            <ProductCard product={keyboard} rank={index + 1} />
          </FadeIn>
        ))}
      </div>

      <h2>Quick Comparison Table</h2>

      <p>
        Here is a side-by-side comparison of all the keyboards covered in this guide:
      </p>

      <FadeIn>
        <div className="my-6">
          <ComparisonTable products={sortedKeyboards} />
        </div>
      </FadeIn>

      <h2>Which Keyboard Should You Buy?</h2>

      <p>
        The best keyboard for you depends on your specific needs:
      </p>

      <ul>
        <li>
          <strong>Tightest budget (under ₹1,500):</strong> The{" "}
          <strong>Cosmic Byte CB-GK-02 Corona</strong> and{" "}
          <strong>Zebronics Zeb-Max Plus V2</strong> offer the most affordable entry
          into mechanical keyboards.
        </li>
        <li>
          <strong>Best for gaming:</strong> The{" "}
          <strong>Cosmic Byte CB-GK-16 Firefly</strong> with per-key RGB and software
          support, or the <strong>Redragon K552 Kumara</strong> for a compact TKL layout.
        </li>
        <li>
          <strong>Quieter typing:</strong> Look for Red switch options like the{" "}
          <strong>Zebronics Zeb-Max Plus V2</strong> or <strong>Redragon K552</strong>.
        </li>
        <li>
          <strong>Brand preference:</strong> If you prefer established brands, the{" "}
          <strong>HP GK320</strong> offers a reliable option from a trusted name.
        </li>
      </ul>

      <div className="tip-box">
        <p>
          <strong>💡 Tip:</strong> Not sure about the difference between mechanical
          and membrane keyboards? Check our{" "}
          <Link href="/mechanical-vs-membrane-keyboard">
            Mechanical vs Membrane comparison guide
          </Link>.
        </p>
      </div>
    </ArticleLayout>
  );
}
