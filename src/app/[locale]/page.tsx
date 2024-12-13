import ExampleClientComponent from "@/components/ExampleClientComponent";
import LanguageChanger from "@/components/LanguageChanger";
import initTranslations from "@/i18n";

const i18nNamespaces = ["home", "second"];

export default async function Home({ params }: { params: { locale: string } }) {
    const { locale } = params;
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <main className="absolute left-1/2 text-center top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-2xl mb-2">{t("header")}</h1>
            <ExampleClientComponent />
            <LanguageChanger />
            <div>hello translate: {t("second:hello")}</div>
        </main>
    );
}
