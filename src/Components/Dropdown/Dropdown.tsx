import React, {useState} from 'react'
import './Dropdown.scss'
import {Genre, MoviesP} from '../../interface'

interface Props {
  bodyData: Genre[],
  width: number,
  currValue: Genre | undefined,
  isActive: boolean,
  setIsActive: Function,
  selectValue: Function
}

const Dropdown:React.FC<Props> = ({bodyData, width, currValue, isActive, setIsActive, selectValue}):JSX.Element => {

  

  return (
    <div className ={`dropdown ${isActive ? 'active' : ''}`} style = {{width: `${width}rem`}}>
        <div className="dropdown-head" onClick={() => setIsActive(!isActive)}>
           {
             currValue ? (
              <div className="dropdown-head_selected">
                <span>{currValue?.name}</span>
              </div>
             ): ''
           }
           <i className='bx bx-chevron-down' ></i>
        </div>
        {
          bodyData.length > 0 ? (
            <div className="dropdown-body">
                <div className="dropdown-body_item" onClick={() => selectValue(9999999, 'all')} >
                    All
                </div>
                {
                  bodyData.map((genre, index) => (
                    <div key={index} className="dropdown-body_item" onClick={() => selectValue(genre.id, genre.name)}>
                      {genre.name}
                    </div>
                  ))
                }
            </div>
          ): ''
        }
    </div>
  )
}

export default Dropdown