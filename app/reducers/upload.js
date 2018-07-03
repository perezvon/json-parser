// @flow
import { UPLOAD_FILE } from '../actions/upload';

export type uploadStateType = {
  +file: object
};

type actionType = {
  +type: string
};

export default function upload(state = [], action: actionType) {
  switch (action.type) {
    case UPLOAD_FILE:
      return action.payload;
    default:
      return state;
  }
}
