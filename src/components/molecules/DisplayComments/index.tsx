import { useComments } from "../../../hooks/useComments";

export const DisplayComments = ({ filmId }: { filmId: number }) => {
  const { comments } = useComments(filmId);

  return (
    <>
      <div className="pt-5">
        <p className="font-galaxyregular ">Comments</p>
      </div>

      <div className="scrollbox" role="commentsbox" data-cy="comments-list">
        {comments?.map((comment, i) => (
          <div
            role="comment"
            key={i}
            className="bg-dgray border-2 rounded-sm m-1 p-1"
          >
            <p className="font-galaxyregular">name: {comment.name}</p>
            <p className="font-serif">star rating: {comment.rating}</p>
            <p className="font-serif">{comment.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

// const newComment = async (commentsCollection: any, comment: any) => {
//   await commentsCollection.add(comment);
// };

{
  /* <button className="font-galaxyregular text-xl pt-5 ">
Write Comment
</button> */
}
