"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TreeStructure {
    constructor() {
        this.path = "";
        this.treeData = [
            {
                label: "Root",
                description: "This is the root directory",
                id: 0,
                leafStatus: false,
                children: [],
            },
        ];
    }
    traverseThroughNodes(data, action) {
        data.forEach((d) => {
            if (action(d.id, d) !== false) {
                this.traverseThroughNodes(d.children || [], action);
            }
        });
    }
    addNodeOrLeaf(parentId, data) {
        let response = { success: true, message: [] };
        if (data.label == "") {
            response.message.push("Please enter the label for the Node");
            response.success = false;
        }
        if (data.description == "") {
            response.message.push("Please enter the description of the Node");
            response.success = false;
        }
        if (response.message.length == 0) {
            this.traverseThroughNodes(this.treeData, (id, node) => {
                if (node.id == parentId) {
                    if (node.leafStatus) {
                        response.message.push("Cannot add in a leaf");
                        response.success = false;
                        return false;
                    }
                    else {
                        node.children.push({ ...data, children: [], id: Math.floor(Math.random() * 10000) + 1 });
                        return false;
                    }
                }
                else {
                    return true;
                }
            });
        }
        return response;
    }
    getTreeData() {
        return this.treeData;
    }
    deleteNodeOrLeaf(idToDelete) {
        this.traverseThroughNodes(this.treeData, (id, node) => {
            node.children.forEach((childNode, index) => {
                if (childNode.id == idToDelete) {
                    node.children.splice(index, 1);
                    return false;
                }
            });
            return true;
        });
    }
    getNodeOrLeafData(dataId) {
        const nodeData = [];
        this.traverseThroughNodes(this.treeData, (id, node) => {
            if (id == dataId) {
                nodeData.push(node);
                return false;
            }
        });
        return nodeData;
    }
    searchNodeOrLeaf(keyword) {
        const nodeData = [];
        this.traverseThroughNodes(this.treeData, (id, node) => {
            if (node.id == keyword || node.label == keyword || node.description == keyword || node.leafStatus == keyword) {
                nodeData.push(node);
            }
            return true;
        });
        return nodeData;
    }
    getTraversalPath(idToTraversePath) {
        let path = [];
        this.traverseThroughNodes(this.treeData, (id, node) => {
            path.push(node.label);
            if (id == idToTraversePath) {
                return false;
            }
            else {
                return true;
            }
        });
        return path;
    }
    getTraversePath(treeDataobject, nodeToTraverse) {
        if (treeDataobject === nodeToTraverse) {
            return [];
        }
        else if (treeDataobject.children) {
            for (let child of treeDataobject.children) {
                var traversepath = this.getTraversePath(child, nodeToTraverse);
                if (traversepath !== null) {
                    traversepath === null || traversepath === void 0 ? void 0 : traversepath.unshift(child.label);
                    return traversepath;
                }
            }
        }
        return null;
    }
}
exports.default = TreeStructure;
// console.log(a.traversePath(a.treeData,))
