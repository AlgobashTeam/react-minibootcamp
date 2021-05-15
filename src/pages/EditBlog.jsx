import Authenticated from '../layouts/Authenticated';

export default function EditBlog() {
  return (
    <Authenticated>
      <p>PUT url:https://jsonplaceholder.typicode.com/posts/1</p>
      <p>Edit Ya</p>
    </Authenticated>
  );  
}
