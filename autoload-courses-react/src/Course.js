import React, { Component } from 'react';
import style from './Course.module.css';

class Course extends Component {
  render() {
    const {
      id,
      title,
      thumbnails: { w300 },
      lecturers,
    } = this.props;
    return (
      <div className={style.course}>
        <div
          className={style.cover}
          style={{
            backgroundImage: `url('${w300}')`,
          }}
        />
        <div className={style.info}>
          <div>
            <a className={style.title} href={`https://hiskio.com/courses/${id}/about`} target="_blank">{title}</a>
          </div>
          {lecturers.map(lecturer => (
            <label className={style.teacher}>{lecturer.username}</label>
          ))}
        </div>
      </div>
    );
  }
}

export default Course;
