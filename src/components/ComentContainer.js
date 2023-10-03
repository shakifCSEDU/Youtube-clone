import React from "react";

const commentsData = [
  {
    name: "Shakif Sahriar",
    text: "A good boy but tries to becomes more good",
    replies: [
      {
        name: "Shakif Sahriar",
        text: "A good boy but tries to becomes more good",
        replies: [],
      },
      {
        name: "Shakif Sahriar",
        text: "A good boy but tries to becomes more good",
        replies: [],
      },
    ],
  },
  {
    name: "Shakif Sahriar",
    text: "A good boy but tries to becomes more good",
    replies: [
      {
        name: "Shakif Sahriar",
        text: "A good boy but tries to becomes more good",
        replies: [],
      },
    ],
  },
  {
    name: "Shakif Sahriar",
    text: "A good boy but tries to becomes more good",
    replies: [],
  },
  {
    name: "Shakif Sahriar",
    text: "A good boy but tries to becomes more good",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdV3ip1gxZ9bM13uZjWbiCpiETs2AVz3GS_Q&usqp=CAU"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies}/>


      </div>

    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};
export default CommentContainer;
