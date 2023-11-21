import React from 'react'
import './_Pagination.scss'

const Pagination = ({ slides, activeIndex, onSlideChange, bulletSize, bulletHeight }) => {
    
    Pagination.defaultProps = {
        bulletSize: '8px',
        bulletHeight: '8px',
    };


    return (
        <div className="custom-pagination">
            {slides.map((_, index) => (
                <div
                    key={index}
                    className={`pagination-bullet ${index === activeIndex ? 'active' : ''}`}
                    style={{ width: bulletSize, height: bulletSize, margin: `0 ${bulletHeight}`, cursor: 'pointer' }}
                    onClick={() => onSlideChange(index)}
                />
            ))}
        </div>
    )
}

export default Pagination
