"use client";

import Link from "next/link";
import styles from "./buttons.module.scss";


type Variant = "primary" | "secondary" | "ghost" |"terciary" | "cuaternary";
type Size = "md" | "lg";


type Props = {
    children: React.ReactNode;
    href?: string;              // si viene, renderiza <Link>
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  block?: boolean;
  ariaLabel?: string;
};

export default function Button({
    children,
    href,
    onClick,
    variant = "primary",
    size = "md", loading = false,
    block = false,
    ariaLabel
}: Props) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    block ? styles.block : ""
  ].join(" ");

  const content = loading ? "Cargando…" : children;

  if (href) {
    return (
      <Link className={classNames} href={href} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button 
    className={classNames} 
    onClick={onClick} 
    disabled={loading} 
    aria-label={ariaLabel}>
      {content}
    </button>
  );
}