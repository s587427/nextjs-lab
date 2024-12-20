import "../globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local"
import i18nConfig, { defaultI18nNamespaces } from "@/i18n/i18nConfig"
import initTranslations from "@/i18n"
import TranslationsProvider from "@/providers/TranslationsProvider"
import { cookies } from "next/headers"
import StoreProvider from "@/providers/StoreProvider"

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
})
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: { lang: string }
}>) {
    const cookieStorage = cookies()
    const cookieLocale = cookieStorage.get(i18nConfig.localeCookie)?.value

    const { lang } = params
    const { t, resources } = await initTranslations(lang, defaultI18nNamespaces)

    console.log("server refresh", cookieLocale)

    // 模擬請求
    const data = await fetch("http://localhost:3000/api/counter", { cache: "no-store" })
    const dataJson = await data.json()
    const count = dataJson.data

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} min-h-[100vh] antialiased`}
            >
                <StoreProvider count={count}>
                    <TranslationsProvider
                        locale={lang}
                        namespaces={defaultI18nNamespaces}
                        resources={resources}
                    >
                        {children}
                    </TranslationsProvider>
                </StoreProvider>
            </body>
        </html>
    )
}
