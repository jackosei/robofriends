import React from "react"
import "../styles/card.css"


const Card = ({name, email, id}) => {
    return (
        <div className="card">
            <img src={`https://robohash.org/img${id}?200x200`} alt={`${name} Robot`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}


// const Card = (props) => {
//     const {name, email, id} = props
//     return (
//         <div className="card">
//             <img src={`https://robohash.org/img${id}?200x200`} alt={`${name} Robot Photo`} />
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }

// const Card = (props) => {
//     return (
//         <div className="card">
//             <img src={`https://robohash.org/img${props.id}?200x200`} alt={`${props.name} Robot Photo`} />
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }

export default Card