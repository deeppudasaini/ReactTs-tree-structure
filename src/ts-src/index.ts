import { DoubleNode } from "./DoubleNode";
import { SingleNode } from "./SingleNode";

export default class TreeStructure {
    public path: string = ""
    public treeData: SingleNode[] = [
        {
            label: "Root",
            description: "This is the root directory",
            id: 0,
            leafStatus: false,
            children: [],
        },

    ]
    traverseThroughNodes(data: SingleNode[],
        action: (id: number | null, node: SingleNode) => boolean
    ) {
        data.forEach((d: SingleNode) => {

            if (action(d.id, d) !== false) {

                this.traverseThroughNodes(d.children || [], action);
            }
        })




    }

    addNodeOrLeaf(parentId: number, data: SingleNode): any {
        let response: any = { success: true, message: [] }
        if (data.label == "") {
            response.message.push("Please enter the label for the Node")
            response.success = false

        }
        if (data.description == "") {
            response.message.push("Please enter the description of the Node")
            response.success = false

        }

        if (response.message.length == 0) {
            this.traverseThroughNodes(this.treeData, (
                id, node
            ) => {

                if (node.id == parentId) {

                    if (node.leafStatus) {
                        response.message.push("Cannot add in a leaf")
                        response.success = false
                        return false
                    }
                    else {
                        node.children.push({ ...data, children: [], id: Math.floor(Math.random() * 10000) + 1 })


                        return false;
                    }
                }
                else {
                    return true
                }


            })
        }
        return response;

    }
    getTreeData() {
        return this.treeData;
    }
    deleteNodeOrLeaf(idToDelete: number) {
        this.traverseThroughNodes(this.treeData, (id, node) => {
            node.children.forEach(
                (childNode, index) => {
                    if (childNode.id == idToDelete) {
                        node.children.splice(index, 1);
                        return false
                    }


                }

            )
            return true
        })

    }
    getNodeOrLeafData(dataId: number) {
        const nodeData = []
        this.traverseThroughNodes(this.treeData, (id, node) => {
            if (id == dataId) {
                nodeData.push(node)
                return false
            }
        })
        return nodeData
    }


    searchNodeOrLeaf(keyword: any) {
        const nodeData = []
        this.traverseThroughNodes(this.treeData, (id, node) => {
            if (node.id == keyword || node.label == keyword || node.description == keyword || node.leafStatus == keyword) {
                nodeData.push(node)
            }
            return true
        })
        return nodeData

    }


    getTraversePath(treeDataobject: SingleNode, nodeToTraverse: SingleNode): string[] | null {
        if (treeDataobject === nodeToTraverse) {
            return [];
        } else if (treeDataobject.children) {
            for (let child of treeDataobject.children) {
                var traversepath = this.getTraversePath(child, nodeToTraverse);

                if (traversepath !== null) {
                    traversepath?.unshift(child.label);
                    return traversepath;
                }
            }
        }
        return null;
    }


}

// console.log(a.traversePath(a.treeData,))