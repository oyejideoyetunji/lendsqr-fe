import React, { ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTotalPages, pageNumberToIndexOffset, pageSizeOptions } from "../../lib/utils/pagination"
import { StoreState } from "../../store/reducers"
import { setCurrentPageIndex, setPageSize } from "../../store/reducers/paginationReducer"
import Select from "../select"


const Pagination = () => {
    const dispatch = useDispatch()

    const {
        users: { users },
        pagination: { pageSize, currentPageIndex },
    } = useSelector((state: StoreState) => state)

    const totalPages = getTotalPages(users.length, pageSize)

    const onNextPage = () => {
        if (currentPageIndex < totalPages - pageNumberToIndexOffset) {
            const increament = 1
            dispatch(setCurrentPageIndex(currentPageIndex + increament))
        }
    }

    const onPrevPage = () => {
        if (currentPageIndex) {
            const decreament = 1
            dispatch(setCurrentPageIndex(currentPageIndex - decreament))
        }
    }

    const onSetPageSize = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target
        dispatch(setPageSize(Number(value)))
    }

    return (
        <section
            className="container-pagination"
        >
            <div
                className="flex align-center page-count-wrp"
            >
                <span>Showing</span>
                <div className="select">
                    <Select onChange={onSetPageSize}>
                        {
                            pageSizeOptions.map(itm => (
                                <option key={itm.label} value={itm.value}>
                                    {itm.value}
                                </option>
                            ))
                        }
                    </Select>
                    </div>
                <span>out of {users.length}</span>
            </div>

            <div
                className="flex align-center page-nav-wrp"
            >
                <span
                    className={`${currentPageIndex ? "active" : ""}`}
                    onClick={onPrevPage}
                >
                    <i className="fas fa-chevron-left" />
                </span>
                        
                <span
                    className={
                        `${(currentPageIndex < totalPages - pageNumberToIndexOffset)
                            ? "active"
                            : ""
                        }`
                    }
                    onClick={onNextPage}
                >
                    <i className="fas fa-chevron-right" />
                </span>
            </div>
        </section>
    )
}

export default Pagination

