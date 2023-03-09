const OutputTable = ({outputs, items}) => {
  //items.find(i => item.itemID === i.id).itemName
  const outp = outputs.map(op => {
    const findItem = items.find(i => op.itemId === i.id)
    //console.log(`findItem: `, findItem)
    return (
      {
        "item": findItem.itemName,
        "count": op.count,
        "time": findItem.time,
        "day": "22.3.23",
        "id": op.id
      }
    )
  })

  //console.log(`OutputTable outp length: ${outp.length}`, items)
  return (
    <table>
      <thead><tr><th>TUOTE</th><th>MÄÄRÄ</th><th>OUTPUT</th></tr></thead>
      <tbody>
        {outp.map(o => <tr key={o.id}><td>{o.item}</td><td>{o.count} kpl</td><td>{(o.count * o.time).toFixed(2)} h</td></tr>)}
      </tbody>
    </table>
    //{items.map(i => <li>{i.itemName}</li>)}
  )
}

export default OutputTable