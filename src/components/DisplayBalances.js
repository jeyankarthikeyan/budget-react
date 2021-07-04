import React from 'react'
import { Segment, Grid} from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

const DisplayBalances = () => {
    return(
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title='Income' value='23223' size='tiny' color='green' textAlign='left'/>
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance title='Expenses' value='3223' size='tiny' color='red' textAlign='left'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances