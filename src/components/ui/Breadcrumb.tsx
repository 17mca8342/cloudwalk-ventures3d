"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbProps {
  items: Array<{
    label: string
    href: string
    current?: boolean
  }>
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className="container-custom py-4"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight
                className="h-4 w-4 text-white/40 flex-shrink-0"
                aria-hidden="true"
              />
            )}
            {item.current ? (
              <span
                className="text-white/90 font-medium truncate max-w-[200px]"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="flex items-center gap-1 text-white/60 hover:text-white transition-colors"
              >
                {index === 0 && <Home className="h-4 w-4" aria-hidden="true" />}
                <span>{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}