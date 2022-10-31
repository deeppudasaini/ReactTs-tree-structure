// const onSelect = (
//     keys: Key[],
//     event: {
//         event: 'select';
//         selected: boolean;
//         node: any;
//         selectedNodes: DataNode[];
//         nativeEvent: MouseEvent;
//     },
// ) => {
//     const { multiple } = props;
//     const { node, nativeEvent } = event;
//     const { key = '' } = node;

//     const treeData = getTreeData(props);
//     // const newState: DirectoryTreeState = {};

//     // We need wrap this event since some value is not same
//     const newEvent: any = {
//         ...event,
//         selected: true, // Directory selected always true
//     };

//     // Windows / Mac single pick
//     const ctrlPick: boolean = nativeEvent?.ctrlKey || nativeEvent?.metaKey;
//     const shiftPick: boolean = nativeEvent?.shiftKey;

//     // Generate new selected keys
//     let newSelectedKeys: Key[];
//     if (multiple && ctrlPick) {
//         // Control click
//         newSelectedKeys = keys;
//         lastSelectedKey.current = key;

//         newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys);
//     } else if (multiple && shiftPick) {
//         // Shift click
//         newSelectedKeys = Array.from(
//             new Set([
//                 ...(cachedSelectedKeys.current || []),
//                 ...calcRangeKeys({
//                     treeData,
//                     expandedKeys,
//                     startKey: key,
//                     endKey: lastSelectedKey.current,
//                 }),
//             ]),
//         );
//         newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys);
//     } else {
//         // Single click
//         newSelectedKeys = [key];
//         lastSelectedKey.current = key;

//         newEvent.selectedNodes = convertDirectoryKeysToNodes(treeData, newSelectedKeys);
//     }

//     props.onSelect?.(newSelectedKeys, newEvent);
//     if (!('selectedKeys' in props)) {
//         setSelectedKeys(newSelectedKeys);
//     }
// };

// return (
// //     <Tree
// //       icon= { getIcon }
// // ref = { ref }
// // blockNode
// // {...otherProps }
// // showIcon = { showIcon }
// // expandAction = { expandAction }
// // prefixCls = { prefixCls }
// // className = { connectClassName }
// // expandedKeys = { expandedKeys }
// // selectedKeys = { selectedKeys }
// // onSelect = { onSelect }
// // onExpand = { onExpand }
// //     />
//   );
// };




// function traverseNodesKey(
//     treeData: DataNode[],
//     callback: (key: Key | number | null, node: DataNode) => boolean,
// ) {
//     function processNode(dataNode: DataNode) {
//         const { key, children } = dataNode;
//         if (callback(key, dataNode) !== false) {
//             traverseNodesKey(children || [], callback);
//         }
//     }

//     treeData.forEach(processNode);
// }


// export function convertDirectoryKeysToNodes(treeData: DataNode[], keys: Key[]) {
//     const restKeys: Key[] = [...keys];
//     const nodes: DataNode[] = [];
//     traverseNodesKey(treeData, (key: Key, node: DataNode) => {
//         const index = restKeys.indexOf(key);
//         if (index !== -1) {
//             nodes.push(node);
//             restKeys.splice(index, 1);
//         }

//         return !!restKeys.length;
//     });
//     return nodes;
// }