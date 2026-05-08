interface Props {
  title: string;
  value: string;
}

export default function AnalysisCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <p className="text-zinc-400 text-sm mb-3">

        {title}

      </p>

      <h3 className="text-lg font-semibold text-white leading-relaxed">

        {value}

      </h3>

    </div>
  );
}