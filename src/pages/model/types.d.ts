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

type AddModelForm = Record<
  | "aiType"
  | "description"
  | "mid"
  | "name"
  | "note"
  | "modelType"
  | "fid"
  | "picture",
  string
>;
