export default function (config) {
  return [
    {
      url: '/mockApi/text',
      method: 'post',
      rawResponse: async (req, res) => {
        let reqbody = ''
        await new Promise((resolve) => {
          req.on('data', (chunk) => {
            reqbody += chunk
          })
          req.on('end', () => resolve(undefined))
        })
        res.setHeader('Content-Type', 'text/plain')
        res.statusCode = 200
        res.end(`hello, ${reqbody}`)
      },
    },
  ]
}