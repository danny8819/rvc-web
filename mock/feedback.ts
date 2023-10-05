export default function (config) {
  return [
    {
      url: '/mockApi/feedback/list',
      method: 'get',
      rawResponse: async (req, res) => {
         
        res.send(`hello`)
      },
    },
  ]
}