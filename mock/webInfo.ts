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
    url: "/mockApi/model/modelList",
    method: "get",
    timeout: 2000,
    response: ({ query }) => ({
      code: 0,
      data: {
        pageModelVOList: [
          {
            picture: "/img/banner-bg2.png",
            name: "原神 - 妮露DiffSinger模型",
            modelType: "[1,2,3,4]",
            types: [{ id: "1", type: "妮露" }],
            lookNum: 0,
            uploadDate: "222",
            avatar: "/img/user-placeholder.webp",
            nickname: "RVC",
            mid: "22",
            uid: "222",
          },
        ],
        total: 1,
        page: 1,
      },
    }),
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
