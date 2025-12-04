"use client";

export default function HamburgerButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
        type="button"
        aria-label="Menu"
        {...props}
        className={
            "flex h-10 w-10 items-center justify-center rounded-full border border-orange-300/40 " +
            "bg-green/80 shadow-md backdrop-blur hover:bg-white/80 transition" +
            (props.className ?? "")
        }
    >
        <div className="flex flex-col gap-1">
          <span className="h-0.5 w-5 rounded bg-orange-300" />
          <span className="h-0.5 w-5 rounded bg-orange-300" />
          <span className="h-0.5 w-5 rounded bg-orange-300" />
        </div>
    </button>
  );
}