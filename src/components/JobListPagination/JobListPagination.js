import React from "react";
import { JobListPaginationStyles } from "./JobListPagination.styles";

const JobListPagination = props => {
  const { totalPages } = props;
  // 10개 이상일 때,
  // 이전 버튼,
  // 10개씩 뿌리기
  return (
    <JobListPaginationStyles>
      <ul>
        {new Array(totalPages).fill(0).map((v, page) => {
          return (
            <li key={page + 1}>
              <span>{page + 1}</span>
            </li>
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
