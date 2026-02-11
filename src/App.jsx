import { useOption } from './context/OptionContext';
import { navigationRationale } from './content/navigationRationale';
import NavWrapper from './components/navigation/NavWrapper';

function MainContent() {
  const option = useOption();
  const rationale = navigationRationale[option] || navigationRationale.a;

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <section
        className="mb-8 rounded-lg border border-[#E0E0E0] bg-[#F5F5F5] p-6"
        aria-labelledby="rationale-heading"
      >
        <h2 id="rationale-heading" className="mb-3 text-base font-bold text-[#333333]">
          {rationale.title}
        </h2>
        <p className="mb-3 text-sm font-medium text-[#333333]">
          {rationale.philosophy}
        </p>
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#666666]">
          Why this direction
        </p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-[#333333]">
          {rationale.why.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="mb-1 text-xs font-semibold text-[#666666]">Best for</p>
        <p className="mb-3 text-sm text-[#333333]">{rationale.bestFor}</p>
        <p className="text-xs font-semibold text-[#666666]">Trade-offs</p>
        <p className="text-sm text-[#333333]">{rationale.tradeoffs}</p>
      </section>
      <p className="text-sm text-[#666666]">
        Resize the window to see desktop (≥1024px) vs mobile. Use the toggle in the top-right to
        switch between Option A, B, and D. Hover nav items for mega menus; on mobile, tap the menu
        icon.
      </p>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavWrapper>
        <MainContent />
      </NavWrapper>
    </div>
  );
}
