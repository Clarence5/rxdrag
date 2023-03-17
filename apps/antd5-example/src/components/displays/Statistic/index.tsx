import { Statistic as AntdStatistic, StatisticProps } from "antd"
import { forwardRef, memo } from "react"
import { IconView } from "@rxdrag/react-shell-antd/components/IconView";
import { IIcon } from "@rxdrag/react-shell-antd/components/IconView/model";

export const Statistic = memo(forwardRef<HTMLDivElement, StatisticProps & { prefix: IIcon }>((props, ref) => {
  const { prefix, ...other } = props;
  return (
    <div ref={ref}>
      <AntdStatistic
        prefix={prefix && <IconView icon={prefix} />}
        {...other}
      />
    </div>
  )
}))