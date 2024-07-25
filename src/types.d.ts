type IPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
} | null;

type TPosts = IPost[];
