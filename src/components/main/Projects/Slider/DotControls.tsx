interface DotControlProps {
  items: Array<any>;
  current: number;
  onPageSelected: (current: number) => void;
}

export default function DotControls({
  items,
  current,
  onPageSelected,
}: DotControlProps) {
  return (
    <div className="absolute bottom-0 z-10 transform -translate-x-1/2 sm:bottom-2 left-1/2">
      <div className="flex gap-3 px-3 py-2 rounded-full opacity-80">
        {items.map((_, index) => (
          <button key={index} onClick={() => onPageSelected(index)}>
            <div
              className={`w-2 h-2 rounded-full ${
                index === current ? "bg-main-yellow" : "bg-zinc-600"
              }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}
