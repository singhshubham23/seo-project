import { getArticleBySlug } from "@/data/articles";
import { generatePageMetadata } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const SLUG = "mechanical-vs-membrane-keyboard";
const article = getArticleBySlug(SLUG);

export const metadata = generatePageMetadata({
  title: article.title,
  description: article.description,
  slug: SLUG,
});

export default function MechanicalVsMembranePage() {
  return (
    <ArticleLayout
      article={article}
      breadcrumbItems={[{ name: article.h1 }]}
    >
      <p>
        If you are shopping for a new keyboard, the first big decision is whether to go
        with a <strong>mechanical</strong> or <strong>membrane</strong> keyboard. Both have
        their strengths, and the right choice depends on your usage, budget, and
        preferences.
      </p>

      <p>
        This guide breaks down the key differences to help you make an informed decision.
      </p>

      <h2>How Do They Work?</h2>

      <h3>Mechanical Keyboards</h3>
      <p>
        Each key has its own <strong>individual mechanical switch</strong> beneath it. When
        you press a key, a physical mechanism (spring + metal contact) registers the
        keystroke. This gives each key a distinct, consistent feel.
      </p>

      <h3>Membrane Keyboards</h3>
      <p>
        Membrane keyboards use a <strong>pressure pad system</strong>. Beneath the keys lies
        a rubber dome sheet. When you press a key, the rubber dome collapses and pushes two
        membrane layers together to complete a circuit. The feel is mushier and less
        distinct.
      </p>

      <h2>Detailed Comparison</h2>

      <FadeIn>
        <div className="overflow-x-auto -mx-4 sm:mx-0 my-6">
          <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-left font-semibold">Mechanical</th>
                <th className="px-4 py-3 text-left font-semibold">Membrane</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-900">Typing Feel</td>
                <td className="px-4 py-3 text-slate-600">Tactile, distinct per-key feel</td>
                <td className="px-4 py-3 text-slate-600">Soft, mushy feel</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">Durability</td>
                <td className="px-4 py-3 text-slate-600">50–100 million keystrokes</td>
                <td className="px-4 py-3 text-slate-600">5–10 million keystrokes</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-900">Noise Level</td>
                <td className="px-4 py-3 text-slate-600">Varies by switch (Blue=loud, Red=quiet)</td>
                <td className="px-4 py-3 text-slate-600">Generally quiet</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">Price (India)</td>
                <td className="px-4 py-3 text-slate-600">₹1,200 – ₹2,000+ (budget range)</td>
                <td className="px-4 py-3 text-slate-600">₹300 – ₹1,000</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-900">Key Rollover</td>
                <td className="px-4 py-3 text-slate-600">N-Key Rollover (common)</td>
                <td className="px-4 py-3 text-slate-600">Limited (usually 3–6 keys)</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">Gaming</td>
                <td className="px-4 py-3 text-slate-600">Excellent — fast, responsive</td>
                <td className="px-4 py-3 text-slate-600">Adequate for casual gaming</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-900">Typing (Long Sessions)</td>
                <td className="px-4 py-3 text-slate-600">Less fatigue, better ergonomics</td>
                <td className="px-4 py-3 text-slate-600">Can cause fatigue over time</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">Repairability</td>
                <td className="px-4 py-3 text-slate-600">Individual switches can be replaced</td>
                <td className="px-4 py-3 text-slate-600">Entire membrane sheet must be replaced</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-900">Weight</td>
                <td className="px-4 py-3 text-slate-600">Heavier (more stable)</td>
                <td className="px-4 py-3 text-slate-600">Lighter (more portable)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeIn>

      <h2>When to Choose a Mechanical Keyboard</h2>

      <p>A mechanical keyboard is the better choice if you:</p>

      <ul>
        <li>Type frequently for work, coding, or content creation</li>
        <li>Play games (especially competitive multiplayer)</li>
        <li>Want a keyboard that lasts for years</li>
        <li>Enjoy a satisfying, tactile typing experience</li>
        <li>Can spend ₹1,200–₹2,000 on a keyboard</li>
      </ul>

      <h2>When to Choose a Membrane Keyboard</h2>

      <p>A membrane keyboard may be better if you:</p>

      <ul>
        <li>Need a very quiet keyboard (e.g., shared office space)</li>
        <li>Have a very tight budget (under ₹500)</li>
        <li>Only use a keyboard occasionally</li>
        <li>Need a lightweight, portable keyboard</li>
        <li>Prefer a softer, cushioned key press</li>
      </ul>

      <h2>The Budget Argument: Are Cheap Mechanical Keyboards Worth It?</h2>

      <p>
        One common concern is whether budget mechanical keyboards (under ₹2,000) are
        actually good, or if you are better off with a premium membrane keyboard at the
        same price.
      </p>

      <p>
        The answer: <strong>budget mechanical keyboards offer significantly better value</strong>.
        Even the most affordable mechanical keyboards (around ₹1,300) use switches rated for
        50 million keystrokes — far exceeding any membrane keyboard at any price. The typing
        feel and gaming responsiveness are also noticeably superior.
      </p>

      <p>
        The trade-offs at this price are mainly in keycap quality, build materials (plastic
        vs. aluminium), and software features — not in the fundamental switch quality.
      </p>

      <div className="tip-box">
        <p>
          <strong>💡 Ready to switch?</strong> Check our{" "}
          <Link href="/best-mechanical-keyboard-under-2000">
            Best Mechanical Keyboards Under ₹2,000
          </Link>{" "}
          guide to find the right one for you.
        </p>
      </div>
    </ArticleLayout>
  );
}
