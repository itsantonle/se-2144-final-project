import express from 'express';
import {
    getMoods,
    updateMoodType,
    updateMoodCondition,
    createMood,
    updatePetMood,
    setToDefaultMood,
    deleteMood


} from '../controllers/moodController'

const router = express.Router();

router.route('/getMoods/:player_uuid').get(getMoods)
router.route('/updateMoodType/:mood_id').put(updateMoodType)
router.route('/updateMoodCondition/:mood_id').put(updateMoodCondition)
router.route('/createMood/:player_uuid').post(createMood)
router.route('/updatePetMood/:player_uuid').put(updatePetMood)
router.route('/setToDefaultMood/:player_uuid').put(setToDefaultMood)
router.route('/deleteMood/:mood_id').delete(deleteMood)



export default router