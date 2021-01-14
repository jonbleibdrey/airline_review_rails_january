import axios from "axios";
import React, {useState, useEffect} from "react";
import Header from './Header'


const Airlines = (props) => {

    const [Airline,setAirline] = useState({})
    const [review,setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const slug = props.match.params.slug
        const url = `/api/v1/airlines/${slug}`

        axios.get(url)
        .then(resp => {setAirline(resp.data)
        setLoaded(true)
        })
        .catch(resp => console.log(resp))
    },[])

  return (
  <div className="wrapper">
      <div className="column">
          <Header attributes={airline.data.attributes}/>
          <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="review-form">[review goes heere.]</div>
      </div>

  </div>
  )
};


export default Airlines;
