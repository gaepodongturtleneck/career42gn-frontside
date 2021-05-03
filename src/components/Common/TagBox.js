import React from "react";
import styled from "styled-components";

const TagChild = tags => {
  return tags.map(tag => <a key={tag.id}>#{tag.value}</a>);
};

const TagBox = props => {
  const { tags } = props;
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
