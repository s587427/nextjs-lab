"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import i18nConfig from "@/i18n/i18nConfig"

export default function LanguageChanger() {
    const { i18n } = useTranslation()
    const currentLocale = i18n.language
    const router = useRouter()
    const currentPathname = usePathname()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value

        // set cookie for next-i18n-router
        const days = 30
        const date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        const expires = date.toUTCString()
        document.cookie = `lang=${newLocale};expires=${expires};path=/`

        // redirect to the new locale path
        // if (
        //     currentLocale === i18nConfig.defaultLocale &&
        //     !(i18nConfig as Record<string, any>).prefixDefault
        // ) {
        //     router.push("/" + newLocale + currentPathname)
        // } else {
        //     router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
        // }

        // test
        // router.push(`${currentPathname}?lang=${newLocale}`)

        //  將使路由器快取失效，並向伺服器發出新的請求以取得目前的路由
        router.refresh()
    }

    return (
        <select className="border border-blue-600" onChange={handleChange} value={currentLocale}>
            <option value="en">English</option>
            <option value="it">Italian</option>
            <option value="fr">French</option>
        </select>
    )
}
