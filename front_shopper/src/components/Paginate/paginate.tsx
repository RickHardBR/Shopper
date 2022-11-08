import { Icon } from '@iconify/react'

import styles from './style.module.scss'

import ReactPaginate from 'react-paginate'

interface PaginateProps {
  openPaginate: boolean
  setCurrentPage: (input: number) => void
}
export default function Paginate({
  setCurrentPage,
  openPaginate
}: PaginateProps) {
  return (
    <div className={!openPaginate ? styles.open : styles.close}>
      <ReactPaginate
        previousLabel={<Icon icon="ant-design:left-circle-filled" />}
        nextLabel={<Icon icon="ant-design:right-circle-filled" />}
        breakLabel="..."
        breakClassName={styles.break_me}
        pageCount={5}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={pagination => {
          setCurrentPage(pagination.selected + 1)
        }}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </div>
  )
}