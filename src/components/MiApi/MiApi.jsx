
import './MiApi.css'
import { useState, useEffect } from 'react'

const MiApi = () => {
    const[students, setStudents] = useState([])
    const[allStudents, setAllStudents] = useState([])
    const[house, setHouse] = useState("")
   
   
    useEffect(() => {
        getStudents()
    }, [])

    useEffect(() => {
        filterData()
    }, [house])
    

    const getStudents = async () => {
        const url = "https://hp-api.herokuapp.com/api/characters/students"
        const res = await fetch(url)
        const json = await res.json()

        setAllStudents(json)
        setStudents(json)  

    }


    

    function filterData() {
        const filtered = allStudents.filter((student) => student.house === house)
        setStudents(filtered)
    }

  
 

    return (
        <div className="main-container">
            <div className="formulario-container">
                <form className="form" >
                    
                    <select name="house" id="house" className="form-select form-select-sm" onChange={(e) => setHouse(e.target.value)}>
                        <option  value="">Elige una casa</option>
                        <option id="g"value="Gryffindor">Gryffindor   🦁</option>
                        <option id="r" value="Ravenclaw">Ravenclaw   🦅</option>
                        <option id="s" value="Slytherin">Slytherin   🐍</option>
                        <option id="h" value="Hufflepuff">Hufflepuff   🦡</option>
                    </select>
                    
                </form>
            </div>

            <div className="container row row-cols-2 row-cols-md-2  m-4 g-4 galeria">
                
                        { 
                        students.map((student) => {
                            return (

                                <div className="card mx-auto " key={ student.name }>
                                    {!student.image ? <img src="https://cdn-icons-png.flaticon.com/512/1600/1600770.png" className="card-img-top" alt={ student.name }></img>
                                        : <img src={ student.image } className="card-img-top" alt={ student.name }></img>
                                      }
                                <div className="card-body">
                                    <h5 className="card-title">{ student.name }</h5>
                                    <p className="card-text">{ student.house }</p>
                                </div>
                            </div>
                            )
                        })}
                    
            
            </div>
        </div>
)}

export default MiApi;

