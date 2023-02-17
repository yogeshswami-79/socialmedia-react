import React from "react";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../Utils/dummyData";
import "./feed.scss";
import Story from "../Stories/Story";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        
        <div id="stories">
            {Posts.map( (p, i) => <Story story={p} key={i}/> )}
            {Posts.map( (p, i) => <Story story={p} key={i}/> )}
        </div>

        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
