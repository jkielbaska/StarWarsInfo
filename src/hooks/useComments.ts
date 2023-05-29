import { db } from "../firebase/firebase";
import {
  collection,
  serverTimestamp,
  onSnapshot,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

type Comment = CommentSchemaType & { createdAt: Timestamp };

const CommentSchema = z.object({
  name: z
    .string()
    .min(1, { message: "required" })
    .max(20, { message: "Your name is too long. Type 20 letters max" }),
  text: z.string().min(1, { message: "required" }),
  rating: z.string().min(1, { message: "required" }),
});

type CommentSchemaType = z.infer<typeof CommentSchema>;

export const useComments = (movieId: number) => {
  const { handleSubmit, reset, ...form } = useForm<CommentSchemaType>({
    resolver: zodResolver(CommentSchema),
  });
  const [isPending, setPending] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const handleCommentCreation = async (data: CommentSchemaType) => {
    setPending(true);
    try {
      const comment: Comment = {
        ...data,
        createdAt: serverTimestamp() as Timestamp,
      };
      const docRef = await addDoc(
        collection(db, "movies", `${movieId}`, "comments"),
        comment
      );
    } catch (err) {
      console.error(err);
    } finally {
      setPending(false);
      reset();
    }
  };

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "movies", `${movieId}`, "comments"),
      { includeMetadataChanges: true },
      (doc) => {
        const commentsList = doc.docs.map((doc) => {
          const data = doc.data();
          return {
            name: data.name,
            text: data.text,
            createdAt: data.createdAt,
            rating: data.rating,
          };
        });
        setComments(commentsList);
      }
    );

    return () => unsub();
  }, []);

  comments.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else if (a.createdAt > b.createdAt) {
      return -1;
    } else {
      return 0;
    }
  });

  return {
    isPending,
    form: { handleAddComment: handleSubmit(handleCommentCreation), ...form },
    comments,
  };
};
