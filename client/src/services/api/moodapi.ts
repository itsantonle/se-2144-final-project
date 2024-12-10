import axios from 'axios';
import Mood from "../../types/Mood"

const URL = "https://pets-node-backend.onrender.com/moods"
const moodAPI = axios.create({baseURL: URL})
 
export const getMoods = async () => {
    return (await moodAPI.get(`/getAllMoods`)).data.data
}

export const createMood = async (mood: Mood) => {
    await moodAPI.post('/createMood', mood)
}

export const updateMoodType = async (mood_id: number, mood_type: string) => {
    await moodAPI.put(`/updateMoodType/${mood_id}`, {mood_type})
}

export const updateMoodCondition = async (mood_id: number, mood_condition: string) => {
    await moodAPI.put(`/updateMoodCondition/${mood_id}`, {mood_condition})
}

export const updatePetMood = async (player_uuid: string, mood_id: number) => {
    await moodAPI.put(`/updatePetMood/${player_uuid}`, { mood_id })
}

export const setToDefaultMood = async (player_uuid: string) => {
    await moodAPI.put(`/setToDefaultMood/${player_uuid}`)
  }

export const deleteMood = async (mood_id: number) => {
    await moodAPI.delete(`/deleteMood/${mood_id}`)
  }
  
