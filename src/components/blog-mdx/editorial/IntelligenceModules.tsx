import { motion } from "framer-motion";
import { Sparkles, TrendingUp, TrendingDown, MapPin } from "lucide-react";

const NAVY = "#0F2340";
const IVORY = "#FAF8F4";
const CHARCOAL = "#1E1E1E";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
} as const;

export const AISnapshot = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ rotate: -1, y: -4 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="relative rounded-[20px] p-7 h-full border shadow-[0_24px_60px_-30px_rgba(15,35,64,0.45)]"
    style={{ background: IVORY, borderColor: "rgba(15,35,64,0.08)" }}
  >
    <div className="flex items-center justify-between mb-5">
      <span
        className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
        style={{ background: NAVY, color: IVORY }}
      >
        <Sparkles className="w-3 h-3" /> AI Assisted
      </span>
      <span className="text-[11px] tracking-wide" style={{ color: "rgba(30,30,30,0.55)" }}>
        Generated for Delhi NCR
      </span>
    </div>
    <h3 className="text-[24px] leading-[1.15] font-semibold mb-5" style={{ color: CHARCOAL, fontFamily: "Manrope, sans-serif" }}>
      AI Market Snapshot
    </h3>
    <ul className="space-y-3.5">
      {[
        { label: "Airport demand", value: "+18%", up: true },
        { label: "Metro occupancy", value: "+9%", up: true },
        { label: "DOOH inventory", value: "Tightening", up: false },
        { label: "Print CPM", value: "−4%", up: false },
      ].map((row) => (
        <li key={row.label} className="flex items-center justify-between text-[15px]" style={{ color: CHARCOAL }}>
          <span className="opacity-80">{row.label}</span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            {row.up ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            {row.value}
          </span>
        </li>
      ))}
    </ul>
    <p className="mt-6 pt-5 border-t text-[12px] italic" style={{ borderColor: "rgba(15,35,64,0.1)", color: "rgba(30,30,30,0.6)" }}>
      Synthesised from 1,240 transactions this quarter.
    </p>
  </motion.div>
);

const CITIES = [
  { name: "Delhi", x: 48, y: 28, insight: "Airport demand surging Q1" },
  { name: "Mumbai", x: 32, y: 60, insight: "Metro inventory 92% full" },
  { name: "Bangalore", x: 48, y: 78, insight: "Cinema CPM down 6%" },
  { name: "Hyderabad", x: 52, y: 68, insight: "DOOH expanding fast" },
  { name: "Pune", x: 38, y: 62, insight: "Mall branding strong" },
  { name: "Gurgaon", x: 46, y: 30, insight: "Premium hoardings tight" },
];

export const GeoIntelligence = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="relative rounded-[20px] p-7 h-full overflow-hidden border"
    style={{
      background: `linear-gradient(160deg, ${NAVY} 0%, #1a3760 100%)`,
      color: IVORY,
      borderColor: "rgba(255,255,255,0.08)",
    }}
  >
    <div className="flex items-center justify-between mb-5">
      <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">Geo Intelligence</span>
      <span className="text-[11px] opacity-60">6 metros · live</span>
    </div>
    <h3 className="text-[26px] leading-tight font-semibold mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
      India, mapped by media pressure
    </h3>
    <div className="relative aspect-[4/5] w-full max-w-[320px] mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-40" fill="none" stroke="currentColor" strokeWidth="0.3">
        <path d="M30 20 Q40 12 55 16 Q70 18 75 30 Q82 42 78 55 Q72 70 60 82 Q50 92 42 85 Q32 78 28 62 Q22 48 24 35 Q26 26 30 20 Z" />
      </svg>
      {CITIES.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 220 }}
          className="absolute group cursor-pointer"
          style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <div className="relative">
            <span className="block w-2.5 h-2.5 rounded-full bg-[#FAF8F4] ring-4 ring-[#FAF8F4]/20" />
            <span className="absolute inset-0 rounded-full bg-[#FAF8F4]/40 animate-ping" />
          </div>
          <div className="absolute left-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 w-44 rounded-[10px] p-3 text-left shadow-xl"
            style={{ background: IVORY, color: CHARCOAL }}>
            <p className="text-[11px] font-semibold tracking-wide uppercase">{c.name}</p>
            <p className="text-[12px] mt-1 opacity-75">{c.insight}</p>
          </div>
          <span className="absolute left-4 top-3 text-[10px] uppercase tracking-widest opacity-80 whitespace-nowrap">
            {c.name}
          </span>
        </motion.div>
      ))}
    </div>
    <p className="mt-6 text-[12px] opacity-60 flex items-center gap-1.5">
      <MapPin className="w-3 h-3" /> Hover a city for live insights
    </p>
  </motion.div>
);

