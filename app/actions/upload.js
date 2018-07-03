// @flow
const fs = require('fs');
import type { uploadStateType } from '../reducers/upload';

type actionType = {
  +type: string
};

export const UPLOAD_FILE = 'UPLOAD_FILE';

export function upload(json) {
  return {
    type: UPLOAD_FILE,
    payload: json
  };
}

export function handleFile(files) {
  return (dispatch: (action: actionType) => void) => {
    for (let file of files) {
      let type = file.name.split('.');
      type = type[type.length-1];
      if (type === 'json') {
        const result = fs.readFileSync(file.path);
        const json = JSON.parse(result);
        dispatch(upload(json));
      } else {
        alert('must be a JSON file');
      }
    };

  }
}
