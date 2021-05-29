import {useState,useEffect} from 'react';
import consultaAPI from '../helpers/ConsultaApi';

const useFetchGifs = (categoria) => {
    
    const [state, setState] = useState({
        data:[],
        loading:true
    });
    useEffect(() => {
        consultaAPI(categoria).then(img=>setState({ data:img,loading:false}));
    }, [categoria]);

    
    return state; //{data:[],loading:true}
    
}

export default useFetchGifs
