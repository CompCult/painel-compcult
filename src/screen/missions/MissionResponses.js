import React, { Fragment } from 'react'
import Table from '../../components/Table.js'
import MyContext from '../../components/MyContext.js'

function MissionResponses() {

  const dataTable = {
        title : 'table MissionResponses',
        columns : [
            {
            name: "Name",
            options: {
                filter: true,
                sort: true
            }
            },
            "Title",
            "Location",
            "Age",
            "Salary"
        ],

        data : [
            ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"]
        ]
  }

  return (
  
    <Fragment>
        <MyContext.Provider value={dataTable}>
            <Table/>
        </MyContext.Provider>
    </Fragment>
  );
}

export default MissionResponses