type ModelDetail = Record<
  | "mid"
  | "uid"
  | "nickname"
  | "avatar"
  | "name"
  | "picture"
  | "modelType"
  | "uploadDate"
  | "aiType"
  | "description"
  | "note",
  string
> &
  Record<"collectionNum" | "lookNum" | "likeNum", number> & {
    types: Record<"id" | "type", string>[];
  };

type AddModelType = Record<
  | "aiType"
  | "description"
  | "fid"
  | "mid"
  | "name"
  | "note" ,
  string
> & {
  picture:any;
  modelType:string[];
};
