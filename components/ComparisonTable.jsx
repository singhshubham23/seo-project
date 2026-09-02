export default function ComparisonTable({ products }) {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle">
        <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden text-sm">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="px-4 py-3 text-left font-semibold">Keyboard</th>
              <th className="px-4 py-3 text-left font-semibold">Price</th>
              <th className="px-4 py-3 text-left font-semibold">Switch</th>
              <th className="px-4 py-3 text-left font-semibold">Layout</th>
              <th className="px-4 py-3 text-left font-semibold">Backlight</th>
              <th className="px-4 py-3 text-left font-semibold">Key Rollover</th>
              <th className="px-4 py-3 text-left font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {products.map((product, index) => (
              <tr
                key={product.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50"
                } hover:bg-amber-50 transition-colors`}
              >
                <td className="px-4 py-3 font-medium text-slate-900 whitespace-nowrap">
                  {product.name}
                </td>
                <td className="px-4 py-3 text-emerald-600 font-semibold whitespace-nowrap">
                  ₹{product.price.toLocaleString("en-IN")}
                </td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                  {product.switchType}
                </td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                  {product.layout}
                </td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                  {product.backlight}
                </td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                  {product.keyRollover}
                </td>
                <td className="px-4 py-3 text-slate-600 min-w-[180px]">
                  {product.bestFor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
