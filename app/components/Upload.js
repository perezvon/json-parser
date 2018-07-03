// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Upload.css';

type Props = {
  upload: () => void,
  handleFile: () => void,
  file: object
};

export default class Upload extends Component<Props> {
  props: Props;

  render() {
    console.log(this.props);
    const {
      upload,
      handleFile,
      file
    } = this.props;
    const fileTree = file
      .map(f =>
        <tr key={f.number}>
          <td>{f.type}</td>
          <td>{f.stem}</td>
        </tr> );
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`file ${styles.file}`} data-tid="file">
          <span style={{fontWeight: 'bold'}}># of Questions:</span> {file.length} <br />
          <table className={styles.dataTable}>
            <tbody>
              <tr>
                <th>Type</th>
                <th>Name</th>
              </tr>
              {fileTree}
            </tbody>
          </table>
        </div>
          <input
          className={styles.fileInput}
            type='file'
            onChange={e => handleFile(e.target.files)}
          >
          </input>
      </div>
    );
  }
}
