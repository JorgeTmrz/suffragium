import { MouseEventHandler } from "react"

export type validInputType = React.ChangeEvent<{
    value: string | undefined;
    name: any;
}>

export type validSubmitType = MouseEventHandler<HTMLAnchorElement>