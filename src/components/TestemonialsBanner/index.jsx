import React, { useContext } from "react";
import { TestemonialsContext } from "../../context/testemonials";

export const TestemonialsBanner = () => {
  const { postsList } = useContext(TestemonialsContext);
  return (
    <div>
      <div>
        {/* {
          postsList?.map((post)=>{
            return (
              <>
              <h2>{post.user.name}</h2>
              <p>{post.text}</p>
              </>
            )
          })
        } */}
      </div>
    </div>
  );
};
