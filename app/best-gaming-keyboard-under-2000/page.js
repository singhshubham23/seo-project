import { getArticleBySlug } from "@/data/articles";
import { getKeyboardsByCategory } from "@/data/keyboards";
import { generatePageMetadata, generateProductListSchema, JsonLd } from "@/lib/seo";
import { SITE_URL } from "@/data/articles";
import ArticleLayout from "@/components/ArticleLayout";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const SLUG = "best-gaming-keyboard-under-2000";
const article = getArticleBySlug(SLUG);
const gamingKeyboards = getKeyboardsByCategory("gaming");

export const metadata = generatePageMetadata({
  title: article.title,
  description: article.description,
  slug: SLUG,
});

export default function BestGamingKeyboardPage() {
  return (
    <ArticleLayout
      article={article}
      breadcrumbItems={[{ name: article.h1 }]}
    >
      <JsonLd
        data={generateProductListSchema(
          gamingKeyboards,
          `${SITE_URL}/${SLUG}`
        )}
      />

      <p>
        Gaming on a budget does not mean compromising on your keyboard. A good mechanical
        keyboard can significantly improve your gaming experience — faster response times,
        better key registration, and a more satisfying feel compared to membrane keyboards.
      </p>

      <p>
        In this guide, we focus on the best <strong>gaming-oriented mechanical keyboards
        under ₹2,000</strong> available in India. We prioritise features that matter for
        gaming: anti-ghosting, N-key rollover, responsive switches, and durable build quality.
      </p>

      <div className="info-box">
        <p>
          <strong>💡 Note:</strong> Prices are indicative. Check Amazon India for the
          latest pricing and availability.
        </p>
      </div>

      <h2>What Makes a Keyboard Good for Gaming?</h2>

      <p>
        When evaluating keyboards for gaming, these features matter most:
      </p>

      <ul>
        <li>
          <strong>Anti-Ghosting / N-Key Rollover:</strong> Ensures that multiple
          simultaneous key presses all register correctly. Essential for fast-paced games
          where you press many keys at once.
        </li>
        <li>
          <strong>Switch Response:</strong> Mechanical switches actuate faster than membrane
          keys. Linear switches (Red) are generally preferred for gaming due to their smooth
          action. Read our{" "}
          <Link href="/red-vs-blue-vs-brown-switches">switch comparison guide</Link>{" "}
          for details.
        </li>
        <li>
          <strong>Build Durability:</strong> Gaming sessions can be intense. A sturdy build
          with a metal base plate helps the keyboard stay put during gameplay.
        </li>
        <li>
          <strong>Macro Support:</strong> Some gaming keyboards offer programmable macros,
          which can be useful for MMOs and strategy games.
        </li>
      </ul>

      <h2>Top Gaming Keyboards Under ₹2,000</h2>

      <div className="space-y-6 my-8">
        {gamingKeyboards.map((keyboard, index) => (
          <FadeIn key={keyboard.id} delay={index * 80}>
            <ProductCard product={keyboard} rank={index + 1} />
          </FadeIn>
        ))}
      </div>

      <h2>Quick Comparison</h2>

      <FadeIn>
        <div className="my-6">
          <ComparisonTable products={gamingKeyboards} />
        </div>
      </FadeIn>

      <h2>Gaming Tips for Budget Mechanical Keyboards</h2>

      <p>
        Here are some tips to get the most out of your budget gaming keyboard:
      </p>

      <ol>
        <li>
          <strong>Use the Windows key lock</strong> feature (available on most gaming
          keyboards) to prevent accidental presses during gameplay.
        </li>
        <li>
          <strong>Clean your keyboard regularly.</strong> Mechanical switches can accumulate
          dust. Use compressed air to clean between the keys.
        </li>
        <li>
          <strong>Consider a TKL layout</strong> if you need more mouse space. Keyboards
          like the Redragon K552 save significant desk area.
        </li>
        <li>
          <strong>Adjust LED brightness</strong> to reduce distraction during competitive
          play, or turn it off entirely for focused gaming sessions.
        </li>
      </ol>

      <div className="tip-box">
        <p>
          <strong>💡 New to mechanical keyboards?</strong> Understand the key differences
          in our{" "}
          <Link href="/mechanical-vs-membrane-keyboard">
            Mechanical vs Membrane comparison
          </Link>.
        </p>
      </div>
    </ArticleLayout>
  );
}
