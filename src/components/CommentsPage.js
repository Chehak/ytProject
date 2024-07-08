import React from "react";
import { USER_ICON } from "../utils/constants";

const CommentsPage = () => {
  const commentsData = [
    {
      name: "Chehak Gupta",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      replies: [
        {
          name: "Chehak Gupta",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          replies: [],
        },
        {
          name: "Chehak Gupta",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          replies: [
            {
              name: "Chehak Gupta",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              replies: [],
            },
            {
              name: "Chehak Gupta",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              replies: [],
            },
          ],
        },
      ],
    },

    {
      name: "Chehak Gupta",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      replies: [
        {
          name: "Chehak Gupta",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          replies: [
            {
              name: "Chehak Gupta",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
              replies: [
                {
                  name: "Chehak Gupta",
                  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                  replies: [
                    {
                      name: "Chehak Gupta",
                      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "Chehak Gupta",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      replies: [
        {
          name: "Chehak Gupta",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          replies: [],
        },
      ],
    },
    {
      name: "Chehak Gupta",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      replies: [
        {
          name: "Chehak Gupta",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          replies: [],
        },
      ],
    },
  ];

  const Comments = ({ data }) => {
    console.log(data, "comments");
    const { name, text } = data;
    return (
      <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img src={USER_ICON} className="h-8" />
        <div className="text-sm">
          <p>{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comments data={comment}/>
        <div className="pl-5 border border-l-black ml-5 border-b-0 border-r-0 ">
          <CommentList comments={comment.replies}></CommentList>
        </div>
      </div>
    ));
  };

  return (
    <div className="pt-2">
      <h1 className="text-lg font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsPage;
