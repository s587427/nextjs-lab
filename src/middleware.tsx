import { i18nRouter } from "next-i18n-router"
import i18nConfig from "./i18n/i18nConfig"
import { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    const lang = request.cookies.get("lang")?.value
    console.log("run middleware", lang)
    // return i18nRouter(request, i18nConfig)
    // ? 如要實現應該預設一個沒找到的lang cookie值
}

// applies this middleware only to files in the app directory
export const config = {
    matcher: "/((?!api|static|.*\\..*|_next).*)",
}
