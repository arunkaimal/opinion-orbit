import { ReactNode } from "react";

interface GradientHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}
const GradientHeader = ({ title, subtitle, children }: GradientHeaderProps) => {
  return <div>GradientHeader</div>;
};

export default GradientHeader;
