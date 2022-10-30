import React, { useEffect, useState } from 'react';
import { TagBlock, DeleteBtn } from './style';

const Tag = ({ tag, tags, setTags }) => {
  const onDelete = () => {
    setTags(
      tags.filter((t) => {
        return t.id !== tag.id;
      })
    );
  };
  return (
    <TagBlock>
      {tag.name}
      <DeleteBtn onClick={onDelete}>
        <svg width="14" height="14" viewBox="0 0 14 14">
          <path d="M12 3.41L10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path>
        </svg>
      </DeleteBtn>
    </TagBlock>
  );
};

export default Tag;
