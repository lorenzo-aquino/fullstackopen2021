import React from 'react'

const Entry = ({id, name, handleChange}) => (
        <div>
        	{name}: <input id={id} onChange={handleChange}/>
        </div>
)

export default Entry