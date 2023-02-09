import StarIcon from "@mui/icons-material/Star"; //pełna
import StarOutlineIcon from "@mui/icons-material/StarOutline"; //pusta
import StarHalfIcon from "@mui/icons-material/StarHalf"; //połowa
import { Star } from "../atoms/Star";
import { MouseEventHandler, useState } from "react";
import { useComments } from "../../hooks/useComments";

//StarRating component

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

// return (
//   <div className="flex flex-row">
//     {[...Array(totalStars)].map((n, i) => (
//       <Star key={i} selected={i < rating} onClick={() => setRating(i + 1)} />
//     ))}
//   </div>
// );
