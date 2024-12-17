export async function GET() {
    const data = Math.floor(Math.random() * 100) // 產生 0 到 99 的隨機數字
    return Response.json({ data })
}
