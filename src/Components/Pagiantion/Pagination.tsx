import React,{useState} from 'react'
import './Pagination.scss'

interface Props {
  dataBody: number, 
  selectPage: Function,
  currPage: number
}

const Pagination:React.FC<Props> = ({dataBody, selectPage, currPage}):JSX.Element => {
  return (
        <div className={`pagination-item ${currPage === dataBody ? 'active' : ''}`} onClick={() => selectPage(dataBody)}>
            {dataBody + 1}
        </div>
  )
}

export default Pagination