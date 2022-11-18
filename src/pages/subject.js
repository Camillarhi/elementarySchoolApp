import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadSingleSubject } from '../store/modules/subject';

export default function Subject() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const subject = useSelector((state) => state.subject?.subject);

  useEffect(() => {
    dispatch(loadSingleSubject(id));
  }, [dispatch, id]);

  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-end'>
        <Link to="/home" className='btn btn-secondary '>back</Link></div>
      <div className='pt-3'>
        <h2 className='text-center'>{subject.name}</h2>
        <h5>{subject.description}</h5>
      </div>

    </div>
  )
}
