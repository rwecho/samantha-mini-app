import { ViewProps } from '@tarojs/components'
import { Stack } from '../Stack'
import { ResponsiveValue } from '../utils'

export interface HStackProps extends ViewProps {
  spacing?: ResponsiveValue<number | string>
  children: React.ReactNode
}

export const HStack = (props: HStackProps) => {
  let { spacing, children, ...rest } = props
  return (
    <Stack spacing={spacing} direction='row' {...rest}>
      {children}
    </Stack>
  )
}
