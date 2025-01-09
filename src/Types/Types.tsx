import { ReactNode } from "react";

export interface IRootLayoutProps {
  children: ReactNode;
}

export type ISignBtnProps = {
  text: string;
  icon: React.ReactNode;
};
