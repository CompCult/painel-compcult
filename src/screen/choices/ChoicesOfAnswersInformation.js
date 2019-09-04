import React, { useEffect, useState } from 'react'
import ChoicesApi from './ChoicesApi.js'

function ChoicesOfAnswersInformation(props) {
    
    const [choice, setChoice] = useState()
    
    useEffect(() => {
        const id = props.match.params.id
        console.log(id)

        ChoicesApi.getChoicesOfAnswersInformationApi(id)
        .then(res => {
            const choice = res.data
            setChoice(choice)
        })

    }, [])

    console.log(choice)

  return (
    <div>
       
        
    </div>
  )
}

export default ChoicesOfAnswersInformation