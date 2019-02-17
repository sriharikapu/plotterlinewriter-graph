import {BigInt} from '@graphprotocol/graph-ts'
import { LineSet } from './types/schema'
import { DrawLines } from './types/PlotterLineWriter/PlotterLineWriter'

export function handleNewPlotterLineWriter(event: DrawLines): void {
  let lineSet = new LineSet(
    event.params.id.toHex()
  )
  lineSet.x = event.params.x;
  lineSet.y = event.params.y;
  lineSet.p = event.params.p;
  
  lineSet.save()
}