const RADAR = [
  { label: "Airport", value: 92 },
  { label: "Metro", value: 78 },
  { label: "Cinema", value: 54 },
  { label: "DOOH", value: 86 },
  { label: "Mall", value: 62 },
  { label: "Print", value: 38 },
];

export const MediaCostRadar = () => {
  const cx = 50, cy = 50, r = 36;
  const points = RADAR.map((d, i) => {
    const angle = (Math.PI * 2 * i) / RADAR.length - Math.PI / 2;
    const radius = (d.value / 100) * r;
    return [cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius];
  });
  const path = points.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ") + " Z";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative rounded-[20px] p-7 h-full border"
      style={{ background: IVORY, borderColor: "rgba(15,35,64,0.08)" }}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: NAVY }}>Media Cost Radar</span>
        <span className="text-[11px] italic" style={{ color: "rgba(30,30,30,0.55)" }}>Q1 2026</span>
      </div>
      <h3 className="text-[22px] leading-tight font-semibold mb-4" style={{ color: CHARCOAL, fontFamily: "Manrope, sans-serif" }}>
        Where rates are climbing
      </h3>
      <div className="relative">
        <svg viewBox="0 0 100 100" className="w-full">
          {[0.33, 0.66, 1].map((s) => (
            <circle key={s} cx={cx} cy={cy} r={r * s} fill="none" stroke={NAVY} strokeOpacity="0.12" strokeWidth="0.3" />
          ))}
          {RADAR.map((_, i) => {
            const angle = (Math.PI * 2 * i) / RADAR.length - Math.PI / 2;
            return (
              <line key={i} x1={cx} y1={cy} x2={cx + Math.cos(angle) * r} y2={cy + Math.sin(angle) * r}
                stroke={NAVY} strokeOpacity="0.1" strokeWidth="0.3" />
            );
          })}
          <motion.path
            d={path}
            fill={NAVY}
            fillOpacity="0.18"
            stroke={NAVY}
            strokeWidth="0.6"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "50% 50%" }}
          />
          {points.map((p, i) => (
            <circle key={i} cx={p[0]} cy={p[1]} r="1.2" fill={NAVY} />
          ))}
          {RADAR.map((d, i) => {
            const angle = (Math.PI * 2 * i) / RADAR.length - Math.PI / 2;
            const lx = cx + Math.cos(angle) * (r + 8);
            const ly = cy + Math.sin(angle) * (r + 8);
            return (
              <text key={d.label} x={lx} y={ly} textAnchor="middle" dominantBaseline="middle"
                fontSize="3.2" fill={CHARCOAL} fontFamily="Manrope, sans-serif" fontWeight="500">
                {d.label}
              </text>
            );
          })}
        </svg>
      </div>
    </motion.div>
  );
};

const CRO_QUESTIONS = [
  "Can barter reduce CAC by 30%?",
  "How much airport inventory is actually usable?",
  "Which cities convert highest for D2C?",
  "What's the realistic ROI on metro branding?",
  "Where does cinema beat DOOH on attention?",
];

export const CroDashboard = () => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="relative rounded-[20px] p-7 h-full border"
    style={{ background: CHARCOAL, color: IVORY, borderColor: "rgba(255,255,255,0.08)" }}
  >
    <span className="text-[10px] uppercase tracking-[0.22em] opacity-70">For revenue leaders</span>
    <h3 className="mt-3 text-[26px] leading-tight font-semibold mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
      What CROs are asking us
    </h3>
    <ul className="space-y-4">
      {CRO_QUESTIONS.map((q, i) => (
        <motion.li
          key={q}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex gap-3 pb-4 border-b text-[15px] leading-snug"
          style={{ borderColor: "rgba(250,248,244,0.1)" }}
        >
          <span className="text-[11px] tabular-nums opacity-50 pt-0.5">0{i + 1}</span>
          <span>{q}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export const StickyNote = ({ children, rotate = -3 }: { children: React.ReactNode; rotate?: number }) => (
  <motion.div
    initial={{ opacity: 0, rotate: rotate - 4 }}
    whileInView={{ opacity: 1, rotate }}
    whileHover={{ rotate: 0, y: -4 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 180, damping: 18 }}
    className="inline-block px-4 py-3 text-[13px] shadow-[0_10px_24px_-12px_rgba(0,0,0,0.35)]"
    style={{ background: "#FFE89A", color: CHARCOAL, fontFamily: "'Caveat', 'Comic Sans MS', cursive" }}
  >
    {children}
  </motion.div>
);
