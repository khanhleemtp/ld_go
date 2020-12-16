import ApiService from '../../services/api.service'
import { GET_LESSON } from './types'

export const getLesson = (currentLevel, topic) => async dispatch => {
    ApiService.setHeader();
    const { data } = await ApiService.get(`/get/${currentLevel}/${topic}`);
    dispatch({
        type: GET_LESSON,
        payload: data
    }) 
}

