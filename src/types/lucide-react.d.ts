declare module 'lucide-react' {
  import { FC, SVGProps } from 'react';
  
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
    fill?: string;
    strokeWidth?: number;
    className?: string;
  }

  export type Icon = FC<LucideProps>;

  export const MapPin: Icon;
  export const GraduationCap: Icon;
  export const Award: Icon;
  export const ExternalLink: Icon;
  export const Mail: Icon;
  export const Github: Icon;
  export const Linkedin: Icon;
  export const ChevronDown: Icon;
  export const ChevronRight: Icon;
  export const Sun: Icon;
  export const Moon: Icon;
  export const Code: Icon;
  export const Layout: Icon;
  export const Server: Icon;
  export const Brain: Icon;
  export const Database: Icon;
  export const Cloud: Icon;
  export const BookOpen: Icon;
  export const Beaker: Icon;
  export const FileText: Icon;
  export const TrendingUp: Icon;
  export const Sparkles: Icon;
  export const ArrowRight: Icon;
  export const ArrowLeft: Icon;
  export const Send: Icon;
  export const Calendar: Icon;
  export const ArrowUpRight: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const Heart: Icon;
  export const Loader2: Icon;
}