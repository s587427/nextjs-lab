import ExampleClientComponent from "@/components/ExampleClientComponent"
import LanguageChanger from "@/components/LanguageChanger"
import initTranslations from "@/i18n"
import { defaultI18nNamespaces } from "@/i18n/i18nConfig"

export default async function Home({ params }: { params: { lang: string } }) {
    const { lang } = params
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
