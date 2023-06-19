const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <p key={comment.id} className="description">
          <span>{comment.username}</span> {comment.body}
        </p>
      ))}
    </div>
  );
};

export default Comments;
