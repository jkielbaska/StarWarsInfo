import { useComments } from "../../hooks/useComments";
import { StarRating } from "../../components/molecules/StarRating";
import { Controller } from "react-hook-form";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export const WriteComment = ({ filmId }: { filmId: number }) => {
  const [rating, setRating] = useState(0);

  const {
    form: {
      handleAddComment,
      register,
      setValue,
      control,
      formState: { errors },
    },
  } = useComments(filmId);

  return (
    <form
      data-cy="comment-form"
      onSubmit={handleAddComment}
      className="font-galaxyregular text-xl  items-left pt-2  w-5/6 max-w-2xl pl-5  flex flex-col  text-gray"
    >
      <input
        data-cy="comment-name"
        className="border-none pb-2 bg-transparent text-gray  font-serif outline-none placeholder-zinc"
        type="text"
        placeholder="name"
        {...register("name")}
      />
      {errors.name?.message && (
        <p className="font-serif text-gray text-sm">{errors.name?.message}</p>
      )}

      <Controller
        control={control}
        name="text"
        render={({ field: { onBlur, onChange, ref, value }, fieldState }) => (
          <TextField
            data-cy="comment-text"
            multiline
            fullWidth
            sx={{
              "& fieldset": {
                border: "none",
                color: "gray",
                background: "transparent",
                outline: "none",
                font: "sans-serif",
              },
            }}
            InputProps={{
              className:
                "border-none bg-transparent text-gray outline-none font-serif p-0 pb-1 text-xl  ",
            }}
            error={!!fieldState.error}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            inputRef={ref}
            placeholder="comment"
          />
        )}
      />

      {errors.text?.message && (
        <p className="font-serif text-gray text-sm">{errors.text?.message}</p>
      )}

      <div className="flex flex-row">
        <StarRating
          filmId={filmId}
          rating={rating}
          onClick={(i) => {
            setValue("rating", String(i));
            setRating(i);
            console.log(i);
          }}
        />
      </div>

      {errors.rating?.message && (
        <p className="font-serif text-gray text-sm">{errors.rating?.message}</p>
      )}

      <div className="pt-2 text-yellow">
        <button type="submit" data-cy="comment-submit">
          Add comment
        </button>
      </div>
    </form>
  );
};
