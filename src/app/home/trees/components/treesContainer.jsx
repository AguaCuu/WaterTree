import React, { useEffect } from 'react'
import * as style from '../../../page.module.css'
import TreeCard from './treeCard'
import { useStore } from '~/app/libs/store'

const TreesContainer = () => {
  const { doFetchTrees, trees } = useStore(state => state)

  useEffect(() => {
    const fetchData = async () => {
      await doFetchTrees()
    }
    // Fetch trees initially
    fetchData()
    // Set interval to fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 5000)
    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, [doFetchTrees]) 

  // Convert the object to an array of values
  const treeList = Object.values(trees)

  return (
    <div className={style.treesContainer}>
      {treeList.map(tree => (
        <TreeCard key={tree.id} tree={tree} />
      ))}
    </div>
  )
}

export default TreesContainer
