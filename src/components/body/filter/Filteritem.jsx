import React from 'react'

export default function Filteritem({filters}) {
  return (
    <div>
        {filters.map((filter) => {
            return <button>{filter.name}</button>
        })}
    </div>
  )
}
