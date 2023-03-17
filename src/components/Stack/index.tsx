import { View, ViewProps } from '@tarojs/components'
import { Property } from 'csstype'
import React, { ComponentType } from 'react'
import { ResponsiveValue } from '../utils'

export interface StackProps extends ViewProps {
  direction?: Property.FlexDirection
  spacing?: ResponsiveValue<number | string>
}
export const Stack = (props: StackProps) => {
  let { direction, spacing, children, style, ...rest } = props

  direction = direction ?? 'column'

  let marginRow = ''
  let marginColumn = ''
  if (direction.includes('column')) {
    marginColumn = `var(--samantha-sizes-${spacing})`
  } else if (direction.includes('row')) {
    marginRow = `var(--samantha-sizes-${spacing})`
  }

  let itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: direction,
        width: '100%',
        ...(style as {})
      }}
      {...rest}>
      {React.Children.map(children, (child, index) => {
        if (index === 0) {
          return (
            <View
              key={index}
              style={{
                ...itemStyle
              }}>
              {child}
            </View>
          )
        }
        return (
          <View
            key={index}
            style={{
              ...itemStyle,
              marginTop: marginColumn,
              marginLeft: marginRow
            }}>
            {child}
          </View>
        )
      })}
    </View>
  )
}
