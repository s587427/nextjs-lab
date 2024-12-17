import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// 定義 Slice 的狀態類型
interface CounterState {
    value: number
}

// 初始化狀態
const initialState: CounterState = {
    value: 0,
}

// 創建 Slice
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            // 直接修改 state，immer 會幫助生成不可變數據
            state.value += 1
        },
        decrement(state) {
            state.value -= 1
        },
        initializeCount(state, action: PayloadAction<number>) {
            // 使用 action.payload 作為傳遞的數值
            state.value += action.payload
        },
    },
})

// 導出 actions 和 reducer
export const { increment, decrement, initializeCount } = counterSlice.actions
export default counterSlice.reducer
