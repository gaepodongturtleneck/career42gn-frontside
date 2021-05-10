import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { JobListPaginationStyles } from "./JobListPagination.styles";

const pageButton = (size, offset) => {
  return new Array(size).fill(0).map((_, idx) => {
    const pageNumber = offset * 10 + 1 + idx;
    return (
      <Link to={`/job-posts/${pageNumber}`} key={idx}>
        <span>{pageNumber}</span>
      </Link>
    );
  });
};
const JobListPagination = props => {
  const pageSizeRef = useRef(10);
  const { totalPages, currentPage, handleCurrentPage } = props;
  const [offset, setOffset] = useState(Math.floor((currentPage - 1) / 10));
  // 10개 이상일 때,
  // 이전 버튼,
  // 10개씩 뿌리기
  useEffect(() => {
    setOffset(Math.floor((currentPage - 1) / 10));
    console.log(offset);
  }, [currentPage]);
  return (
    <JobListPaginationStyles>
      <ul>
        {currentPage > 10 ? (
          <Link to={`/job-posts/${offset * 10}`} onClick={() => handleCurrentPage(offset * 10)}>
            Prev
          </Link>
        ) : (
          ""
        )}
        {offset !== Math.floor((totalPages - 1) / 10) ? pageButton(pageSizeRef.current, offset) : pageButton(totalPages % 10, offset)}
        {Math.floor((totalPages - 1) / 10) - Math.floor((currentPage - 1) / 10) >= 1 ? (
          <Link to={`/job-posts/${(Math.floor((currentPage - 1) / 10) + 1) * 10 + 1}`} onClick={() => handleCurrentPage((Math.floor((currentPage - 1) / 10) + 1) * 10 + 1)}>
            Next
          </Link>
        ) : (
          ""
        )}
      </ul>
    </JobListPaginationStyles>
  );
};

export default JobListPagination;
