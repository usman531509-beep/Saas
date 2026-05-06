export function AnimatedGradient() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        contain: "strict",
        backgroundImage:
          "radial-gradient(40vmax 30vmax at 12% 18%, rgba(139,92,246,0.28), transparent 60%), radial-gradient(36vmax 28vmax at 92% 8%, rgba(34,211,238,0.22), transparent 60%), radial-gradient(44vmax 30vmax at 50% 110%, rgba(217,70,239,0.22), transparent 60%)",
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(7,7,11,0.85)_100%)]" />
    </div>
  );
}
