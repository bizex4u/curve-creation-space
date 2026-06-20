const clients = [
  "MISHRAMBU", "GIVA", "AVP", "NISARA", "RAW PRESSERY",
  "PORTRONICS", "ZEBRONICS", "BIKANO", "SHARP",
  "CARRERA", "SAFILO", "DECO WINDOW", "LUX",
];

const LogoTicker = () => {
  return (
    <div
      className="relative overflow-hidden w-[90%]"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div className="flex w-max animate-ticker [animation-duration:40s]">
        {[1, 2, 3].map((setIndex) => (
          <div key={setIndex} className="flex shrink-0 gap-10 pr-10 items-center">
            {clients.map((name, i) => (
              <span
                key={i}
                className="text-neutral-12 text-[16px] tracking-[0.18em] font-semibold whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;
