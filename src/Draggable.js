import React, {useState} from 'react';
import './draggable.css';

const Draggable = ({children}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="draggable"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                position: 'relative',
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <div className="title-bar" onMouseDown={handleMouseDown}>
                Title
            </div>
            <div className="content">{children}</div>
        </div>
    )
}

export default Draggable