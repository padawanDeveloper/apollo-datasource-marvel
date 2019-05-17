import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import { withStyles } from '@material-ui/core/styles'

import Spinner from '../../../components/utils/Spinner'

const styles = theme => ({
  rootContainer: {
    flex: 1,
    border: '1px solid black',
  },
  gridList: {
    overflow: 'scroll',
  },
  gridListTile: {
    padding: theme.spacing.unit / 4,
  },
  marketName: {
    color: theme.palette.custom.accent,
  },
  paper: {},
})

const GET_SERIES = gql`
  query series {
    series {
      title
    }
  }
`

export default withWidth()(
  withStyles(styles)(({ classes, width }) => (
    <Query query={GET_SERIES} pollInterval={60000}>
      {({ loading, error, data }) => {
        if (error) return `Error: ${error}`
        if (loading) return <Spinner />
        const { series } = data
        return (
          <GridList cellHeight={100} classes={{ root: classes.gridList }} cols={5} spacing={16}>
            <h1>Grid SERIES</h1>
            {series.map(({ title }) => (
              <h1 key={title}>{title}</h1>
            ))}
          </GridList>
        )
      }}
    </Query>
  )),
)
