import { WriteComment } from "./WriteComment";
import { DisplayComments } from "./DisplayComments/index";

export const Comments = ({ filmId }: { filmId: number }) => {
  return (
    <>
      <WriteComment filmId={filmId}></WriteComment>
      <DisplayComments filmId={filmId}></DisplayComments>
    </>
  );
};
