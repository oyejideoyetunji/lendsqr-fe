import { Action } from "../../../lib/typeDefinitions";


export enum PaginationActions {
    SET_PAGE_SIZE = "set-page-size",
    SET_CURRENT_PAGE_INDEX = "set-current-page-index"
}

export interface PaginationState {
    pageSize: number
    currentPageIndex: number
}

const initialPaginationState = {
    pageSize: 20,
    currentPageIndex: 0,
}


export default function PaginationReducer(
    state = initialPaginationState,
    { type, payload }: Action<PaginationActions, number>
): PaginationState {
    switch (type) {
        case PaginationActions.SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: payload
            }
        case PaginationActions.SET_CURRENT_PAGE_INDEX:
            return {
                ...state,
                currentPageIndex: payload
            }
        default:
            return state;
    }
}

export function setPageSize(
    payload: number,
): Action<PaginationActions, number> {
    return {
        type: PaginationActions.SET_PAGE_SIZE,
        payload,
    }
}

export function setCurrentPageIndex(
    payload: number,
): Action<PaginationActions, number> {
    return {
        type: PaginationActions.SET_CURRENT_PAGE_INDEX,
        payload,
    }
}
