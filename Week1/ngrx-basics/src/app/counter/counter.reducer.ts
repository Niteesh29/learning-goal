//reducer is a pure function

//whatever reducer you have you have to map it in app.module.ts

/* imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    NgbModule
  ], */

import { createReducer, on } from "@ngrx/store"
import { decrement, increment, reset } from "./counter.actions"
import { intialState } from "./counter.state"


const _counterReducer = createReducer(intialState, on(increment, (state) => {
    return {
        ...state, counter: state.counter + 1
    }
}), on(decrement, (state) => {
    return {
        ...state, counter: state.counter - 1,
    }
}), on(reset, (state) => {
    return {
        ...state, counter: state.counter - 1,
    }
})
)

export function counterReducer(state, action) {
    return _counterReducer(state, action)
}