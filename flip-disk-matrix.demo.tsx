// Demo preview for the FlipDiskMatrix component (interactive controls on).
import { FlipDiskMatrix } from "@/components/ui/flip-disk-matrix";

export default function DemoOne() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 bg-[#050505] text-neutral-100">
      <div className="flex flex-col items-center gap-8 w-full max-w-5xl">
        <header className="flex flex-col items-center gap-2 text-center">
          <div className="text-xs font-mono tracking-[0.4em] uppercase text-silver">Split-Flap Board</div>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight">Electromechanical Display</h1>
        </header>
        <FlipDiskMatrix />
      </div>
    </main>
  );
}
