interface BaseResponse<T = unknown> {
  result: {
    msg: string
    code: number
  }
  data: T
}

interface Entry {
  explain: string
  entry: string
}

export default defineEventHandler(async event => {
  const res = await $fetch<
    BaseResponse<{
      query: string
      language: string
      type: string
      entries: Entry[]
    }>
  >('http://dict.youdao.com/suggest', {
    method: 'GET',
    query: getQuery(event),
  })
  return res
})
