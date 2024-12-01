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
    fetchData()
  }, [doFetchTrees]) 
  if (!trees.length) return <p>Loading trees...</p> 

  return (
    <div className={style.treesContainer}>
      {trees.map((tree, index) => (
        <TreeCard key={index} tree={tree} />
      ))}
    </div>
  )
}

export default TreesContainer
