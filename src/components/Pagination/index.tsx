import { FC, useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";

export const Pagination: FC = () => {
  const { pagination, totalHeroesSize, setPagination } = useContext(ApiContext);

  const maxPaginationCount = Math.ceil(totalHeroesSize / 10);

  return (
    <nav aria-label="Marvel Heroes Page navigation">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={() => setPagination(1)}>
            First
          </a>
        </li>
        {pagination === 1 ? null : (
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => setPagination(pagination - 1)}
            >
              Previous
            </a>
          </li>
        )}
        {new Array(3).fill(0).map((_, index) => {
          const pageNumber = index + pagination;
          return (
            pageNumber <= maxPaginationCount && (
              <li className="page-item" key={pageNumber}>
                <a
                  className="page-link"
                  onClick={() => setPagination(pageNumber)}
                >
                  {pageNumber}
                </a>
              </li>
            )
          );
        })}
        {pagination === 157 ? null : (
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => setPagination(pagination + 1)}
            >
              Next
            </a>
          </li>
        )}
        {pagination === 157 ? null : (
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => setPagination(Math.ceil(totalHeroesSize / 10))}
            >
              Last
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
