import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";

const Like = () => {
  const [liked, setLiked] = useState(false);

  function onLikeClick() {
    console.log("Like clicked");

    //toggle the liked state, pass the inverse of the current state
    setLiked(!liked);
  }

  return (
    <div>
      {liked ? (
        <IoMdHeart onClick={onLikeClick} size="50px" color="#ff6b81" />
      ) : (
        <IoMdHeartEmpty onClick={onLikeClick} size="50px" />
      )}
    </div>
  );
};

export default Like;
