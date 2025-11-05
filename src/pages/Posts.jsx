//import ErrorBoundary from "../ErrorBoundary";
import ErrorBoundary from "../ErrorBoundary";
import PostList from "../PostList";

export default function Posts() {
  return (
      <ErrorBoundary>
         <PostList />
      </ErrorBoundary>
      
    
  );
}
