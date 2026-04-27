"use client";

import Link from "next/link";
import { cn } from "@/utils/helpers";

export interface BrandLogoProps {
  animate?: boolean;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className }) => {
  return (
    <Link href="/" className={cn("group block", className)}>
      <img 
        src="/mylogo.png"
        alt="Site Logo" 
        className="h-8 w-auto md:h-10 transition-transform group-hover:scale-105" 
      />
    </Link>
  );
};

export default BrandLogo;
