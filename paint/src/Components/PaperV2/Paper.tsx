/*
 * Paper ((Component))
 */
import { Paper as MuiPaper } from '@material-ui/core'
import * as React from 'react'

const Paper = ({
	children,
	className,
	elevation = 3,
	id,
	square = false,
	onClick,
	style
}: Props) => (
	<MuiPaper
		id={id}
		className={className}
		elevation={elevation}
		square={square}
		onClick={onClick}
		style={style}
	>
		{children}
	</MuiPaper>
)

interface Props {
	/** Unique ID */
	id?: string
	className?: string
	children?: React.ReactNode
	/** Accepts 0 - 24 */
	elevation?: number
	/** Square or Rounded Corners */
	square?: boolean
	style?: React.CSSProperties
	onClick?: (event: any) => void
}

export default Paper

