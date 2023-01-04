import { useState, useEffect } from "react"
import reactLogo from "./assets/react.svg"
import "semantic-ui-css/semantic.min.css"
import "./Polaris.scss"
import "./App.scss"
import useGoogleSheets from "use-google-sheets"
import Table from "./Table"
import { cleanExcelData } from "./utils"

/*
Source:

https://docs.google.com/spreadsheets/d/10umHWFRlbcU0JrA0AXqoQAb-aqOmI0QEtGz3oAC7moc/edit#gid=0
 
*/

function App() {
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
    <div>
      <header>Dicionário PT BR</header>
      {data &&
        data.map((e) => <Table data={cleanExcelData(data[0].data)}></Table>)}
    </div>
  )
}

export default App
