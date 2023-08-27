import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { type TRootDispatch, type TRootState } from "@/plugins/redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => TRootDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
