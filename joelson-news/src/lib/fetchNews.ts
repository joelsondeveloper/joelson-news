export function getNotices (tag: string) {
    const url = `https://newsdata.io/api/1/latest?apikey=${process.env.NEWS_API_KEY}&q=${tag}&language=pt-br`;
}