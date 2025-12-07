import { useParams } from "react-router-dom";
import BlogDetail from "../component/blogDetail/blogDetail";

export default function BlogDetailPage({ blogData }) {
  const { id } = useParams();

  // Find blog by id
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog Not Found</h2>;

  return <BlogDetail blog={blog} />;
}
