import { useState, useEffect } from "react"
import reactLogo from "./assets/react.svg"
import "semantic-ui-css/semantic.min.css"
import "./App.scss"
import useGoogleSheets from "use-google-sheets"
import Table from "./Table"
import M from "materialize-css"

/*

https://docs.google.com/spreadsheets/d/10umHWFRlbcU0JrA0AXqoQAb-aqOmI0QEtGz3oAC7moc/edit#gid=0

*/

function App() {
  useEffect(() => M.AutoInit())

  const { data, loading, error } = useGoogleSheets({
    sheetId: `10umHWFRlbcU0JrA0AXqoQAb-aqOmI0QEtGz3oAC7moc`,
    apiKey: `AIzaSyA3ZfRwr4q29D77RUVS0F03KvSWRlTSpz8`,
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error!</div>
  }

  return (
    <div>{data && data.map((e) => <Table data={data[0].data}></Table>)}</div>
  )
}

export default App
