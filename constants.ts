import { Code, ImageIcon, Cloud, Mic2, LanguagesIcon, WholeWordIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;
export const MAX_FREE_STORAGE = 15;

export const tools = [
  {
    label: 'Cloud Storage',
    icon: Cloud,
    href: '/cloud',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Text-to-Speech',
    icon: Mic2,
    href: '/text-to-speech',
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  {
    label: 'Translate Document',
    icon: LanguagesIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/translate',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
];