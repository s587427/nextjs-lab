import ExampleClientComponent from "@/components/ExampleClientComponent"
import LanguageChanger from "@/components/LanguageChanger"
import initTranslations from "@/i18n"
import i18nConfig, { defaultI18nNamespaces } from "@/i18n/i18nConfig"
import { cookies } from "next/headers"

export default async function Home({ params }: { params: { lang: string } }) {
    // recommend route segement
    // const { lang } = params

    const cookieStorage = cookies()
    const cookieLocale = cookieStorage.get(i18nConfig.localeCookie)!.value
    const lang = cookieLocale
    const { t, resources } = await initTranslations(lang, [...defaultI18nNamespaces, "second"])

    return (
        <main className="absolute left-1/2 text-center top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-2xl mb-2">{t("header")}</h1>
            <ExampleClientComponent />
            <LanguageChanger />
            <div>hello translate: {t("second:hello")}</div>
        </main>
    )
}
