import * as Types from '../components/constants/ActionType';
import * as Message from '../components/constants/Message';
var inititalState = Message.MSG_WELLCOME;
const message = (state = inititalState, action) => {
    switch(action.type){
        case Types.CHANGE_MESSAGE : {
            return action.message;
        }
        default : return state;
    }
}

export default message;