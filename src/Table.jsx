import React, { useState } from "react"

import { kaReducer, Table } from "ka-table"
import { DataType, FilteringMode, SortingMode } from "ka-table/enums"
import FilterRowNumber from "ka-table/Components/FilterRowNumber/FilterRowNumber"
import brazilFlag from "./assets/br_flag.svg"
import portugalFlag from "./assets/pt_flag.svg"

import "./Table.scss"

const OverviewDemo = (props) => {
  const dataArray = props.data.map((e, i) => {
    e.id = i

    return e
  })

  const HeadCell = ({ column: { title }, flag }) => {
    return (
      <div className="Table-cell--flag">
        <img src={flag === "pt_br" ? brazilFlag : portugalFlag} />
        <span>{title}</span>
      </div>
    )
  }

  const tablePropsInit = {
    columns: [
      {
        key: "pt_br",
        title: "Português (Brasil)",
        dataType: DataType.String,
      },
      {
        key: "pt_pt",
        title: "Português (Portugal)",
        dataType: DataType.String,
      },
      { key: "description", title: "Notas", dataType: DataType.String },
      {
        key: "nsfw",
        title: "Palavrão",
        dataType: DataType.Boolean,
      },
      { key: "is_sentence", title: "Frase", dataType: DataType.Boolean },
      {
        key: "example_pt_br",
        title: "Exemplo (pt-br)",
        dataType: DataType.String,
      },
      {
        key: "example_pt_pt",
        title: "Exemplo (pt-pt)",
        dataType: DataType.String,
      },
      { key: "slang", title: "Gíria", dataType: DataType.Boolean },
      { key: "type", title: "Tipo", dataType: DataType.String },
      {
        key: "important",
        title: "ùtil saber",
        dataType: DataType.Boolean,
      },
    ],
    data: dataArray,
    rowKeyField: "id",
    sortingMode: SortingMode.Single,
    columnResizing: true,
    filteringMode: FilteringMode.FilterRow,
    paging: {
      enabled: true,
      pageIndex: 0,
      pageSize: 20,
      position: "bottom",
    },
    format: ({ column, value }) => {
      if (column.key === "nsfw") {
        return value === true ? "Sim" : "Não"
      }
    },
  }

  const [tableProps, changeTableProps] = useState(tablePropsInit)
  const dispatch = (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action))
  }

  return (
    <div class="Table">
      <Table
        {...tableProps}
        childComponents={{
          headCellContent: {
            content: (props) => {
              if (
                props.column.key === "pt_br" ||
                props.column.key === "pt_pt"
              ) {
                return <HeadCell flag={props.column.key} {...props} />
              }
            },
          },
        }}
        dispatch={dispatch}
      />
    </div>
  )
}

export default OverviewDemo
