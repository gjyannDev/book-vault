import type { PaginationCard } from "@/types/bookTypes";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

export default function PaginationCard({
  totalItems,
  page,
  setPage,
  maxResults,
}: PaginationCard) {
  const total_pages = Math.ceil(totalItems / maxResults);

  const visiblePages = 5;
  let start = Math.max(0, page - Math.floor(visiblePages / 2));
  let end = start + visiblePages;

  if (end > total_pages) {
    end = total_pages;
    start = Math.max(0, end - visiblePages);
  }

  return (
    <div className="py-6">
      <Pagination className="cursor-pointer">
        <PaginationContent>
          {page > 0 && (
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((prev) => Math.max(prev - 1, 0));
                }}
              />
            </PaginationItem>
          )}

          {[...Array(end - start).keys()].map((i) => {
            const index = start + i;
            return (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  isActive={index === page}
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(index);
                  }}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {end < total_pages && <PaginationEllipsis />}

          {page < total_pages - 1 && (
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((prev) => Math.min(prev + 1, total_pages - 1));
                }}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
