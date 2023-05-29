import { WriteComment } from "./WriteComment";
import { DisplayComments } from "./DisplayComments/index";
import { useComments } from "../../hooks/useComments";

export const Comments = ({ filmId }: { filmId: number }) => {
  return (
    <>
      <WriteComment filmId={filmId}></WriteComment>
      <DisplayComments filmId={filmId}></DisplayComments>
    </>
  );
};
