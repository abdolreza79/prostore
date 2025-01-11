import { Star, StarHalf } from "lucide-react";
import { Fragment } from "react";

const ProductStar = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Fragment key={index}>
          {index + 1 <= rating ? (
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          ) : index + 1 > Math.floor(rating) &&
            index + 1 <= Math.ceil(rating) ? (
            <StarHalf className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          ) : (
            index + 1 > Math.ceil(rating) && (
              <Star className="w-5 h-5 text-gray-400" />
            )
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default ProductStar;
// <Star
//   className={cn("w-5 h-5", {
//     "text-yellow-300": index + 1 <= rating,
//     "text-red-500":
//       index >= Math.floor(rating) && index + 1 < Math.ceil(rating),
//     "text-gray-300": index >= Math.ceil(rating),
//   })}
//   key={index}
// />
