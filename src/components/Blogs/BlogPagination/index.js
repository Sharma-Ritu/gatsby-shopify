import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const BlogPagination = (props) => {
  console.log(props.pageInfo);
  return (
    <Pagination aria-label="Page navigation">
      <PaginationItem disabled={props.pageInfo.hasPreviousPage}>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem disabled={props.pageInfo.hasPreviousPage}>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
}

export default BlogPagination;