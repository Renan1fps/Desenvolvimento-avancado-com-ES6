interface Post {
  id: string;
  title: string;
  description: string;
}

type PostPreview = Pick<Post, "id" | "title">;

let postPreviewTeste: PostPreview;


type PostPreviewOmit = Omit<Post, "id" | "title">;





