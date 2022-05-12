import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  SyntheticEvent,
} from "react";
import classNames from "classnames";
import styles from "./pagination.module.css";

export interface PaginationRenderProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDetailsElement>,
    HTMLDetailsElement
  > {
  children: ReactNode;
  select?: boolean;
  onSelected: (f: SyntheticEvent) => void;
}

export const PaginationRender = ({
  children,
  select = false,
  onSelected = (f) => f,
}: PaginationRenderProps): JSX.Element => {
  return (
    <span
      onClick={onSelected}
      className={classNames(styles.element, {
        [styles.elementActive]: select,
      })}
    >
      {children}
    </span>
  );
};
