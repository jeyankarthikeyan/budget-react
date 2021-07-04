import React from 'react'
import { Statistic } from 'semantic-ui-react'

const DisplayBalance = ({ title, value, size, color='brown', textAlign}) => {
    return(
        <Statistic size={size} color={color}>
                <Statistic.Label style={{textAlign}}>
                  {title}
                </Statistic.Label>
                <Statistic.Value>
                  {value}
                </Statistic.Value>
              </Statistic>
    )
}

export default DisplayBalance