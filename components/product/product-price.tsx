import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  const [intValue, floatValue] = String(value.toFixed(2)).split(".");
  return (
    <div className={cn("flex items-center", className)}>
      <span className="text-xs align-super">$</span>
      <span className="text-xl align-sub ">{intValue}</span>
      <span className="text-xs align-super">{floatValue}</span>
    </div>
  );
};

export default ProductPrice;
