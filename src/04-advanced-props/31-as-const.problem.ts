import { Equal, Expect } from "../helpers/type-utils";

const BACKEND_TO_FRONTEND_STATUS_MAP = {
  thinking: "pending",
  good: "success",
  bad: "error",
} as const;

type BackendStatusMap = typeof BACKEND_TO_FRONTEND_STATUS_MAP;
type BackendStatus = keyof BackendStatusMap;
type FrontendStatus = BackendStatusMap[BackendStatus];

type test = [
  Expect<Equal<BackendStatus, "thinking" | "good" | "bad">>,
  Expect<Equal<FrontendStatus, "pending" | "success" | "error">>
];

// Generics
type MapKey<T> = keyof T;
type MapValue<T> = T[MapKey<T>];

type GenericBackendStatus = MapKey<BackendStatusMap>;
type GenericFrontendStatus = MapValue<BackendStatusMap>;

type testGenerics = [
  Expect<Equal<GenericBackendStatus, "thinking" | "good" | "bad">>,
  Expect<Equal<GenericFrontendStatus, "pending" | "success" | "error">>
];
