import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getByDetail, clearDetail } from "../../redux/actions/index";
import "./Detail.css"; 
import notFound from '../../assets/notFound.gif'
import loadingGif from '../../assets/loading.gif'

const Detail = () => {
    let { id } = useParams();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getByDetail(id))
        .then(()=>setLoading(false))
        .catch(()=>{
            setLoading(false)
        })

        return () => dispatch(clearDetail());
    }, []);

    const detailPokemons = useSelector((state) => state.detail);

        return (
            <div className="main-container">
                {loading ? (
                    <div className="loading-container">
                        <img src={loadingGif} alt="Loading..." className="loading" />
                        <p>Loading...</p>
                    </div>
                ) : detailPokemons.length > 0 ? (
                    <div className="detail-container">
                        <Link to="/home">
                            <button className="back-button">Back to Home</button>
                        </Link>
                        <h1 className="detail-title">{detailPokemons[0].name}</h1>
        
                        <div className="detail-content">
                            <img src={detailPokemons[0].image} alt="" className="detail-image" />
        
                            <div className="detail-attributes">
                                <div className="detail-attribute">
                                    <strong>TYPES: {detailPokemons[0].types}</strong> 
                                </div>
        
                                <div className="detail-attribute">
                                    <strong>HP:</strong>
                                    <div className="bar">
                                        <div className="fill" style={{ width: `${detailPokemons[0].hp}%` }}>{detailPokemons[0].hp}%</div>
                                    </div>
                                </div>
        
                                <div className="detail-attribute">
                                    <strong>ATTACK:</strong>
                                    <div className="bar">
                                        <div className="fill" style={{ width: `${detailPokemons[0].attack}%` }}>{detailPokemons[0].attack}%</div>
                                    </div>
                                </div>
        
                                <div className="detail-attribute">
                                    <strong>DEFENSE:</strong>
                                    <div className="bar">
                                        <div className="fill" style={{ width: `${detailPokemons[0].defense}%` }}>{detailPokemons[0].defense}%</div>
                                    </div>
                                </div>
        
                                <div className="detail-attribute">
                                    <strong>SPEED:</strong>
                                    <div className="bar">
                                        <div className="fill" style={{ width: `${detailPokemons[0].speed}%` }}>{detailPokemons[0].speed}%</div>
                                    </div>
                                </div>
        
                                <div className="detail-attribute">
                                    <strong>HEIGHT: {detailPokemons[0].height}cm</strong> 
                                </div>
        
                                <div className="detail-attribute">
                                    <strong>WEIGHT: {detailPokemons[0].weight}kg</strong> 
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div>
                            <img src={notFound} alt="not found" />
                        </div>
                        <h1>Pokemon Not Found</h1>
                    </>
                )}
            </div>
        );
        
}

export default Detail;
