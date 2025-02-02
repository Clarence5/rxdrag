import { useCallback } from "react";
import { Node } from "@antv/x6"
import { useGetNodeWidth } from "./useGetNodeWidth";
import { useGetNodeHeight } from "./useGetNodeHeight";
import { IActivityNode } from "../interfaces";
import { ActivityType } from "@rxdrag/minions-schema";
import { useTransformPorts } from "./useTransformPorts";
import { useGetSubLabel } from "./useGetSubLabel";

export function useUpdateNode() {
  const getNodeWidth = useGetNodeWidth()
  const getHeight = useGetNodeHeight()
  const transPorts = useTransformPorts()
  const getSubLabel = useGetSubLabel()
  const update = useCallback((graphNode: Node<Node.Properties>, nodeMeta: IActivityNode) => {
    if (nodeMeta.x6Node) {
      graphNode.setPosition(nodeMeta.x6Node);
      const subLabel = getSubLabel(nodeMeta)
      const height = getHeight(nodeMeta, !!subLabel)
      const ports = transPorts(nodeMeta)
      graphNode.replaceData({ 
        ...graphNode.data, 
        meta: nodeMeta, 
        subLabel, 
        height: height,
        inputCounts: nodeMeta.inPorts?.length || ports.filter(port => port.group === 'in').length,
        outputCounts: nodeMeta.outPorts?.length || ports.filter(port => port.group === 'out').length,
       })
      if (nodeMeta.type === ActivityType.Start || nodeMeta.type === ActivityType.End) {
        graphNode.attr("text/text", nodeMeta.label)
      } else {
        graphNode.setSize({ ...nodeMeta.x6Node, width: getNodeWidth(nodeMeta, subLabel), height: height });
        const oldPorts = graphNode.getPorts()
        //const ports = transPorts(nodeMeta)
        for (const port of ports || []) {
          if (oldPorts.find(prt => prt.id === port.id)) {
            graphNode.portProp(port.id, 'attrs/text/text', port.attrs.text.text)
          } else {
            graphNode.addPort(port)
          }
        }

        for (const port of oldPorts) {
          if (!ports.find(prt => prt.id === port.id)) {
            graphNode.removePort(port.id || "")
          }
        }
      }
    }
  }, [getHeight, getNodeWidth, getSubLabel, transPorts])

  return update
}