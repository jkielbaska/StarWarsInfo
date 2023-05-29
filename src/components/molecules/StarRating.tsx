import { Star } from "../atoms/Star";

export const StarRating = ({
  filmId,
  rating,
  onClick,
}: {
  filmId: number;
  rating: number;
  onClick: (id: number) => void;
}) => {
  return (
    <div className="flex flex-row" data-cy="star-rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          data-cy={`star-${i}`}
          selected={i <= rating}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
};
