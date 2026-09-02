import { getArticleBySlug } from "@/data/articles";
import { generatePageMetadata } from "@/lib/seo";
import ArticleLayout from "@/components/ArticleLayout";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const SLUG = "red-vs-blue-vs-brown-switches";
const article = getArticleBySlug(SLUG);

export const metadata = generatePageMetadata({
  title: article.title,
  description: article.description,
  slug: SLUG,
});

export default function SwitchGuidePage() {
  return (
    <ArticleLayout
      article={article}
      breadcrumbItems={[{ name: article.h1 }]}
    >
      <p>
        Choosing the right switch type is one of the most important decisions when buying
        a mechanical keyboard. The three most common switch types — <strong>Red</strong>,{" "}
        <strong>Blue</strong>, and <strong>Brown</strong> — each offer a distinctly
        different typing experience.
      </p>

      <p>
        This guide explains how each switch works, what it feels and sounds like, and
        which one is best suited for your needs.
      </p>

      <h2>Understanding Mechanical Switches</h2>

      <p>
        Every mechanical switch has the same basic components: a <strong>stem</strong>,{" "}
        a <strong>spring</strong>, and a <strong>housing</strong>. The way these components
        interact determines the switch&apos;s feel, sound, and actuation force. Switches are
        categorised into three types:
      </p>

      <ul>
        <li><strong>Linear</strong> — Smooth keystroke with no bump or click (e.g., Red)</li>
        <li><strong>Tactile</strong> — A noticeable bump midway through the keystroke (e.g., Brown)</li>
        <li><strong>Clicky</strong> — A tactile bump plus an audible click sound (e.g., Blue)</li>
      </ul>

      {/* Switch Comparison Table */}
      <h2>Red vs Blue vs Brown: At a Glance</h2>

      <FadeIn>
        <div className="overflow-x-auto -mx-4 sm:mx-0 my-6">
          <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-left font-semibold">🔴 Red (Linear)</th>
                <th className="px-4 py-3 text-left font-semibold">🔵 Blue (Clicky)</th>
                <th className="px-4 py-3 text-left font-semibold">🟤 Brown (Tactile)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-900">Type</td>
                <td className="px-4 py-3 text-slate-600">Linear</td>
                <td className="px-4 py-3 text-slate-600">Clicky</td>
                <td className="px-4 py-3 text-slate-600">Tactile</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">Tactile Bump</td>
                <td className="px-4 py-3 text-slate-600">No</td>
                <td className="px-4 py-3 text-slate-600">Yes (pronounced)</td>
                <td className="px-4 py-3 text-slate-600">Yes (subtle)</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-900">Click Sound</td>
                <td className="px-4 py-3 text-slate-600">No</td>
                <td className="px-4 py-3 text-slate-600">Yes (loud)</td>
                <td className="px-4 py-3 text-slate-600">No</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">Actuation Force</td>
                <td className="px-4 py-3 text-slate-600">~45g (light)</td>
                <td className="px-4 py-3 text-slate-600">~50–60g (medium)</td>
                <td className="px-4 py-3 text-slate-600">~45–55g (medium)</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-900">Noise Level</td>
                <td className="px-4 py-3 text-slate-600">Quiet</td>
                <td className="px-4 py-3 text-slate-600">Loud</td>
                <td className="px-4 py-3 text-slate-600">Moderate</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">Best For</td>
                <td className="px-4 py-3 text-slate-600">Gaming</td>
                <td className="px-4 py-3 text-slate-600">Typing</td>
                <td className="px-4 py-3 text-slate-600">Mixed use</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-3 font-medium text-slate-900">Office Friendly?</td>
                <td className="px-4 py-3 text-slate-600">Yes</td>
                <td className="px-4 py-3 text-slate-600">No (too loud)</td>
                <td className="px-4 py-3 text-slate-600">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeIn>

      {/* Individual Switch Sections */}
      <h2>🔴 Red Switches (Linear)</h2>

      <FadeIn>
        <div className="vs-section">
          <p className="!text-slate-700">
            Red switches provide a <strong>smooth, uninterrupted keystroke</strong> from top
            to bottom. There is no tactile bump and no click — just a straight-down press
            with consistent resistance.
          </p>

          <h3 className="!mt-4">Who should choose Red?</h3>
          <ul className="text-sm text-slate-600 mt-2 space-y-1">
            <li>• <strong>Gamers</strong> — The lighter actuation force allows rapid key presses</li>
            <li>• <strong>Fast typists</strong> — Smooth action helps with speed</li>
            <li>• <strong>Office workers</strong> — Quiet operation in shared spaces</li>
            <li>• <strong>Anyone who dislikes clicky sounds</strong></li>
          </ul>

          <p className="text-sm text-slate-600 mt-3">
            <strong>Budget options in India:</strong> Zebronics Zeb-Max Plus V2 (₹1,399),
            Redragon K552 Kumara (₹1,999)
          </p>
        </div>
      </FadeIn>

      <h2>🔵 Blue Switches (Clicky)</h2>

      <FadeIn>
        <div className="vs-section">
          <p className="!text-slate-700">
            Blue switches are the <strong>most distinctive</strong> mechanical switches. They
            feature a pronounced tactile bump at the actuation point and produce an audible
            &quot;click&quot; sound. This combination provides clear feedback that the key has
            registered.
          </p>

          <h3 className="!mt-4">Who should choose Blue?</h3>
          <ul className="text-sm text-slate-600 mt-2 space-y-1">
            <li>• <strong>Typists and writers</strong> — The click provides satisfying feedback</li>
            <li>• <strong>Programmers</strong> — Tactile feedback helps with accuracy</li>
            <li>• <strong>First-time mechanical keyboard users</strong> — The &quot;classic&quot; mechanical feel</li>
            <li>• <strong>Anyone with a private workspace</strong> — They are loud!</li>
          </ul>

          <p className="text-sm text-slate-600 mt-3">
            <strong>Budget options in India:</strong> Most budget keyboards (Cosmic Byte,
            Redgear, Ant Esports) come with Blue switches — it&apos;s the most common option
            under ₹2,000.
          </p>
        </div>
      </FadeIn>

      <h2>🟤 Brown Switches (Tactile)</h2>

      <FadeIn>
        <div className="vs-section">
          <p className="!text-slate-700">
            Brown switches offer a <strong>middle ground</strong> between Red and Blue. They
            have a subtle tactile bump (so you feel when the key actuates) but without the
            loud click sound. This makes them versatile for both typing and gaming.
          </p>

          <h3 className="!mt-4">Who should choose Brown?</h3>
          <ul className="text-sm text-slate-600 mt-2 space-y-1">
            <li>• <strong>Mixed-use users</strong> — Both typing and gaming</li>
            <li>• <strong>Office gamers</strong> — Tactile feedback without the noise</li>
            <li>• <strong>Undecided users</strong> — A safe, versatile first choice</li>
            <li>• <strong>Shared spaces</strong> — Quieter than Blue, more feedback than Red</li>
          </ul>

          <p className="text-sm text-slate-600 mt-3">
            <strong>Availability note:</strong> Brown switches are less common in the
            under-₹2,000 segment in India. You may need to look at the ₹2,000–₹3,000
            range for keyboards with Brown switch options.
          </p>
        </div>
      </FadeIn>

      <h2>Which Switch Should You Pick?</h2>

      <p>
        Here is a simple decision framework:
      </p>

      <ol>
        <li>
          <strong>Primarily gaming?</strong> → Go with <strong>Red</strong> switches
        </li>
        <li>
          <strong>Primarily typing?</strong> → Go with <strong>Blue</strong> switches
        </li>
        <li>
          <strong>Both gaming and typing?</strong> → Go with <strong>Brown</strong> switches
          (or Red if you want it quieter)
        </li>
        <li>
          <strong>Shared/office space?</strong> → Avoid Blue. Choose{" "}
          <strong>Red</strong> or <strong>Brown</strong>
        </li>
        <li>
          <strong>Budget under ₹2,000 in India?</strong> → You will most likely end up
          with <strong>Blue</strong> or <strong>Red</strong>, as these are the most
          commonly available options
        </li>
      </ol>

      <div className="info-box">
        <p>
          <strong>💡 Important:</strong> Most budget mechanical keyboards in India do not
          offer switch choice — they come with a single switch type (usually Blue). If you
          want a specific switch, check the product listing carefully before purchasing.
        </p>
      </div>

      <h2>A Note on Budget Switches</h2>

      <p>
        Budget keyboards in India typically use <strong>Outemu</strong> switches rather
        than Cherry MX. Outemu switches are compatible clones that offer a very similar
        experience at a fraction of the cost. For most users — especially those buying
        their first mechanical keyboard — the difference between Outemu and Cherry MX is
        negligible.
      </p>

      <div className="tip-box">
        <p>
          <strong>💡 Ready to buy?</strong> Now that you understand switch types, head
          to our{" "}
          <Link href="/best-mechanical-keyboard-under-2000">
            Best Mechanical Keyboards Under ₹2,000
          </Link>{" "}
          guide to find the right keyboard.
        </p>
      </div>
    </ArticleLayout>
  );
}
