'use client';

import { FC } from 'react';
import styles from './pagination.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

enum TypePagination {
  Prev = 'prev',
  Next = 'next',
}

interface Props {
  count: number;
}
const Pagination: FC<Props> = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const page = searchParams.get('page') || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (Number(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (Number(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: TypePagination) => {
    type === TypePagination.Prev
      ? params.set('page', (Number(page) - 1).toString())
      : params.set('page', (Number(page) + 1).toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage(TypePagination.Prev)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage(TypePagination.Next)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
