import { type ReactNode } from "react";

type InfoBoxPropsWarning = {
  children: ReactNode;
  mode: "warning";
  severity: "high" | "low" | "medium";
};
type InfoBoxPropsHint = {
  children: ReactNode;
  mode: "hint";
};
type InfoBoxProps = InfoBoxPropsWarning | InfoBoxPropsHint;
export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;
  if (mode === "hint")
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <p>Warning</p>
      <p>{children}</p>
    </aside>
  );
}
