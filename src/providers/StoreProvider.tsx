"use client"
import { useRef } from "react"
import { Provider } from "react-redux"
import { makeStore, AppStore } from "@/store"
import { initializeCount } from "@/features/counter/counterSlice"

export default function StoreProvider({
    count,
    children,
}: {
    count: number
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore | undefined>(undefined)
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
        storeRef.current.dispatch(initializeCount(count))
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}
