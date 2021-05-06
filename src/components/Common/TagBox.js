import React from "react";
import styled from "styled-components";

const TagChild = tags => {
  return tags.map((tag, idx) => {
    // 이거 왜 반대죠? idx, value순서 아닌가요 ;;?
    return <a key={idx}>#{tag}</a>;
  });
};

const TagBox = props => {
  const { tags } = props;
  console.log(tags);
  return <TagBoxWrapper>{TagChild(tags)}</TagBoxWrapper>;
};

export default TagBox;

export const TagBoxWrapper = styled.div`
  font-size: 0.5em;
  & * {
    color: #27babb;
    padding-right: 12px;
  }
`;
