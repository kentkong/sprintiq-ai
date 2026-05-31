import { cn } from "@/lib/utils";

type StudioEyebrowProps = {
  text: string;
  variant?: "default" | "underlined" | "simple";
  className?: string;
};

function spaceLetters(word: string): string {
  return word.toUpperCase().split("").join(" ");
}

function formatEyebrowWord(word: string): string {
  if (word.length <= 1 && !/[A-Za-z0-9]/.test(word)) return word;
  return spaceLetters(word);
}

/** Wide-tracked uppercase label — BLACKBOX "O U R  A P P R O A C H" style. */
export function StudioEyebrow({ text, variant = "default", className }: StudioEyebrowProps) {
  const words = text.trim().split(/\s+/);

  if (variant === "simple") {
    return (
      <p className={cn("studio-eyebrow studio-eyebrow--simple", className)}>{text.toUpperCase()}</p>
    );
  }

  if (variant === "underlined") {
    return (
      <p className={cn("studio-eyebrow studio-eyebrow--underlined", className)}>
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={cn("studio-eyebrow__word", word === "&" && "studio-eyebrow__word--amp")}
          >
            {formatEyebrowWord(word)}
          </span>
        ))}
      </p>
    );
  }

  const spaced = words.map(formatEyebrowWord).join("  ");

  return <p className={cn("studio-eyebrow", className)}>{spaced}</p>;
}
