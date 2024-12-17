"use client"

import { increment } from "@/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "@/store/hook"
import { useTranslation } from "react-i18next"

export default function ExampleClientComponent() {
    const { t } = useTranslation()
    const dispath = useAppDispatch()
    const couter = useAppSelector((state) => state.counter.value)
    return (
        <div className="mb-4">
            <p className="mb-2">{t("greeting")}</p>
            <div>
                <p>counter: {couter}</p>
                <button
                    className="border border-blue-600 px-2 py-1"
                    onClick={() => dispath(increment())}
                >
                    click add
                </button>
            </div>
        </div>
    )
}
