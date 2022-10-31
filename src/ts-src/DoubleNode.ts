export interface DoubleNode {
    id: number
    label: string
    description: string
    children: DoubleNode[]
    leafStatus: boolean
    parentId?: number
}