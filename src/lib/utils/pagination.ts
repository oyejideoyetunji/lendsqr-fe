import { useMemo } from "react"

export const pageSizeOptions = [
    {
        label: "10",
        value: 10
    },
    {
        label: "20",
        value: 20
    },
    {
        label: "25",
        value: 25
    },
    {
        label: "30",
        value: 30
    },
    {
        label: "50",
        value: 50
    },
]

export const pageNumberToIndexOffset = 1
type GetPageIndexProps = {pageSize: number, currentPageIndex: number}
interface GetPageItemsProps<T>{startIndex: number, endIndex: number, list: T[]}



export const getPageNumber = (index: number, totalPages: number) =>
    totalPages && index + pageNumberToIndexOffset

export const getTotalPages = (listSize: number, pageSize: number) =>
    Math.ceil(listSize / pageSize)

export const getPageStartIndex = ({
    pageSize,
    currentPageIndex,
}: GetPageIndexProps) => pageSize * currentPageIndex

export const getPageEndIndex = ({
    pageSize,
    currentPageIndex,
}: GetPageIndexProps) => pageSize * currentPageIndex + pageSize

const getPageItems = <T>({
    startIndex,
    endIndex,
    list,
}: GetPageItemsProps<T>) => list.slice(startIndex, endIndex)

export const usePageItems = <T>({
    startIndex,
    endIndex,
    list,
}: GetPageItemsProps<T>) => {
    const pageItems = useMemo(
        () => getPageItems({ startIndex, endIndex, list }),
        [startIndex, endIndex, list],
    )

    return [pageItems]
}
