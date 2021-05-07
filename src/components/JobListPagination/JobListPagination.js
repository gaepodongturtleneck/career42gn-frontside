import React from "react";
import { Link } from "react-router-dom";
import { JobListPaginationStyles } from "./JobListPagination.styles";

const JobListPagination = props => {
  const { totalPages, currentPage, handleCurrentPage } = props;
  // 10개 이상일 때,
  // 이전 버튼,
  // 10개씩 뿌리기
  return (
    <JobListPaginationStyles>
      <ul>
        {new Array(totalPages).fill(0).map((value, page) => {
          return (
            <Link to={`/job-posts/${page + 1}`} key={page + 1} onClick={() => handleCurrentPage(page)}>
              <span>{page + 1}</span>
            </Link>
          );
        })}
        {totalPages > 10 ? (
          <li>
            <span>다음</span>
          </li>
        ) : (
          ""
        )}
      </ul>
    </JobListPaginationStyles>
  );
};

export default JobListPagination;
