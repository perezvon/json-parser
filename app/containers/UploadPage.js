import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Upload from '../components/Upload';
import * as UploadActions from '../actions/upload';

function mapStateToProps(state) {
  return {
    file: state.upload
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UploadActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
