import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";

export default [
  {
    url: "/mockApi/webInfo/getMember",
    method: "get",
    timeout: 2000,
    response: ({ query }) => {
      return {
        code: 0,
        data: Mock.mock({
          "members|5-10": [
            {
              nickname: "@cname",
              role: "@title(1)",
              description: "@title(1)",
              img: "@Image",
            },
          ],
        }),
      };
    },
  },

  {
    url: "/mockApi/text",
    method: "post",
    rawResponse: async (req, res) => {
      let reqbody = "";
      await new Promise((resolve) => {
        req.on("data", (chunk) => {
          reqbody += chunk;
        });
        req.on("end", () => resolve(undefined));
      });
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
] as MockMethod[];
