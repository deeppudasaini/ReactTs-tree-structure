export interface SingleNode {
    id: number
    label: string
    description: string
    children: SingleNode[]
    leafStatus: boolean
    // parentId: number
}