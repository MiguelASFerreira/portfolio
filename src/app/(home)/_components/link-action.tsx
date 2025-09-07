import Link from "next/link";

export type LinkActionProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

export function LinkAction({ href, icon, text }: LinkActionProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="hover:bg-principal/50 text-principal group flex w-auto items-center gap-3 rounded-lg p-3 text-sm transition-all hover:text-white"
    >
      <div className="bg-principal/10 group-hover:bg-principal/20 rounded-lg p-2 transition-colors">
        {icon}
      </div>
      <span className="font-medium">{text}</span>
    </Link>
  );
}
