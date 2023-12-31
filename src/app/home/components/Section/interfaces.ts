import { type IAppChildrenProps } from "@/features/app/interfaces";

export interface ISectionProps extends IAppChildrenProps {
  onClickShowAll?: () => void;
  showAll?: boolean;
  loading?: boolean;
  title: string;
}
