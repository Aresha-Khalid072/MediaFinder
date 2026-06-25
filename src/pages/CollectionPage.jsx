import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {

  const collection = useSelector(state => state.collection.items)

  const dispatch = useDispatch()
  const clearAll = () => {
    dispatch(clearCollection())
  }

  return (
    <div className='gap-6 overflow-auto px-7'>

      <div className='flex justify-between mb-6'>
        <h2 className='text-xl font-medium'>Your Collection</h2>
        <button
          onClick={() => {
            clearAll()
          }}
          className='bg-red-600 active:scale-95 transition px-5 py-2 text-base font-medium'
        >
          Clear Collection
        </button>
      </div>

      <div className='flex flex-wrap justify-between'>
        {
          collection.map((item, idx) => (
            <div key={item.id || idx}>
              <CollectionCard item={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPage