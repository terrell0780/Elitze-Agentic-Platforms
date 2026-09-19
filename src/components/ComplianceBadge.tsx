import { complianceStateMeta, type ComplianceState } from "@/lib/trust";

function Icon({ kind, color }: { kind: string; color: string }) {
  const common = { stroke: color, strokeWidth: 1.8, fill: "none" as const };
  if (kind === "check")
    return (
      <svg width="12" height="12" viewBox="0 0 14 14" {...common}>
        <path d="M2.5 7.5l3 3 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (kind === "clock")
    return (
      <svg width="12" height="12" viewBox="0 0 14 14" {...common}>
        <circle cx="7" cy="7" r="5.2" />
        <path d="M7 4.2V7l1.9 1.6" strokeLinecap="round" />
      </svg>
    );
  if (kind === "shield")
    return (
      <svg width="12" height="12" viewBox="0 0 14 14" {...common}>
        <path d="M7 1.8l4.2 1.7v3.1c0 2.6-1.8 4.6-4.2 5.6-2.4-1-4.2-3-4.2-5.6V3.5L7 1.8z" />
      </svg>
    );
  return (
    <svg width="12" height="12" viewBox="0 0 14 14">
      <circle cx="7" cy="7" r="2.6" fill={color} />
    </svg>
  );
}

/** Small inline pill — safe for dense rows. */
export function ComplianceBadge({
  name,
  state,
}: {
  name: string;
  state: ComplianceState;
}) {
  const m = complianceStateMeta[state];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[12.5px]"
      style={{
        borderColor: `${m.accent}33`,
        background: `${m.accent}0f`,
        color: "rgba(244,245,249,0.82)",
      }}
      title={`${name} — ${m.label}`}
    >
      <Icon kind={m.icon} color={m.accent} />
      {name}
      <span className="text-[10.5px] uppercase tracking-[0.1em]" style={{ color: m.accent }}>
        {m.label}
      </span>
    </span>
  );
}

/** Full card with the honest status sentence. */
export function ComplianceCard({
  name,
  state,
  status,
}: {
  name: string;
  state: ComplianceState;
  status: string;
}) {
  const m = complianceStateMeta[state];
  return (
    <div className="bg-[#070810] p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[15px] font-medium">{name}</h3>
        <span
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.12em]"
          style={{ background: `${m.accent}18`, color: m.accent }}
        >
          <Icon kind={m.icon} color={m.accent} />
          {m.label}
        </span>
      </div>
      <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted">{status}</p>
    </div>
  );
}
